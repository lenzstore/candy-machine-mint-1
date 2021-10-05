/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWhitelistAddress = /* GraphQL */ `
  mutation CreateWhitelistAddress(
    $input: CreateWhitelistAddressInput!
    $condition: ModelWhitelistAddressConditionInput
  ) {
    createWhitelistAddress(input: $input, condition: $condition) {
      id
      wallet
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateWhitelistAddress = /* GraphQL */ `
  mutation UpdateWhitelistAddress(
    $input: UpdateWhitelistAddressInput!
    $condition: ModelWhitelistAddressConditionInput
  ) {
    updateWhitelistAddress(input: $input, condition: $condition) {
      id
      wallet
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteWhitelistAddress = /* GraphQL */ `
  mutation DeleteWhitelistAddress(
    $input: DeleteWhitelistAddressInput!
    $condition: ModelWhitelistAddressConditionInput
  ) {
    deleteWhitelistAddress(input: $input, condition: $condition) {
      id
      wallet
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createMintCount = /* GraphQL */ `
  mutation CreateMintCount(
    $input: CreateMintCountInput!
    $condition: ModelMintCountConditionInput
  ) {
    createMintCount(input: $input, condition: $condition) {
      id
      wallet
      count
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateMintCount = /* GraphQL */ `
  mutation UpdateMintCount(
    $input: UpdateMintCountInput!
    $condition: ModelMintCountConditionInput
  ) {
    updateMintCount(input: $input, condition: $condition) {
      id
      wallet
      count
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteMintCount = /* GraphQL */ `
  mutation DeleteMintCount(
    $input: DeleteMintCountInput!
    $condition: ModelMintCountConditionInput
  ) {
    deleteMintCount(input: $input, condition: $condition) {
      id
      wallet
      count
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
