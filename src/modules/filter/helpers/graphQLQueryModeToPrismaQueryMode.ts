import { QueryMode as GraphQLQueryMode } from '@jest-games-organization/backend-package-graphql-types';
import { QueryMode as PrismaQueryMode } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Maps the GraphQL  query mode to a Prisma query mode.
 * @param queryMode The GraphQL query mode.
 * @returns The Prisma query mode.
 */
export const graphQLQueryModeToPrismaQueryMode = (
  queryMode: GraphQLQueryMode | null | undefined,
): PrismaQueryMode | undefined => {
  // If the query mode is null or undefined, return undefined.
  if (queryMode === null || queryMode === undefined) {
    return undefined;
  }

  // Return the Prisma query mode.
  return queryMode === GraphQLQueryMode.Default ? 'default' : 'insensitive';
};
