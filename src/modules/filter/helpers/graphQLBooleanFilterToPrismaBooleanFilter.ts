import { BooleanFilter as GraphQLBooleanFilter } from '@jest-games-organization/backend-package-graphql-types';
import { BooleanFilter as PrismaBooleanFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Maps the GraphQL boolean filter to a Prisma boolean filter.
 * @param filter The GraphQL filter.
 * @returns The Prisma filter.
 */
export const graphQLBooleanFilterToPrismaBooleanFilter = (
  filter: GraphQLBooleanFilter | null | undefined,
): PrismaBooleanFilter | undefined => {
  // If the GraphQL filter is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma filter.
  return {
    equals: filter.equals ?? undefined,
  };
};
