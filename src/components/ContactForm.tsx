"use client"

import { z } from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import AnimatedButton from "./AnimatedButton";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "./ui/form";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const contactFormSchema = z.object({
    firstName: z.string().min(2, {
        message: "Il nome deve contenere almeno 2 caratteri."
    }).max(50, {
        message: "Il nome può contenere massimo 50 caratteri."
    }),
    email: z.string().email({ message: "Email non valida" }),
    phoneNumber: z.string().max(20, {
        message: "Il numero di telefono può contenere massimo 20 numeri."
    }).optional(),
    text: z.string().min(10, {
        message: "Il messaggio deve contenere almeno 10 caratteri."
    }).max(1000, {
        message: "Il messaggio può contenere massimo 1000 caratteri."
    }),
})

const ContactForm = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [isSuccess, setIsSuccess] = useState<boolean | undefined>(undefined);

    const contactForm = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            firstName: "",
            email: "",
            phoneNumber: "",
            text: "",
        },
    })

    async function onSubmit(values: z.infer<typeof contactFormSchema>) {
        setLoading(true);

        try {
            const { data } = await axios.post("/api/email/send", values);

            if (data.error) {
                setIsSuccess(false);
                console.error(data.error);
                return;
            }

            setIsSuccess(true);
        } catch (error) {
            console.error("Failed to send email:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Form {...contactForm}>
            <form
                onSubmit={contactForm.handleSubmit(onSubmit)}
                className="contact-form flex flex-col gap-6"
            >
                {/* user's name */}
                <FormField
                    control={contactForm.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Nome *"
                                    className="rounded-none p-6"
                                    disabled={loading}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* user's email */}
                <FormField
                    control={contactForm.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Email *"
                                    className="rounded-none p-6"
                                    disabled={loading}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* user's phone number */}
                <FormField
                    control={contactForm.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Numero di telefono"
                                    className="rounded-none p-6"
                                    disabled={loading}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* user's text */}
                <FormField
                    control={contactForm.control}
                    name="text"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea
                                    placeholder="Messaggio *"
                                    className="rounded-none p-6 min-h-[230px] max-h-[230px]"
                                    disabled={loading}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <AnimatedButton
                    path="javascript:void(0)"
                    text={loading ? "Invio in corso..." : "Manda un messaggio"}
                    width={loading ? 190 : 203}
                    disabled={loading}
                    onClick={() => contactForm.handleSubmit(onSubmit)()}
                />
                <p className="mt-5 text-xs">{isSuccess === undefined ? (
                    ""
                ) : (
                    isSuccess ? (
                        <div className="text-foreground">
                            Messaggio inviato con successo!
                        </div>
                    ) : (
                        <div className="text-red-500">
                            Errore durante l&apos;invio del messaggio!
                        </div>
                    )
                )}</p>
            </form>
        </Form>
    );
}

export default ContactForm;