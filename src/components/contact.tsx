"use client";

import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const contactSchema = z.object({
  user_name: z.string().min(2, "Name must be at least 2 characters long"),
  user_email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export default function Contact() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });

  const emailOptions = {
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    blockHeadless: true,
    blockList: {
      list: ["gago", "spam", "test"],
      watchVariable: "user_name",
    },
    limitRate: {
      id: "portfolio-contact-form",
      throttle: 10000,
    },
  };

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    setIsSubmitting(true);

    if (!executeRecaptcha) {
      toast.error("reCAPTCHA not yet available");
      return;
    }

    try {
      // Generate reCAPTCHA token
      const token = await executeRecaptcha("contact_form");

      // Verify token with server
      const verifyResponse = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const verifyData = await verifyResponse.json();

      if (!verifyData.success) {
        toast.error("reCAPTCHA verification failed. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // Send email only after successful verification
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        { ...data, sender_ip: verifyData.sender_ip },
        emailOptions,
      );

      if (response.status === 200) {
        form.reset();
        toast.success("Message sent successfully!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-16 lg:scroll-mt-24">
      <Toaster richColors position="top-right" />

      <div className="space-y-4">
        <h2 className="text-base uppercase mb-7 font-bold tracking-wide text-[#00d1c7]">
          Contact
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 text-slate-100"
          >
            <FormField
              control={form.control}
              name="user_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      {...field}
                      className="selection:bg-slate-600"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="user_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-300">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      {...field}
                      className="selection:bg-slate-600"
                    />
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
                  <FormLabel className="text-slate-300">Message</FormLabel>
                  <FormControl>
                    <textarea
                      placeholder="Your message..."
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 selection:bg-slate-600"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting || !form.formState.isValid}
              className="cursor-pointer bg-[#00d1c7] text-foreground hover:bg-[#00d1c7]/90 transition-colors hover:cursor-pointer w-32"
            >
              {isSubmitting ? "Sending..." : "  Send Message"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
