'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().min(7, {
    message: 'Please enter a valid phone number.',
  }),
  subject: z.string().min(3, {
    message: 'Subject must be at least 3 characters.',
  }),
  message: z.string().min(5, {
    message: 'Message must be at least 5 characters.',
  }),
});

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const emailRecipient = 'varadsrivastavaofficial@gmail.com';
    const emailSubject = `[Portfolio Contact] ${values.subject} - from ${values.name}`;

    try {
      // 1. Try sending email directly via AJAX FormSubmit endpoint to user's email
      const response = await fetch(`https://formsubmit.co/ajax/${emailRecipient}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: emailSubject,
          name: values.name,
          email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success !== 'false') {
        setIsSent(true);
        toast({
          title: 'Message Sent Successfully!',
          description: `Your message has been emailed directly to ${emailRecipient}.`,
        });
        form.reset();
      } else {
        // Fallback to mailto pre-fill if direct HTTP fails
        const encodedSubject = encodeURIComponent(emailSubject);
        const encodedBody = encodeURIComponent(
          `Hi Varad,\n\n${values.message}\n\n---\nSender Details:\nName: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}`
        );
        window.location.href = `mailto:${emailRecipient}?subject=${encodedSubject}&body=${encodedBody}`;

        toast({
          title: 'Opening Email Client...',
          description: `Direct send encountered a restriction; opened your email client to send to ${emailRecipient}.`,
        });
        form.reset();
      }
    } catch (err) {
      // Fallback: mailto
      const encodedSubject = encodeURIComponent(emailSubject);
      const encodedBody = encodeURIComponent(
        `Hi Varad,\n\n${values.message}\n\n---\nSender Details:\nName: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}`
      );
      window.location.href = `mailto:${emailRecipient}?subject=${encodedSubject}&body=${encodedBody}`;

      toast({
        title: 'Opening Email Client...',
        description: `Pre-filled your message for ${emailRecipient}.`,
      });
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  }

  const RequiredIndicator = () => <span className="text-primary">*</span>;

  return (
    <Form {...form}>
      {isSent && (
        <div className="mb-6 p-4 rounded-xl bg-primary/10 border border-primary/30 flex items-center gap-3 text-sm text-foreground">
          <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
          <span>Your message was delivered directly to <strong>varadsrivastavaofficial@gmail.com</strong>.</span>
        </div>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Your Name <RequiredIndicator />
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Jane Doe"
                    className="bg-background/60 border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl font-serif"
                    {...field}
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
                <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Email Address <RequiredIndicator />
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="e.g. jane@example.com"
                    className="bg-background/60 border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl font-serif"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Phone Number <RequiredIndicator />
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. +91 98765 43210"
                    className="bg-background/60 border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl font-serif"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Subject <RequiredIndicator />
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Quantitative Finance Opportunity"
                    className="bg-background/60 border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl font-serif"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Message <RequiredIndicator />
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your role, opportunity, or inquiry..."
                  className="min-h-[130px] bg-background/60 border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl leading-relaxed resize-y font-serif"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full bg-primary text-primary-foreground font-semibold py-6 rounded-xl transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(218,165,32,0.4)]"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <Send className="mr-2 h-5 w-5" />
          )}
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
      </form>
    </Form>
  );
}
