import { EmailTemplate } from '@/components/EmailTemplate';
import { isValidEmail, isValidPhoneNumber } from '@/lib/email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.ETERNALSTUDIO_FROM_EMAIL || "error";
const toEmail = process.env.PERSONAL_RECEIVER_EMAIL || "error";
const subject = process.env.ETERNALSTUDIO_DEFAULT_SUBJECT || "error";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, email, phoneNumber, text } = body;

        if (!firstName || !email || !text) { 
            return Response.json({ error: "Missing required fields" }, { status: 400 });
        }

        if (!isValidEmail(email)) {
            return Response.json({ error: "Invalid email format" }, { status: 400 });
        }

        if (phoneNumber && !isValidPhoneNumber(phoneNumber)) {
            return Response.json({ error: "Invalid phone number format" }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: [toEmail,],
            subject: subject,
            react: EmailTemplate({
                firstName: firstName,
                email: email,
                phoneNumber: phoneNumber || undefined,
                text: text,
            }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
