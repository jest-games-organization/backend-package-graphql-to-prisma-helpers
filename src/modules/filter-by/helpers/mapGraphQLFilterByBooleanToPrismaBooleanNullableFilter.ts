import { FilterByBoolean } from '@jest-games-organization/backend-package-graphql-types';
import { BooleanNullableFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Maps the GraphQL filter by boolean to a Prisma boolean nullable filter.
 * @param filter The GraphQL filter by boolean.
 * @returns The Prisma boolean nullable filter.
 */
export const mapGraphQLFilterByBooleanToPrismaBooleanNullableFilter = (
  filter: FilterByBoolean | null | undefined,
): BooleanNullableFilter | undefined => {
  // If the filter by boolean is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma boolean nullable filter.
  return {
    equals: filter.equals,
  };
};
