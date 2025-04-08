import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import type { Handler } from 'aws-lambda';

const sesClient = new SESClient({ region: process.env.AWS_REGION });

type EmailEvent = {
  recipient: string;
  subject: string;
  body: string;
};

export const handler: Handler<EmailEvent, string> = async (event) => {
  console.log('Received event:', event);
  const { recipient, subject, body } = event;

  const command = new SendEmailCommand({
    Source: process.env.SOURCE_ADDRESS,
    Destination: { ToAddresses: [recipient] },
    Message: {
      Subject: { Data: subject },
      Body: { Text: { Data: body } },
    },
  });

  try {
    const response = await sesClient.send(command);
    console.log(`Email sent to ${recipient}: ${response.MessageId}`);
    return `Email sent to ${recipient}`;
  } catch (error) {
    console.error(`Error sending email to ${recipient}:`, error);
    throw new Error(`Failed to send email to ${recipient}`);
  }
};
