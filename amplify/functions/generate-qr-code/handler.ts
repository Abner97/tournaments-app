import { Schema } from '../../data/resource';
import QRCode from 'qrcode';
import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda';
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const lambdaClient = new LambdaClient({ region: 'us-east-1' });
const EMAIL_LAMBDA_ARN = process.env.EMAIL_SENDER_FUNCTION_NAME || '';
const REGION = 'us-east-1';
const BUCKET_NAME = process.env.TOURNAMENTS_BUCKET_NAME!;
const s3 = new S3Client({ region: REGION });

export async function uploadFileToS3(
  file: Buffer,
  key: string,
  contentType: string
): Promise<string> {
  const uploadCommand = new PutObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
    Body: file,
    ContentType: contentType,
  });

  await s3.send(uploadCommand);

  return generatePresignedUrl(key);
}

async function generatePresignedUrl(key: string) {
  const command = new GetObjectCommand({
    Bucket: BUCKET_NAME,
    Key: key,
  });

  const url = await getSignedUrl(s3, command, { expiresIn: 604800 }); // URL valid for 1 year (31,536,000 seconds)
  return url;
}

export const handler: Schema['generateQrCode']['functionHandler'] = async (
  event
) => {
  const { ticketId, userEmail, userId } = event.arguments;

  try {
    const siteHost = process.env.APP_HOST;
    const qrDataUrl = await QRCode.toDataURL(`${siteHost}/tickets/${ticketId}`);
    const qrBuffer = Buffer.from(qrDataUrl.split(',')[1], 'base64');

    const qrFileName = `qr-codes/${userId}/${ticketId}.png`;

    // Upload the QR code to S3
    const qrUrl = await uploadFileToS3(qrBuffer, qrFileName, 'image/png');

    const subject = 'Your Ticket QR Code';
    const body = `Hello,\n\nHere is your ticket QR code:\n${qrUrl}\n\nThank you!`;

    const payload = {
      recipient: userEmail,
      subject,
      body,
    };

    const command = new InvokeCommand({
      FunctionName: EMAIL_LAMBDA_ARN,
      InvocationType: 'Event',
      Payload: Buffer.from(JSON.stringify(payload)),
    });

    await lambdaClient.send(command);

    return qrUrl;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to generate, upload QR code, and send email.');
  }
};
