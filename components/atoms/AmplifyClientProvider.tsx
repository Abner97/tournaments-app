'use client';

import { client, initializeClient } from '@/services/client';
import { Amplify } from 'aws-amplify';
import outputs from '@/amplify_outputs.json';
import { Authenticator } from '@aws-amplify/ui-react';
import LoadingState from './LoadingState';

Amplify.configure(outputs);
initializeClient();
const AmplifyClientProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <Authenticator signUpAttributes={['name', 'email', 'preferred_username']}>
      {client ? children : null}
    </Authenticator>
  );
};

export default AmplifyClientProvider;
