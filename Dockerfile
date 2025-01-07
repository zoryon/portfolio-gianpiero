# root node image
FROM node:23.5.0-alpine3.20 AS base

# create a work directory for node modules
WORKDIR /home/node

# copy package.json amd package-lock.json into the working directory (/app)
COPY package*.json ./

# install node modules dependancies
RUN npm install --legacy-peer-deps



# create a work directory for the actual frontend app
WORKDIR /home/node/app

# copy the rest of the project into the working directory (/app)
COPY ./ ./

# giving the image another alias to make a sort of "copy"
FROM base AS base-remote

# argument environment type
ARG NEXT_PUBLIC_ENVIRONMENT

# put the variable into the .env file
RUN echo "NEXT_PUBLIC_ENVIRONMENT=${NEXT_PUBLIC_ENVIRONMENT}" >> /home/node/app/.env

# expose the port used by nextjs
EXPOSE 3000

# creating an optimized production-ready build
RUN npm run build

# dev environment
FROM base AS image-development
CMD [ "npm", "run", "dev" ]

# prod environment
FROM base-remote AS image-production
CMD [ "npm", "run", "start" ]