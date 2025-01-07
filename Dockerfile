# root image
FROM node:23.5.0-alpine3.20

# create a work directory
WORKDIR /eternalstudio

# copy the whole project into the container's root folder
COPY . .

# install node modules dependancies
RUN npm install

# locally run the node server
CMD ["npm", "run", "dev"]