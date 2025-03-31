/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Category = {
  __typename: "Category",
  alias: string,
  createdAt: string,
  description: string,
  id: string,
  tournament?: ModelTournamentConnection | null,
  updatedAt: string,
};

export type ModelTournamentConnection = {
  __typename: "ModelTournamentConnection",
  items:  Array<Tournament | null >,
  nextToken?: string | null,
};

export type Tournament = {
  __typename: "Tournament",
  category?: Category | null,
  categoryId: string,
  createdAt: string,
  gameName: string,
  id: string,
  name: string,
  prize: number,
  tickets?: ModelTicketConnection | null,
  updatedAt: string,
  user?: User | null,
  userId: string,
};

export type ModelTicketConnection = {
  __typename: "ModelTicketConnection",
  items:  Array<Ticket | null >,
  nextToken?: string | null,
};

export type Ticket = {
  __typename: "Ticket",
  createdAt: string,
  id: string,
  price: number,
  qrcode?: Qrcode | null,
  status: string,
  tournament?: Tournament | null,
  tournamentId: string,
  updatedAt: string,
  user?: User | null,
  userId: string,
};

export type Qrcode = {
  __typename: "Qrcode",
  createdAt: string,
  id: string,
  ticket?: Ticket | null,
  ticketId: string,
  updatedAt: string,
  url: string,
};

export type User = {
  __typename: "User",
  createdAt: string,
  email: string,
  id: string,
  name: string,
  profileOwner?: string | null,
  tickets?: ModelTicketConnection | null,
  tier?: Tier | null,
  tierId?: string | null,
  tournaments?: ModelTournamentConnection | null,
  updatedAt: string,
};

