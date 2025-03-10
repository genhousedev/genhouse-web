"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    fullName: z.string().min(2, {
        message: "Full name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
});

function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(values);
        setIsSubmitting(false);
        form.reset();
    }

    return (
        <div className="bg-alice-blue">
            <div className="container px-4 py-24 mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    <div className="space-y-7">
                        <div className="space-y-4">
                            <h1 className="text-3xl font-medium text-gray-900 md:text-[2rem]">Don&apos;t be a stranger</h1>
                            <p className="text-gray-600 mb-6">
                                Got a question for us? Have a project in mind? Fill out the form and we will get in touch with you.
                            </p>
                        </div>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                                <FormField
                                    control={form.control}
                                    name="fullName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base">
                                                Full Name <span className="text-red-500">*</span>
                                            </FormLabel>
                                            <FormControl className="bg-white">
                                                <Input placeholder="John Doe" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base">
                                                Email <span className="text-red-500">*</span>
                                            </FormLabel>
                                            <FormControl className="bg-white">
                                                <Input type="email" placeholder="john@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-base">
                                                What can Genhouse do for you? <span className="text-red-500">*</span>
                                            </FormLabel>
                                            <FormControl className="min-h-[120px] bg-white resize-none">
                                                <Textarea placeholder="Tell us about your project..."  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="text-sm text-gray-600 pb-4">
                                    By submitting this form, I acknowledge receipt of the{" "}
                                    <Link href="#" className="text-blue-600 hover:underline">
                                        Privacy Policy
                                    </Link>
                                    .
                                </div>
                                <Button type="submit" className="w-full lg:w-2/3 bg-dark hover:bg-dark-hover text-lg font-medium h-14" disabled={isSubmitting}>
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </Button>
                            </form>
                        </Form>
                    </div>

                    <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden order-first lg:order-last">
                        <Image
                            src="assets/images/typing.svg"
                            alt="typing"
                            width={530}
                            height={528}
                            className="object-cover w-full h-full"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;