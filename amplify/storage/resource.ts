import { defineStorage } from '@aws-amplify/backend';
import { generateQrCode } from '../functions/generate-qr-code/resource';

export const storage = defineStorage({
  name: 'TournamentsAppStorage',
  access: (allow) => ({
    'qr-codes/*': [
      allow.guest.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete']),
      allow.resource(generateQrCode).to(['read', 'write', 'delete']),
    ],
    'tournaments/*': [
      allow.authenticated.to(['read', 'write']),
      allow.guest.to(['read', 'write']),
    ],
  }),
});
