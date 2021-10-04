// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const { WhitelistAddress, MintCount } = initSchema(schema);

export {
  WhitelistAddress,
  MintCount
};