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

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export default function Contact() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    try {
    } catch (error) {}
  };

  return (
    <section id="contact" className="scroll-mt-16 lg:scroll-mt-24">
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
              name="name"
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
              name="email"
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
              className="cursor-pointer bg-slate-500 text-foreground hover:bg-[#00d1c7] hover:cursor-pointer"
            >
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
