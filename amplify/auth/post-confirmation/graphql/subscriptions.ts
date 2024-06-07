/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onCreateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onCreateQrcode = /* GraphQL */ `subscription OnCreateQrcode($filter: ModelSubscriptionQrcodeFilterInput) {
  onCreateQrcode(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateQrcodeSubscriptionVariables,
  APITypes.OnCreateQrcodeSubscription
>;
export const onCreateTicket = /* GraphQL */ `subscription OnCreateTicket($filter: ModelSubscriptionTicketFilterInput) {
  onCreateTicket(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTicketSubscriptionVariables,
  APITypes.OnCreateTicketSubscription
>;
export const onCreateTier = /* GraphQL */ `subscription OnCreateTier($filter: ModelSubscriptionTierFilterInput) {
  onCreateTier(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTierSubscriptionVariables,
  APITypes.OnCreateTierSubscription
>;
export const onCreateTournament = /* GraphQL */ `subscription OnCreateTournament(
  $filter: ModelSubscriptionTournamentFilterInput
) {
  onCreateTournament(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTournamentSubscriptionVariables,
  APITypes.OnCreateTournamentSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $profileOwner: String
) {
  onCreateUser(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onDeleteCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onDeleteQrcode = /* GraphQL */ `subscription OnDeleteQrcode($filter: ModelSubscriptionQrcodeFilterInput) {
  onDeleteQrcode(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteQrcodeSubscriptionVariables,
  APITypes.OnDeleteQrcodeSubscription
>;
export const onDeleteTicket = /* GraphQL */ `subscription OnDeleteTicket($filter: ModelSubscriptionTicketFilterInput) {
  onDeleteTicket(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTicketSubscriptionVariables,
  APITypes.OnDeleteTicketSubscription
>;
export const onDeleteTier = /* GraphQL */ `subscription OnDeleteTier($filter: ModelSubscriptionTierFilterInput) {
  onDeleteTier(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTierSubscriptionVariables,
  APITypes.OnDeleteTierSubscription
>;
export const onDeleteTournament = /* GraphQL */ `subscription OnDeleteTournament(
  $filter: ModelSubscriptionTournamentFilterInput
) {
  onDeleteTournament(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTournamentSubscriptionVariables,
  APITypes.OnDeleteTournamentSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $profileOwner: String
) {
  onDeleteUser(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onUpdateCategory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onUpdateQrcode = /* GraphQL */ `subscription OnUpdateQrcode($filter: ModelSubscriptionQrcodeFilterInput) {
  onUpdateQrcode(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateQrcodeSubscriptionVariables,
  APITypes.OnUpdateQrcodeSubscription
>;
export const onUpdateTicket = /* GraphQL */ `subscription OnUpdateTicket($filter: ModelSubscriptionTicketFilterInput) {
  onUpdateTicket(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTicketSubscriptionVariables,
  APITypes.OnUpdateTicketSubscription
>;
export const onUpdateTier = /* GraphQL */ `subscription OnUpdateTier($filter: ModelSubscriptionTierFilterInput) {
  onUpdateTier(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTierSubscriptionVariables,
  APITypes.OnUpdateTierSubscription
>;
export const onUpdateTournament = /* GraphQL */ `subscription OnUpdateTournament(
  $filter: ModelSubscriptionTournamentFilterInput
) {
  onUpdateTournament(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTournamentSubscriptionVariables,
  APITypes.OnUpdateTournamentSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $profileOwner: String
) {
  onUpdateUser(filter: $filter, profileOwner: $profileOwner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
