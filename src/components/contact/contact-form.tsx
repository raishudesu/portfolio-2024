import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Loader } from "lucide-react";
import { formSchema } from "@/lib/zod-schemas";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { emailSubmit } from "@/hooks/useEmail";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    try {
      await emailSubmit(values);
      form.reset();
      toast("Submitted Successfully");
    } catch (error) {
      toast("Something went wrong. Try again later");
    }
    setLoading(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-6 py-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="your_email@gmail.com"
                  {...field}
                  disabled={loading}
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
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message goes here"
                  {...field}
                  disabled={loading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={loading}
          className="self-stretch md:self-start"
          title="submit-form"
        >
          {loading ? (
            <div className="animate-spin">
              <Loader />
            </div>
          ) : (
            <>Submit</>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
