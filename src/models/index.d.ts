import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type WhitelistAddressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MintCountMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class WhitelistAddress {
  readonly id: string;
  readonly wallet?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<WhitelistAddress, WhitelistAddressMetaData>);
  static copyOf(source: WhitelistAddress, mutator: (draft: MutableModel<WhitelistAddress, WhitelistAddressMetaData>) => MutableModel<WhitelistAddress, WhitelistAddressMetaData> | void): WhitelistAddress;
}

export declare class MintCount {
  readonly id: string;
  readonly wallet?: string;
  readonly count?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<MintCount, MintCountMetaData>);
  static copyOf(source: MintCount, mutator: (draft: MutableModel<MintCount, MintCountMetaData>) => MutableModel<MintCount, MintCountMetaData> | void): MintCount;
}