import { Schema } from '@/amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import { V6Client } from '@aws-amplify/api-graphql';
let client: V6Client<Schema>;

function initializeClient() {
  client = generateClient<Schema>();
}

export { client, initializeClient };
