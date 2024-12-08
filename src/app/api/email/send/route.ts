import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const receiver = process.env.ETERNALSTUDIO_RECEIVER_EMAIL || "error";
const subject = process.env.ETERNALSTUDIO_DEFAULT_SUBJECT || "error";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, email, text } = body;

        const { data, error } = await resend.emails.send({
            from: email,
            to: [receiver,],
            subject: subject,
            react: EmailTemplate({
                firstName: firstName,
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
