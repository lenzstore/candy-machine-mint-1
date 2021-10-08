/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWhitelistAddress = /* GraphQL */ `
  query GetWhitelistAddress($id: ID!) {
    getWhitelistAddress(id: $id) {
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
export const listWhitelistAddresses = /* GraphQL */ `
  query ListWhitelistAddresses(
    $filter: ModelWhitelistAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWhitelistAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        wallet
        count
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWhitelistAddresses = /* GraphQL */ `
  query SyncWhitelistAddresses(
    $filter: ModelWhitelistAddressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWhitelistAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        wallet
        count
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getMintCount = /* GraphQL */ `
  query GetMintCount($id: ID!) {
    getMintCount(id: $id) {
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
export const listMintCounts = /* GraphQL */ `
  query ListMintCounts(
    $filter: ModelMintCountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMintCounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        wallet
        count
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMintCounts = /* GraphQL */ `
  query SyncMintCounts(
    $filter: ModelMintCountFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMintCounts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        wallet
        count
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
