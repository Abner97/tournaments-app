/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCategory = /* GraphQL */ `mutation CreateCategory(
  $condition: ModelCategoryConditionInput
  $input: CreateCategoryInput!
) {
  createCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCategoryMutationVariables,
  APITypes.CreateCategoryMutation
>;
export const createQrcode = /* GraphQL */ `mutation CreateQrcode(
  $condition: ModelQrcodeConditionInput
  $input: CreateQrcodeInput!
) {
  createQrcode(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateQrcodeMutationVariables,
  APITypes.CreateQrcodeMutation
>;
export const createTicket = /* GraphQL */ `mutation CreateTicket(
  $condition: ModelTicketConditionInput
  $input: CreateTicketInput!
) {
  createTicket(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateTicketMutationVariables,
  APITypes.CreateTicketMutation
>;
export const createTier = /* GraphQL */ `mutation CreateTier(
  $condition: ModelTierConditionInput
  $input: CreateTierInput!
) {
  createTier(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateTierMutationVariables,
  APITypes.CreateTierMutation
>;
export const createTournament = /* GraphQL */ `mutation CreateTournament(
  $condition: ModelTournamentConditionInput
  $input: CreateTournamentInput!
) {
  createTournament(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateTournamentMutationVariables,
  APITypes.CreateTournamentMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const deleteCategory = /* GraphQL */ `mutation DeleteCategory(
  $condition: ModelCategoryConditionInput
  $input: DeleteCategoryInput!
) {
  deleteCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCategoryMutationVariables,
  APITypes.DeleteCategoryMutation
>;
export const deleteQrcode = /* GraphQL */ `mutation DeleteQrcode(
  $condition: ModelQrcodeConditionInput
  $input: DeleteQrcodeInput!
) {
  deleteQrcode(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteQrcodeMutationVariables,
  APITypes.DeleteQrcodeMutation
>;
export const deleteTicket = /* GraphQL */ `mutation DeleteTicket(
  $condition: ModelTicketConditionInput
  $input: DeleteTicketInput!
) {
  deleteTicket(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteTicketMutationVariables,
  APITypes.DeleteTicketMutation
>;
export const deleteTier = /* GraphQL */ `mutation DeleteTier(
  $condition: ModelTierConditionInput
  $input: DeleteTierInput!
) {
  deleteTier(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteTierMutationVariables,
  APITypes.DeleteTierMutation
>;
export const deleteTournament = /* GraphQL */ `mutation DeleteTournament(
  $condition: ModelTournamentConditionInput
  $input: DeleteTournamentInput!
) {
  deleteTournament(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteTournamentMutationVariables,
  APITypes.DeleteTournamentMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const updateCategory = /* GraphQL */ `mutation UpdateCategory(
  $condition: ModelCategoryConditionInput
  $input: UpdateCategoryInput!
) {
  updateCategory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCategoryMutationVariables,
  APITypes.UpdateCategoryMutation
>;
export const updateQrcode = /* GraphQL */ `mutation UpdateQrcode(
  $condition: ModelQrcodeConditionInput
  $input: UpdateQrcodeInput!
) {
  updateQrcode(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateQrcodeMutationVariables,
  APITypes.UpdateQrcodeMutation
>;
export const updateTicket = /* GraphQL */ `mutation UpdateTicket(
  $condition: ModelTicketConditionInput
  $input: UpdateTicketInput!
) {
  updateTicket(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateTicketMutationVariables,
  APITypes.UpdateTicketMutation
>;
export const updateTier = /* GraphQL */ `mutation UpdateTier(
  $condition: ModelTierConditionInput
  $input: UpdateTierInput!
) {
  updateTier(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateTierMutationVariables,
  APITypes.UpdateTierMutation
>;
export const updateTournament = /* GraphQL */ `mutation UpdateTournament(
  $condition: ModelTournamentConditionInput
  $input: UpdateTournamentInput!
) {
  updateTournament(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateTournamentMutationVariables,
  APITypes.UpdateTournamentMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
