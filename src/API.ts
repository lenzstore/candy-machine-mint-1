/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWhitelistAddressInput = {
  id?: string | null,
  wallet: string,
  count: number,
  _version?: number | null,
};

export type ModelWhitelistAddressConditionInput = {
  wallet?: ModelStringInput | null,
  count?: ModelIntInput | null,
  and?: Array< ModelWhitelistAddressConditionInput | null > | null,
  or?: Array< ModelWhitelistAddressConditionInput | null > | null,
  not?: ModelWhitelistAddressConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type WhitelistAddress = {
  __typename: "WhitelistAddress",
  id: string,
  wallet: string,
  count: number,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateWhitelistAddressInput = {
  id: string,
  wallet?: string | null,
  count?: number | null,
  _version?: number | null,
};

export type DeleteWhitelistAddressInput = {
  id: string,
  _version?: number | null,
};

export type CreateMintCountInput = {
  id?: string | null,
  wallet?: string | null,
  count?: number | null,
  _version?: number | null,
};

export type ModelMintCountConditionInput = {
  wallet?: ModelStringInput | null,
  count?: ModelIntInput | null,
  and?: Array< ModelMintCountConditionInput | null > | null,
  or?: Array< ModelMintCountConditionInput | null > | null,
  not?: ModelMintCountConditionInput | null,
};

export type MintCount = {
  __typename: "MintCount",
  id: string,
  wallet?: string | null,
  count?: number | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMintCountInput = {
  id: string,
  wallet?: string | null,
  count?: number | null,
  _version?: number | null,
};

export type DeleteMintCountInput = {
  id: string,
  _version?: number | null,
};

export type ModelWhitelistAddressFilterInput = {
  id?: ModelIDInput | null,
  wallet?: ModelStringInput | null,
  count?: ModelIntInput | null,
  and?: Array< ModelWhitelistAddressFilterInput | null > | null,
  or?: Array< ModelWhitelistAddressFilterInput | null > | null,
  not?: ModelWhitelistAddressFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelWhitelistAddressConnection = {
  __typename: "ModelWhitelistAddressConnection",
  items?:  Array<WhitelistAddress | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMintCountFilterInput = {
  id?: ModelIDInput | null,
  wallet?: ModelStringInput | null,
  count?: ModelIntInput | null,
  and?: Array< ModelMintCountFilterInput | null > | null,
  or?: Array< ModelMintCountFilterInput | null > | null,
  not?: ModelMintCountFilterInput | null,
};

export type ModelMintCountConnection = {
  __typename: "ModelMintCountConnection",
  items?:  Array<MintCount | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateWhitelistAddressMutationVariables = {
  input: CreateWhitelistAddressInput,
  condition?: ModelWhitelistAddressConditionInput | null,
};

export type CreateWhitelistAddressMutation = {
  createWhitelistAddress?:  {
    __typename: "WhitelistAddress",
    id: string,
    wallet: string,
    count: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWhitelistAddressMutationVariables = {
  input: UpdateWhitelistAddressInput,
  condition?: ModelWhitelistAddressConditionInput | null,
};

export type UpdateWhitelistAddressMutation = {
  updateWhitelistAddress?:  {
    __typename: "WhitelistAddress",
    id: string,
    wallet: string,
    count: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWhitelistAddressMutationVariables = {
  input: DeleteWhitelistAddressInput,
  condition?: ModelWhitelistAddressConditionInput | null,
};

export type DeleteWhitelistAddressMutation = {
  deleteWhitelistAddress?:  {
    __typename: "WhitelistAddress",
    id: string,
    wallet: string,
    count: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMintCountMutationVariables = {
  input: CreateMintCountInput,
  condition?: ModelMintCountConditionInput | null,
};

export type CreateMintCountMutation = {
  createMintCount?:  {
    __typename: "MintCount",
    id: string,
    wallet?: string | null,
    count?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMintCountMutationVariables = {
  input: UpdateMintCountInput,
  condition?: ModelMintCountConditionInput | null,
};

export type UpdateMintCountMutation = {
  updateMintCount?:  {
    __typename: "MintCount",
    id: string,
    wallet?: string | null,
    count?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMintCountMutationVariables = {
  input: DeleteMintCountInput,
  condition?: ModelMintCountConditionInput | null,
};

export type DeleteMintCountMutation = {
  deleteMintCount?:  {
    __typename: "MintCount",
    id: string,
    wallet?: string | null,
    count?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetWhitelistAddressQueryVariables = {
  id: string,
};

export type GetWhitelistAddressQuery = {
  getWhitelistAddress?:  {
    __typename: "WhitelistAddress",
    id: string,
    wallet: string,
    count: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWhitelistAddressesQueryVariables = {
  filter?: ModelWhitelistAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWhitelistAddressesQuery = {
  listWhitelistAddresses?:  {
    __typename: "ModelWhitelistAddressConnection",
    items?:  Array< {
      __typename: "WhitelistAddress",
      id: string,
      wallet: string,
      count: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWhitelistAddressesQueryVariables = {
  filter?: ModelWhitelistAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWhitelistAddressesQuery = {
  syncWhitelistAddresses?:  {
    __typename: "ModelWhitelistAddressConnection",
    items?:  Array< {
      __typename: "WhitelistAddress",
      id: string,
      wallet: string,
      count: number,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMintCountQueryVariables = {
  id: string,
};

export type GetMintCountQuery = {
  getMintCount?:  {
    __typename: "MintCount",
    id: string,
    wallet?: string | null,
    count?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMintCountsQueryVariables = {
  filter?: ModelMintCountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMintCountsQuery = {
  listMintCounts?:  {
    __typename: "ModelMintCountConnection",
    items?:  Array< {
      __typename: "MintCount",
      id: string,
      wallet?: string | null,
      count?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMintCountsQueryVariables = {
  filter?: ModelMintCountFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMintCountsQuery = {
  syncMintCounts?:  {
    __typename: "ModelMintCountConnection",
    items?:  Array< {
      __typename: "MintCount",
      id: string,
      wallet?: string | null,
      count?: number | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateWhitelistAddressSubscription = {
  onCreateWhitelistAddress?:  {
    __typename: "WhitelistAddress",
    id: string,
    wallet: string,
    count: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWhitelistAddressSubscription = {
  onUpdateWhitelistAddress?:  {
    __typename: "WhitelistAddress",
    id: string,
    wallet: string,
    count: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWhitelistAddressSubscription = {
  onDeleteWhitelistAddress?:  {
    __typename: "WhitelistAddress",
    id: string,
    wallet: string,
    count: number,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMintCountSubscription = {
  onCreateMintCount?:  {
    __typename: "MintCount",
    id: string,
    wallet?: string | null,
    count?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMintCountSubscription = {
  onUpdateMintCount?:  {
    __typename: "MintCount",
    id: string,
    wallet?: string | null,
    count?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMintCountSubscription = {
  onDeleteMintCount?:  {
    __typename: "MintCount",
    id: string,
    wallet?: string | null,
    count?: number | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
