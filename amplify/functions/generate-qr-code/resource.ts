import { defineFunction } from '@aws-amplify/backend';

export const generateQrCode = defineFunction({
  name: 'generate-qr-code',
  entry: './handler.ts',
  resourceGroupName: 'storage',
});
