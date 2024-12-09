import { Email } from "@/types/email.type";

export const EmailTemplate: React.FC<Readonly<Email>> = ({
  firstName,
  email,
  text,
}) => (
  <div>
    <h1>FROM: {email}</h1>
    <h1>Ciao, sono {firstName}!</h1>
    <p>
      {text}
    </p>
  </div>
);