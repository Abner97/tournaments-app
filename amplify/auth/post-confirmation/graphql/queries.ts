/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    alias
    createdAt
    description
    id
    tournament {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const getQrcode = /* GraphQL */ `query GetQrcode($id: ID!) {
  getQrcode(id: $id) {
    createdAt
    id
    ticket {
      createdAt
      id
      price
      status
      tournamentId
      updatedAt
      userId
      __typename
    }
    ticketId
    updatedAt
    url
    __typename
  }
}
` as GeneratedQuery<APITypes.GetQrcodeQueryVariables, APITypes.GetQrcodeQuery>;
export const getTicket = /* GraphQL */ `query GetTicket($id: ID!) {
  getTicket(id: $id) {
    createdAt
    id
    price
    qrcode {
      createdAt
      id
      ticketId
      updatedAt
      url
      __typename
    }
    status
    tournament {
      categoryId
      createdAt
      gameName
      id
      name
      prize
      updatedAt
      userId
      __typename
    }
    tournamentId
    updatedAt
    user {
      createdAt
      email
      id
      name
      profileOwner
      tierId
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTicketQueryVariables, APITypes.GetTicketQuery>;
export const getTier = /* GraphQL */ `query GetTier($id: ID!) {
  getTier(id: $id) {
    alias
    createdAt
    description
    id
    tournamentsLimit
    updatedAt
    users {
      nextToken
      __typename
    }
    value
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTierQueryVariables, APITypes.GetTierQuery>;
export const getTournament = /* GraphQL */ `query GetTournament($id: ID!) {
  getTournament(id: $id) {
    category {
      alias
      createdAt
      description
      id
      updatedAt
      __typename
    }
    categoryId
    createdAt
    gameName
    id
    name
    prize
    tickets {
      nextToken
      __typename
    }
    updatedAt
    user {
      createdAt
      email
      id
      name
      profileOwner
      tierId
      updatedAt
      __typename
    }
    userId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTournamentQueryVariables,
  APITypes.GetTournamentQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    createdAt
    email
    id
    name
    profileOwner
    tickets {
      nextToken
      __typename
    }
    tier {
      alias
      createdAt
      description
      id
      tournamentsLimit
      updatedAt
      value
      __typename
    }
    tierId
    tournaments {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      alias
      createdAt
      description
      id
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const listQrcodes = /* GraphQL */ `query ListQrcodes(
  $filter: ModelQrcodeFilterInput
  $limit: Int
  $nextToken: String
) {
  listQrcodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      ticketId
      updatedAt
      url
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQrcodesQueryVariables,
  APITypes.ListQrcodesQuery
>;
export const listTickets = /* GraphQL */ `query ListTickets(
  $filter: ModelTicketFilterInput
  $limit: Int
  $nextToken: String
) {
  listTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      price
      status
      tournamentId
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTicketsQueryVariables,
  APITypes.ListTicketsQuery
>;
export const listTiers = /* GraphQL */ `query ListTiers(
  $filter: ModelTierFilterInput
  $limit: Int
  $nextToken: String
) {
  listTiers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      alias
      createdAt
      description
      id
      tournamentsLimit
      updatedAt
      value
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTiersQueryVariables, APITypes.ListTiersQuery>;
export const listTournaments = /* GraphQL */ `query ListTournaments(
  $filter: ModelTournamentFilterInput
  $limit: Int
  $nextToken: String
) {
  listTournaments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      categoryId
      createdAt
      gameName
      id
      name
      prize
      updatedAt
      userId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTournamentsQueryVariables,
  APITypes.ListTournamentsQuery
>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      email
      id
      name
      profileOwner
      tierId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
