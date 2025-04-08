import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { postConfirmation } from '../auth/post-confirmation/resource';
import { generateQrCode } from '../functions/generate-qr-code/resource';

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/

const schema = a
  .schema({
    Category: a
      .model({
        alias: a.string().required(),
        description: a.string().required(),
        tournament: a.hasMany('Tournament', 'categoryId'),
      })
      .authorization((allow) => [allow.publicApiKey()]),

    Tournament: a
      .model({
        name: a.string().required(),
        gameName: a.string().required(),
        categoryId: a.id().required(),
        userId: a.id().required(),
        prize: a.float().required(),
        registrationPrice: a.float().required(),
        startDate: a.string().required(),
        endDate: a.string().required(),
        description: a.string().required(),
        category: a.belongsTo('Category', 'categoryId'),
        user: a.belongsTo('User', 'userId'),
        tickets: a.hasMany('Ticket', 'tournamentId'),
        imageKey: a.string(),
      })
      .authorization((allow) => [allow.publicApiKey()]),

    Ticket: a
      .model({
        createdAt: a.datetime().required(),
        price: a.float().required(),
        tournamentId: a.id().required(),
        userId: a.id().required(),
        tournament: a.belongsTo('Tournament', 'tournamentId'),
        user: a.belongsTo('User', 'userId'),
      })
      .authorization((allow) => [allow.publicApiKey()]),

    User: a
      .model({
        name: a.string().required(),
        profileOwner: a.string(),
        email: a.string().required(),
        tierId: a.id(),
        tier: a.belongsTo('Tier', 'tierId'),
        tickets: a.hasMany('Ticket', 'userId'),
        tournaments: a.hasMany('Tournament', 'userId'),
      })
      .authorization((allow) => [
        allow.ownerDefinedIn('profileOwner'),
        allow.publicApiKey(), //No es la mejor practica
      ]),

    Tier: a
      .model({
        id: a.id(),
        users: a.hasMany('User', 'tierId'),
        alias: a.string(),
        value: a.float().default(0),
        tournamentsLimit: a.integer(),
        description: a.string(),
        createdAt: a.datetime(),
        updatedAt: a.datetime(),
      })
      .authorization((allow) => [allow.publicApiKey()]),

    generateQrCode: a
      .query()
      .arguments({
        ticketId: a.string(),
        userEmail: a.string(),
        userId: a.string(),
      })
      .returns(a.string())
      .authorization((allow) => [allow.publicApiKey()])
      .handler(a.handler.function(generateQrCode)),
  })
  .authorization((allow) => [allow.resource(postConfirmation)]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