export type Tier = {
  __typename: "Tier",
  alias?: string | null,
  createdAt?: string | null,
  description?: string | null,
  id: string,
  tournamentsLimit?: number | null,
  updatedAt?: string | null,
  users?: ModelUserConnection | null,
  value?: number | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelCategoryFilterInput = {
  alias?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelCategoryFilterInput | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type ModelQrcodeFilterInput = {
  and?: Array< ModelQrcodeFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelQrcodeFilterInput | null,
  or?: Array< ModelQrcodeFilterInput | null > | null,
  ticketId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  url?: ModelStringInput | null,
};

export type ModelQrcodeConnection = {
  __typename: "ModelQrcodeConnection",
  items:  Array<Qrcode | null >,
  nextToken?: string | null,
};

export type ModelTicketFilterInput = {
  and?: Array< ModelTicketFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelTicketFilterInput | null,
  or?: Array< ModelTicketFilterInput | null > | null,
  price?: ModelFloatInput | null,
  status?: ModelStringInput | null,
  tournamentId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelFloatInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelTierFilterInput = {
  alias?: ModelStringInput | null,
  and?: Array< ModelTierFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelTierFilterInput | null,
  or?: Array< ModelTierFilterInput | null > | null,
  tournamentsLimit?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  value?: ModelFloatInput | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelTierConnection = {
  __typename: "ModelTierConnection",
  items:  Array<Tier | null >,
  nextToken?: string | null,
};

export type ModelTournamentFilterInput = {
  and?: Array< ModelTournamentFilterInput | null > | null,
  categoryId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  gameName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelTournamentFilterInput | null,
  or?: Array< ModelTournamentFilterInput | null > | null,
  prize?: ModelFloatInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  and?: Array< ModelUserFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  tierId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelCategoryConditionInput = {
  alias?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  not?: ModelCategoryConditionInput | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCategoryInput = {
  alias: string,
  description: string,
  id?: string | null,
};

export type ModelQrcodeConditionInput = {
  and?: Array< ModelQrcodeConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelQrcodeConditionInput | null,
  or?: Array< ModelQrcodeConditionInput | null > | null,
  ticketId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  url?: ModelStringInput | null,
};

export type CreateQrcodeInput = {
  id?: string | null,
  ticketId: string,
  url: string,
};

export type ModelTicketConditionInput = {
  and?: Array< ModelTicketConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelTicketConditionInput | null,
  or?: Array< ModelTicketConditionInput | null > | null,
  price?: ModelFloatInput | null,
  status?: ModelStringInput | null,
  tournamentId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateTicketInput = {
  createdAt?: string | null,
  id?: string | null,
  price: number,
  status: string,
  tournamentId: string,
  userId: string,
};

export type ModelTierConditionInput = {
  alias?: ModelStringInput | null,
  and?: Array< ModelTierConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  not?: ModelTierConditionInput | null,
  or?: Array< ModelTierConditionInput | null > | null,
  tournamentsLimit?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  value?: ModelFloatInput | null,
};

export type CreateTierInput = {
  alias?: string | null,
  createdAt?: string | null,
  description?: string | null,
  id?: string | null,
  tournamentsLimit?: number | null,
  updatedAt?: string | null,
  value?: number | null,
};

export type ModelTournamentConditionInput = {
  and?: Array< ModelTournamentConditionInput | null > | null,
  categoryId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  gameName?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelTournamentConditionInput | null,
  or?: Array< ModelTournamentConditionInput | null > | null,
  prize?: ModelFloatInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
};

export type CreateTournamentInput = {
  categoryId: string,
  gameName: string,
  id?: string | null,
  name: string,
  prize: number,
  userId: string,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  profileOwner?: ModelStringInput | null,
  tierId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateUserInput = {
  email: string,
  id?: string | null,
  name: string,
  profileOwner?: string | null,
  tierId?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type DeleteQrcodeInput = {
  id: string,
};

export type DeleteTicketInput = {
  id: string,
};

export type DeleteTierInput = {
  id: string,
};

export type DeleteTournamentInput = {
  id: string,
};

export type DeleteUserInput = {
  id: string,
};

export type UpdateCategoryInput = {
  alias?: string | null,
  description?: string | null,
  id: string,
};

export type UpdateQrcodeInput = {
  id: string,
  ticketId?: string | null,
  url?: string | null,
};

export type UpdateTicketInput = {
  createdAt?: string | null,
  id: string,
  price?: number | null,
  status?: string | null,
  tournamentId?: string | null,
  userId?: string | null,
};

export type UpdateTierInput = {
  alias?: string | null,
  createdAt?: string | null,
  description?: string | null,
  id: string,
  tournamentsLimit?: number | null,
  updatedAt?: string | null,
  value?: number | null,
};

export type UpdateTournamentInput = {
  categoryId?: string | null,
  gameName?: string | null,
  id: string,
  name?: string | null,
  prize?: number | null,
  userId?: string | null,
};

export type UpdateUserInput = {
  email?: string | null,
  id: string,
  name?: string | null,
  profileOwner?: string | null,
  tierId?: string | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  alias?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionQrcodeFilterInput = {
  and?: Array< ModelSubscriptionQrcodeFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionQrcodeFilterInput | null > | null,
  ticketId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionTicketFilterInput = {
  and?: Array< ModelSubscriptionTicketFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTicketFilterInput | null > | null,
  price?: ModelSubscriptionFloatInput | null,
  status?: ModelSubscriptionStringInput | null,
  tournamentId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionFloatInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionTierFilterInput = {
  alias?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTierFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTierFilterInput | null > | null,
  tournamentsLimit?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionFloatInput | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionTournamentFilterInput = {
  and?: Array< ModelSubscriptionTournamentFilterInput | null > | null,
  categoryId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  gameName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionTournamentFilterInput | null > | null,
  prize?: ModelSubscriptionFloatInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  tierId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    alias: string,
    createdAt: string,
    description: string,
    id: string,
    tournament?:  {
      __typename: "ModelTournamentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetQrcodeQueryVariables = {
  id: string,
};

export type GetQrcodeQuery = {
  getQrcode?:  {
    __typename: "Qrcode",
    createdAt: string,
    id: string,
    ticket?:  {
      __typename: "Ticket",
      createdAt: string,
      id: string,
      price: number,
      status: string,
      tournamentId: string,
      updatedAt: string,
      userId: string,
    } | null,
    ticketId: string,
    updatedAt: string,
    url: string,
  } | null,
};

export type GetTicketQueryVariables = {
  id: string,
};

export type GetTicketQuery = {
  getTicket?:  {
    __typename: "Ticket",
    createdAt: string,
    id: string,
    price: number,
    qrcode?:  {
      __typename: "Qrcode",
      createdAt: string,
      id: string,
      ticketId: string,
      updatedAt: string,
      url: string,
    } | null,
    status: string,
    tournament?:  {
      __typename: "Tournament",
      categoryId: string,
      createdAt: string,
      gameName: string,
      id: string,
      name: string,
      prize: number,
      updatedAt: string,
      userId: string,
    } | null,
    tournamentId: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      profileOwner?: string | null,
      tierId?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type GetTierQueryVariables = {
  id: string,
};

export type GetTierQuery = {
  getTier?:  {
    __typename: "Tier",
    alias?: string | null,
    createdAt?: string | null,
    description?: string | null,
    id: string,
    tournamentsLimit?: number | null,
    updatedAt?: string | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    value?: number | null,
  } | null,
};

export type GetTournamentQueryVariables = {
  id: string,
};

export type GetTournamentQuery = {
  getTournament?:  {
    __typename: "Tournament",
    category?:  {
      __typename: "Category",
      alias: string,
      createdAt: string,
      description: string,
      id: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    gameName: string,
    id: string,
    name: string,
    prize: number,
    tickets?:  {
      __typename: "ModelTicketConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      profileOwner?: string | null,
      tierId?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    id: string,
    name: string,
    profileOwner?: string | null,
    tickets?:  {
      __typename: "ModelTicketConnection",
      nextToken?: string | null,
    } | null,
    tier?:  {
      __typename: "Tier",
      alias?: string | null,
      createdAt?: string | null,
      description?: string | null,
      id: string,
      tournamentsLimit?: number | null,
      updatedAt?: string | null,
      value?: number | null,
    } | null,
    tierId?: string | null,
    tournaments?:  {
      __typename: "ModelTournamentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      alias: string,
      createdAt: string,
      description: string,
      id: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListQrcodesQueryVariables = {
  filter?: ModelQrcodeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQrcodesQuery = {
  listQrcodes?:  {
    __typename: "ModelQrcodeConnection",
    items:  Array< {
      __typename: "Qrcode",
      createdAt: string,
      id: string,
      ticketId: string,
      updatedAt: string,
      url: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTicketsQueryVariables = {
  filter?: ModelTicketFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTicketsQuery = {
  listTickets?:  {
    __typename: "ModelTicketConnection",
    items:  Array< {
      __typename: "Ticket",
      createdAt: string,
      id: string,
      price: number,
      status: string,
      tournamentId: string,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTiersQueryVariables = {
  filter?: ModelTierFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListTiersQuery = {
  listTiers?:  {
    __typename: "ModelTierConnection",
    items:  Array< {
      __typename: "Tier",
      alias?: string | null,
      createdAt?: string | null,
      description?: string | null,
      id: string,
      tournamentsLimit?: number | null,
      updatedAt?: string | null,
      value?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTournamentsQueryVariables = {
  filter?: ModelTournamentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTournamentsQuery = {
  listTournaments?:  {
    __typename: "ModelTournamentConnection",
    items:  Array< {
      __typename: "Tournament",
      categoryId: string,
      createdAt: string,
      gameName: string,
      id: string,
      name: string,
      prize: number,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      profileOwner?: string | null,
      tierId?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateCategoryMutationVariables = {
  condition?: ModelCategoryConditionInput | null,
  input: CreateCategoryInput,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    alias: string,
    createdAt: string,
    description: string,
    id: string,
    tournament?:  {
      __typename: "ModelTournamentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateQrcodeMutationVariables = {
  condition?: ModelQrcodeConditionInput | null,
  input: CreateQrcodeInput,
};

export type CreateQrcodeMutation = {
  createQrcode?:  {
    __typename: "Qrcode",
    createdAt: string,
    id: string,
    ticket?:  {
      __typename: "Ticket",
      createdAt: string,
      id: string,
      price: number,
      status: string,
      tournamentId: string,
      updatedAt: string,
      userId: string,
    } | null,
    ticketId: string,
    updatedAt: string,
    url: string,
  } | null,
};

export type CreateTicketMutationVariables = {
  condition?: ModelTicketConditionInput | null,
  input: CreateTicketInput,
};

export type CreateTicketMutation = {
  createTicket?:  {
    __typename: "Ticket",
    createdAt: string,
    id: string,
    price: number,
    qrcode?:  {
      __typename: "Qrcode",
      createdAt: string,
      id: string,
      ticketId: string,
      updatedAt: string,
      url: string,
    } | null,
    status: string,
    tournament?:  {
      __typename: "Tournament",
      categoryId: string,
      createdAt: string,
      gameName: string,
      id: string,
      name: string,
      prize: number,
      updatedAt: string,
      userId: string,
    } | null,
    tournamentId: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      profileOwner?: string | null,
      tierId?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type CreateTierMutationVariables = {
  condition?: ModelTierConditionInput | null,
  input: CreateTierInput,
};

export type CreateTierMutation = {
  createTier?:  {
    __typename: "Tier",
    alias?: string | null,
    createdAt?: string | null,
    description?: string | null,
    id: string,
    tournamentsLimit?: number | null,
    updatedAt?: string | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    value?: number | null,
  } | null,
};

export type CreateTournamentMutationVariables = {
  condition?: ModelTournamentConditionInput | null,
  input: CreateTournamentInput,
};

export type CreateTournamentMutation = {
  createTournament?:  {
    __typename: "Tournament",
    category?:  {
      __typename: "Category",
      alias: string,
      createdAt: string,
      description: string,
      id: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    gameName: string,
    id: string,
    name: string,
    prize: number,
    tickets?:  {
      __typename: "ModelTicketConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      profileOwner?: string | null,
      tierId?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    id: string,
    name: string,
    profileOwner?: string | null,
    tickets?:  {
      __typename: "ModelTicketConnection",
      nextToken?: string | null,
    } | null,
    tier?:  {
      __typename: "Tier",
      alias?: string | null,
      createdAt?: string | null,
      description?: string | null,
      id: string,
      tournamentsLimit?: number | null,
      updatedAt?: string | null,
      value?: number | null,
    } | null,
    tierId?: string | null,
    tournaments?:  {
      __typename: "ModelTournamentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  condition?: ModelCategoryConditionInput | null,
  input: DeleteCategoryInput,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    alias: string,
    createdAt: string,
    description: string,
    id: string,
    tournament?:  {
      __typename: "ModelTournamentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteQrcodeMutationVariables = {
  condition?: ModelQrcodeConditionInput | null,
  input: DeleteQrcodeInput,
};

export type DeleteQrcodeMutation = {
  deleteQrcode?:  {
    __typename: "Qrcode",
    createdAt: string,
    id: string,
    ticket?:  {
      __typename: "Ticket",
      createdAt: string,
      id: string,
      price: number,
      status: string,
      tournamentId: string,
      updatedAt: string,
      userId: string,
    } | null,
    ticketId: string,
    updatedAt: string,
    url: string,
  } | null,
};

export type DeleteTicketMutationVariables = {
  condition?: ModelTicketConditionInput | null,
  input: DeleteTicketInput,
};

export type DeleteTicketMutation = {
  deleteTicket?:  {
    __typename: "Ticket",
    createdAt: string,
    id: string,
    price: number,
    qrcode?:  {
      __typename: "Qrcode",
      createdAt: string,
      id: string,
      ticketId: string,
      updatedAt: string,
      url: string,
    } | null,
    status: string,
    tournament?:  {
      __typename: "Tournament",
      categoryId: string,
      createdAt: string,
      gameName: string,
      id: string,
      name: string,
      prize: number,
      updatedAt: string,
      userId: string,
    } | null,
    tournamentId: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      profileOwner?: string | null,
      tierId?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type DeleteTierMutationVariables = {
  condition?: ModelTierConditionInput | null,
  input: DeleteTierInput,
};

export type DeleteTierMutation = {
  deleteTier?:  {
    __typename: "Tier",
    alias?: string | null,
    createdAt?: string | null,
    description?: string | null,
    id: string,
    tournamentsLimit?: number | null,
    updatedAt?: string | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    value?: number | null,
  } | null,
};

export type DeleteTournamentMutationVariables = {
  condition?: ModelTournamentConditionInput | null,
  input: DeleteTournamentInput,
};

export type DeleteTournamentMutation = {
  deleteTournament?:  {
    __typename: "Tournament",
    category?:  {
      __typename: "Category",
      alias: string,
      createdAt: string,
      description: string,
      id: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    gameName: string,
    id: string,
    name: string,
    prize: number,
    tickets?:  {
      __typename: "ModelTicketConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      profileOwner?: string | null,
      tierId?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    id: string,
    name: string,
    profileOwner?: string | null,
    tickets?:  {
      __typename: "ModelTicketConnection",
      nextToken?: string | null,
    } | null,
    tier?:  {
      __typename: "Tier",
      alias?: string | null,
      createdAt?: string | null,
      description?: string | null,
      id: string,
      tournamentsLimit?: number | null,
      updatedAt?: string | null,
      value?: number | null,
    } | null,
    tierId?: string | null,
    tournaments?:  {
      __typename: "ModelTournamentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  condition?: ModelCategoryConditionInput | null,
  input: UpdateCategoryInput,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    alias: string,
    createdAt: string,
    description: string,
    id: string,
    tournament?:  {
      __typename: "ModelTournamentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateQrcodeMutationVariables = {
  condition?: ModelQrcodeConditionInput | null,
  input: UpdateQrcodeInput,
};

export type UpdateQrcodeMutation = {
  updateQrcode?:  {
    __typename: "Qrcode",
    createdAt: string,
    id: string,
    ticket?:  {
      __typename: "Ticket",
      createdAt: string,
      id: string,
      price: number,
      status: string,
      tournamentId: string,
      updatedAt: string,
      userId: string,
    } | null,
    ticketId: string,
    updatedAt: string,
    url: string,
  } | null,
};

export type UpdateTicketMutationVariables = {
  condition?: ModelTicketConditionInput | null,
  input: UpdateTicketInput,
};

export type UpdateTicketMutation = {
  updateTicket?:  {
    __typename: "Ticket",
    createdAt: string,
    id: string,
    price: number,
    qrcode?:  {
      __typename: "Qrcode",
      createdAt: string,
      id: string,
      ticketId: string,
      updatedAt: string,
      url: string,
    } | null,
    status: string,
    tournament?:  {
      __typename: "Tournament",
      categoryId: string,
      createdAt: string,
      gameName: string,
      id: string,
      name: string,
      prize: number,
      updatedAt: string,
      userId: string,
    } | null,
    tournamentId: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      profileOwner?: string | null,
      tierId?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type UpdateTierMutationVariables = {
  condition?: ModelTierConditionInput | null,
  input: UpdateTierInput,
};

export type UpdateTierMutation = {
  updateTier?:  {
    __typename: "Tier",
    alias?: string | null,
    createdAt?: string | null,
    description?: string | null,
    id: string,
    tournamentsLimit?: number | null,
    updatedAt?: string | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    value?: number | null,
  } | null,
};

export type UpdateTournamentMutationVariables = {
  condition?: ModelTournamentConditionInput | null,
  input: UpdateTournamentInput,
};

export type UpdateTournamentMutation = {
  updateTournament?:  {
    __typename: "Tournament",
    category?:  {
      __typename: "Category",
      alias: string,
      createdAt: string,
      description: string,
      id: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    gameName: string,
    id: string,
    name: string,
    prize: number,
    tickets?:  {
      __typename: "ModelTicketConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      profileOwner?: string | null,
      tierId?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    id: string,
    name: string,
    profileOwner?: string | null,
    tickets?:  {
      __typename: "ModelTicketConnection",
      nextToken?: string | null,
    } | null,
    tier?:  {
      __typename: "Tier",
      alias?: string | null,
      createdAt?: string | null,
      description?: string | null,
      id: string,
      tournamentsLimit?: number | null,
      updatedAt?: string | null,
      value?: number | null,
    } | null,
    tierId?: string | null,
    tournaments?:  {
      __typename: "ModelTournamentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    alias: string,
    createdAt: string,
    description: string,
    id: string,
    tournament?:  {
      __typename: "ModelTournamentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateQrcodeSubscriptionVariables = {
  filter?: ModelSubscriptionQrcodeFilterInput | null,
};

export type OnCreateQrcodeSubscription = {
  onCreateQrcode?:  {
    __typename: "Qrcode",
    createdAt: string,
    id: string,
    ticket?:  {
      __typename: "Ticket",
      createdAt: string,
      id: string,
      price: number,
      status: string,
      tournamentId: string,
      updatedAt: string,
      userId: string,
    } | null,
    ticketId: string,
    updatedAt: string,
    url: string,
  } | null,
};

export type OnCreateTicketSubscriptionVariables = {
  filter?: ModelSubscriptionTicketFilterInput | null,
};

export type OnCreateTicketSubscription = {
  onCreateTicket?:  {
    __typename: "Ticket",
    createdAt: string,
    id: string,
    price: number,
    qrcode?:  {
      __typename: "Qrcode",
      createdAt: string,
      id: string,
      ticketId: string,
      updatedAt: string,
      url: string,
    } | null,
    status: string,
    tournament?:  {
      __typename: "Tournament",
      categoryId: string,
      createdAt: string,
      gameName: string,
      id: string,
      name: string,
      prize: number,
      updatedAt: string,
      userId: string,
    } | null,
    tournamentId: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      profileOwner?: string | null,
      tierId?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnCreateTierSubscriptionVariables = {
  filter?: ModelSubscriptionTierFilterInput | null,
};

export type OnCreateTierSubscription = {
  onCreateTier?:  {
    __typename: "Tier",
    alias?: string | null,
    createdAt?: string | null,
    description?: string | null,
    id: string,
    tournamentsLimit?: number | null,
    updatedAt?: string | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    value?: number | null,
  } | null,
};

export type OnCreateTournamentSubscriptionVariables = {
  filter?: ModelSubscriptionTournamentFilterInput | null,
};

export type OnCreateTournamentSubscription = {
  onCreateTournament?:  {
    __typename: "Tournament",
    category?:  {
      __typename: "Category",
      alias: string,
      createdAt: string,
      description: string,
      id: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    gameName: string,
    id: string,
    name: string,
    prize: number,
    tickets?:  {
      __typename: "ModelTicketConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      profileOwner?: string | null,
      tierId?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  profileOwner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    id: string,
    name: string,
    profileOwner?: string | null,
    tickets?:  {
      __typename: "ModelTicketConnection",
      nextToken?: string | null,
    } | null,
    tier?:  {
      __typename: "Tier",
      alias?: string | null,
      createdAt?: string | null,
      description?: string | null,
      id: string,
      tournamentsLimit?: number | null,
      updatedAt?: string | null,
      value?: number | null,
    } | null,
    tierId?: string | null,
    tournaments?:  {
      __typename: "ModelTournamentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    alias: string,
    createdAt: string,
    description: string,
    id: string,
    tournament?:  {
      __typename: "ModelTournamentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteQrcodeSubscriptionVariables = {
  filter?: ModelSubscriptionQrcodeFilterInput | null,
};

export type OnDeleteQrcodeSubscription = {
  onDeleteQrcode?:  {
    __typename: "Qrcode",
    createdAt: string,
    id: string,
    ticket?:  {
      __typename: "Ticket",
      createdAt: string,
      id: string,
      price: number,
      status: string,
      tournamentId: string,
      updatedAt: string,
      userId: string,
    } | null,
    ticketId: string,
    updatedAt: string,
    url: string,
  } | null,
};

export type OnDeleteTicketSubscriptionVariables = {
  filter?: ModelSubscriptionTicketFilterInput | null,
};

export type OnDeleteTicketSubscription = {
  onDeleteTicket?:  {
    __typename: "Ticket",
    createdAt: string,
    id: string,
    price: number,
    qrcode?:  {
      __typename: "Qrcode",
      createdAt: string,
      id: string,
      ticketId: string,
      updatedAt: string,
      url: string,
    } | null,
    status: string,
    tournament?:  {
      __typename: "Tournament",
      categoryId: string,
      createdAt: string,
      gameName: string,
      id: string,
      name: string,
      prize: number,
      updatedAt: string,
      userId: string,
    } | null,
    tournamentId: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      profileOwner?: string | null,
      tierId?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnDeleteTierSubscriptionVariables = {
  filter?: ModelSubscriptionTierFilterInput | null,
};

export type OnDeleteTierSubscription = {
  onDeleteTier?:  {
    __typename: "Tier",
    alias?: string | null,
    createdAt?: string | null,
    description?: string | null,
    id: string,
    tournamentsLimit?: number | null,
    updatedAt?: string | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    value?: number | null,
  } | null,
};

export type OnDeleteTournamentSubscriptionVariables = {
  filter?: ModelSubscriptionTournamentFilterInput | null,
};

export type OnDeleteTournamentSubscription = {
  onDeleteTournament?:  {
    __typename: "Tournament",
    category?:  {
      __typename: "Category",
      alias: string,
      createdAt: string,
      description: string,
      id: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    gameName: string,
    id: string,
    name: string,
    prize: number,
    tickets?:  {
      __typename: "ModelTicketConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      profileOwner?: string | null,
      tierId?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  profileOwner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    id: string,
    name: string,
    profileOwner?: string | null,
    tickets?:  {
      __typename: "ModelTicketConnection",
      nextToken?: string | null,
    } | null,
    tier?:  {
      __typename: "Tier",
      alias?: string | null,
      createdAt?: string | null,
      description?: string | null,
      id: string,
      tournamentsLimit?: number | null,
      updatedAt?: string | null,
      value?: number | null,
    } | null,
    tierId?: string | null,
    tournaments?:  {
      __typename: "ModelTournamentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    alias: string,
    createdAt: string,
    description: string,
    id: string,
    tournament?:  {
      __typename: "ModelTournamentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateQrcodeSubscriptionVariables = {
  filter?: ModelSubscriptionQrcodeFilterInput | null,
};

export type OnUpdateQrcodeSubscription = {
  onUpdateQrcode?:  {
    __typename: "Qrcode",
    createdAt: string,
    id: string,
    ticket?:  {
      __typename: "Ticket",
      createdAt: string,
      id: string,
      price: number,
      status: string,
      tournamentId: string,
      updatedAt: string,
      userId: string,
    } | null,
    ticketId: string,
    updatedAt: string,
    url: string,
  } | null,
};

export type OnUpdateTicketSubscriptionVariables = {
  filter?: ModelSubscriptionTicketFilterInput | null,
};

export type OnUpdateTicketSubscription = {
  onUpdateTicket?:  {
    __typename: "Ticket",
    createdAt: string,
    id: string,
    price: number,
    qrcode?:  {
      __typename: "Qrcode",
      createdAt: string,
      id: string,
      ticketId: string,
      updatedAt: string,
      url: string,
    } | null,
    status: string,
    tournament?:  {
      __typename: "Tournament",
      categoryId: string,
      createdAt: string,
      gameName: string,
      id: string,
      name: string,
      prize: number,
      updatedAt: string,
      userId: string,
    } | null,
    tournamentId: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      profileOwner?: string | null,
      tierId?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnUpdateTierSubscriptionVariables = {
  filter?: ModelSubscriptionTierFilterInput | null,
};

export type OnUpdateTierSubscription = {
  onUpdateTier?:  {
    __typename: "Tier",
    alias?: string | null,
    createdAt?: string | null,
    description?: string | null,
    id: string,
    tournamentsLimit?: number | null,
    updatedAt?: string | null,
    users?:  {
      __typename: "ModelUserConnection",
      nextToken?: string | null,
    } | null,
    value?: number | null,
  } | null,
};

export type OnUpdateTournamentSubscriptionVariables = {
  filter?: ModelSubscriptionTournamentFilterInput | null,
};

export type OnUpdateTournamentSubscription = {
  onUpdateTournament?:  {
    __typename: "Tournament",
    category?:  {
      __typename: "Category",
      alias: string,
      createdAt: string,
      description: string,
      id: string,
      updatedAt: string,
    } | null,
    categoryId: string,
    createdAt: string,
    gameName: string,
    id: string,
    name: string,
    prize: number,
    tickets?:  {
      __typename: "ModelTicketConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    user?:  {
      __typename: "User",
      createdAt: string,
      email: string,
      id: string,
      name: string,
      profileOwner?: string | null,
      tierId?: string | null,
      updatedAt: string,
    } | null,
    userId: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  profileOwner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    createdAt: string,
    email: string,
    id: string,
    name: string,
    profileOwner?: string | null,
    tickets?:  {
      __typename: "ModelTicketConnection",
      nextToken?: string | null,
    } | null,
    tier?:  {
      __typename: "Tier",
      alias?: string | null,
      createdAt?: string | null,
      description?: string | null,
      id: string,
      tournamentsLimit?: number | null,
      updatedAt?: string | null,
      value?: number | null,
    } | null,
    tierId?: string | null,
    tournaments?:  {
      __typename: "ModelTournamentConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};
