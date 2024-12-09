import { Email } from "@/types/email.type";

export const EmailTemplate: React.FC<Readonly<Email>> = ({
  firstName,
  email,
  phoneNumber,
  text,
}) => (
  <div>
    <h1>FROM: {email}</h1>
    <h2>Ciao, sono {firstName}!</h2>
    <br />
    {phoneNumber !== undefined && (
      <h3>Numero di telefono: {phoneNumber}</h3>
    )}
    <br />

    <h2>Richiesta:</h2>
    <p>
      {text}
    </p>
  </div>
);