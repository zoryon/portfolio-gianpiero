"use client"

import { z } from "zod";
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

const contactFormSchema = z.object({
    name: z.string().min(2, {
        message: "Il nome deve contenere almeno 2 caratteri." 
    }).max(50, {
        message: "Il nome può contenere massimo 50 caratteri." 
    }),
    email: z.string().email({ message: "Email non valida" }),
    text: z.string().min(10, {
        message: "Il messaggio deve contenere almeno 10 caratteri."
    }).max(1000, {
        message: "Il messaggio può contenere massimo 1000 caratteri." 
    }),
})

const ContactForm = () => {
    const contactForm = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            text: "",
        },
    })

    function onSubmit(values: z.infer<typeof contactFormSchema>) {
        console.log(values)
    }

    return (
        <Form {...contactForm}>
            <form
                onSubmit={contactForm.handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
            >
                {/* user's name */}
                <FormField
                    control={contactForm.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="Nome *"
                                    className="rounded-none p-6"
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
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <AnimatedButton
                    path="javascript:void(0)"
                    text="Manda un messaggio"
                    width={203}
                    onClick={() => contactForm.handleSubmit(onSubmit)()}
                />
            </form>
        </Form>
    );
}

export default ContactForm;