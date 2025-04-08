import * as url from 'node:url';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import * as lambda from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Stack } from 'aws-cdk-lib';
type EmailSenderProps = {
  /**
   * The source email address to use for sending emails
   */
  sourceAddress: string;
};

export class EmailSender extends Construct {
  public readonly functionArn: string;
  public readonly functionName: string;
  public readonly lambdaFunction: lambda.NodejsFunction;

  constructor(scope: Construct, id: string, props: EmailSenderProps) {
    super(scope, id);

    const { sourceAddress } = props;
    const stack = Stack.of(this);
    // Create the Lambda function to send emails
    const emailSenderLambda = new lambda.NodejsFunction(
      this,
      'EmailSenderLambda',
      {
        entry: url.fileURLToPath(new URL('sender.ts', import.meta.url)),
        environment: {
          SOURCE_ADDRESS: sourceAddress,
        },
        runtime: Runtime.NODEJS_18_X,
      }
    );

    emailSenderLambda.role?.addToPrincipalPolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['ses:SendEmail', 'ses:SendRawEmail'],

        resources: [
          `arn:aws:ses:${stack.region}:${stack.account}:identity/abrahamvega987@gmail.com`,
        ],
      })
    );

    this.functionArn = emailSenderLambda.functionArn;
    this.functionName = emailSenderLambda.functionName;
    this.lambdaFunction = emailSenderLambda;
  }
}
