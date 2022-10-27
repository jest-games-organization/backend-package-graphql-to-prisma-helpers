import { BooleanNullableFilter as GraphQLBooleanNullableFilter } from '@jest-games-organization/backend-package-graphql-types';
import { BooleanNullableFilter as PrismaBooleanNullableFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Maps the GraphQL boolean nullable filter to a Prisma boolean nullable filter.
 * @param filter The GraphQL filter.
 * @returns The Prisma filter.
 */
export const graphQLBooleanNullableFilterToPrismaBooleanNullableFilter = (
  filter: GraphQLBooleanNullableFilter | null | undefined,
): PrismaBooleanNullableFilter | undefined => {
  // If the GraphQL filter is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma filter.
  return {
    equals: filter.equals,
  };
};
