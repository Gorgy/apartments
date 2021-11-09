import { usersTypeDefs } from './users';
import { DocumentNode } from 'graphql';

export const typeDefs: DocumentNode[] = [usersTypeDefs];

export { default as resolvers } from './resolvers';
