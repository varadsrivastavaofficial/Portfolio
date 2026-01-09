'use server';
/**
 * @fileOverview A flow for sending an email from the contact form.
 *
 * - sendEmail - A function that handles sending the email.
 * - SendEmailInput - The input type for the sendEmail function.
 * - SendEmailOutput - The return type for the sendEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { defineDotprompt } from 'genkit/dotprompt';
import mail from '@sendgrid/mail';

const RECIPIENT_EMAIL = 'varadsrivastavaofficial@gmail.com';
const SENDER_EMAIL = 'no-reply@firebase-studio-app.com'; // Use a verified sender from your email provider

// Set API Key for SendGrid
if (process.env.SENDGRID_API_KEY) {
  mail.setApiKey(process.env.SENDGRID_API_KEY);
}

const SendEmailInputSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the sender.'),
  subject: z.string().describe('The subject of the message.'),
  message: z.string().describe('The content of the message.'),
});
export type SendEmailInput = z.infer<typeof SendEmailInputSchema>;

const SendEmailOutputSchema = z.object({
  success: z.boolean(),
  error: z.string().optional(),
});
export type SendEmailOutput = z.infer<typeof SendEmailOutputSchema>;

// Define a simple tool to send an email
const emailSenderTool = ai.defineTool(
  {
    name: 'emailSender',
    description: 'Sends an email with the provided content.',
    inputSchema: z.object({
      to: z.string().email(),
      from: z.string().email(),
      subject: z.string(),
      html: z.string(),
    }),
    outputSchema: z.object({
      success: z.boolean(),
      error: z.string().optional(),
    }),
  },
  async (params) => {
    if (!process.env.SENDGRID_API_KEY) {
      console.warn(
        'SENDGRID_API_KEY not found. Email will be logged to console instead of sent.'
      );
      console.log('--- EMAIL ---');
      console.log('To:', params.to);
      console.log('From:', params.from);
      console.log('Subject:', params.subject);
      console.log('Body:', params.html);
      console.log('--- END EMAIL ---');
      // In a real scenario without an API key, you might want to return an error.
      // For this example, we'll simulate success.
      return { success: true };
    }
    try {
      await mail.send(params);
      return { success: true };
    } catch (error) {
      console.error('SendGrid Error:', error);
      const errorMessage =
        error instanceof Error ? error.message : 'An unknown error occurred.';
      return { success: false, error: errorMessage };
    }
  }
);


// Define the prompt for formatting the email
const emailFormattingPrompt = defineDotprompt({
  name: 'emailFormattingPrompt',
  model: 'googleai/gemini-2.5-flash',
  input: {
    schema: SendEmailInputSchema,
  },
  output: {
    format: 'json',
    schema: z.object({
      subject: z.string(),
      htmlBody: z.string(),
    }),
  },
  prompt: `
You are an email formatting assistant. Your task is to take the user's contact form submission and format it into a clean, professional HTML email.

The subject line should be clear and concise, indicating it's a new message from the portfolio contact form.
The HTML body should be well-structured and easy to read. Include all the information provided by the user.

Format the output as a JSON object with 'subject' and 'htmlBody' keys.

User Name: {{{name}}}
User Email: {{{email}}}
Subject: {{{subject}}}
Message:
{{{message}}}
`,
});

// Define the main flow
const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: SendEmailInputSchema,
    outputSchema: SendEmailOutputSchema,
  },
  async (input) => {
    // 1. Format the email content using an LLM
    const { output: formattedEmail } = await emailFormattingPrompt.generate({
      input,
    });

    if (!formattedEmail) {
      return {
        success: false,
        error: 'Failed to format email content.',
      };
    }

    // 2. Send the email using the tool
    const sendResult = await emailSenderTool({
      to: RECIPIENT_EMAIL,
      from: SENDER_EMAIL,
      subject: formattedEmail.subject,
      html: formattedEmail.htmlBody,
    });

    return sendResult;
  }
);

// Export a simple wrapper to be called from the client
export async function sendEmail(
  input: SendEmailInput
): Promise<SendEmailOutput> {
  return sendEmailFlow(input);
}
