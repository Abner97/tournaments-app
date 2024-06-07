import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { postConfirmation } from '../auth/post-confirmation/resource';

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
        category: a.belongsTo('Category', 'categoryId'),
        user: a.belongsTo('User', 'userId'),
        tickets: a.hasMany('Ticket', 'tournamentId'),
      })
      .authorization((allow) => [allow.publicApiKey()]),

    Ticket: a
      .model({
        status: a.string().required(),
        createdAt: a.datetime().required(),
        price: a.float().required(),
        tournamentId: a.id().required(),
        userId: a.id().required(),
        tournament: a.belongsTo('Tournament', 'tournamentId'),
        qrcode: a.hasOne('Qrcode', 'ticketId'),
        user: a.belongsTo('User', 'userId'),
      })
      .authorization((allow) => [allow.publicApiKey()]),

    Qrcode: a
      .model({
        ticketId: a.id().required(),
        ticket: a.belongsTo('Ticket', 'ticketId'),
        url: a.string().required(),
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
        value: a.float(),
        tournamentsLimit: a.integer(),
        description: a.string(),
        createdAt: a.datetime(),
        updatedAt: a.datetime(),
      })
      .authorization((allow) => [allow.publicApiKey()]),
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

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
