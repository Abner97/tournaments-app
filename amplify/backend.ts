import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';
import { generateQrCode } from './functions/generate-qr-code/resource';
import { storage } from './storage/resource';
import { EmailSender } from './custom/EmailSender/resource.js';
import { PolicyStatement, ServicePrincipal } from 'aws-cdk-lib/aws-iam';

const backend = defineBackend({
  auth,
  data,
  generateQrCode,
  storage,
});

const emailSender = new EmailSender(
  backend.generateQrCode.stack, // EmailSender is now in its own stack
  'EmailSender',
  {
    sourceAddress: 'abrahamvega987@gmail.com',
  }
);

backend.generateQrCode.addEnvironment(
  'EMAIL_SENDER_FUNCTION_NAME',
  emailSender.functionName
);

backend.generateQrCode.addEnvironment(
  'TOURNAMENTS_BUCKET_NAME',
  backend.storage.resources.bucket.bucketName
);

backend.generateQrCode.addEnvironment(
  'APP_HOST',
  process.env.APP_HOST ?? 'http://localhost:3000'
);

emailSender.lambdaFunction.addPermission('AllowOtherLambda', {
  principal: new ServicePrincipal('lambda.amazonaws.com'),
  action: 'lambda:InvokeFunction',
  sourceArn: backend.generateQrCode.resources.lambda.functionArn,
});

backend.generateQrCode.resources.lambda.addToRolePolicy(
  new PolicyStatement({
    actions: ['lambda:InvokeFunction'],
    resources: [emailSender.functionArn],
  })
);

backend.addOutput({
  custom: {
    emailSender: emailSender.functionArn,
  },
});
