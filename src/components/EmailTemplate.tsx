import { Email } from "@/types/email.type";

export const EmailTemplate: React.FC<Readonly<Email>> = ({
  firstName,
  text,
}) => (
  <div>
    <h1>Ciao, sono {firstName}!</h1>
    <p>
      {text}
    </p>
  </div>
);