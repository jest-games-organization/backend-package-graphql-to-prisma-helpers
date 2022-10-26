import { FilterByBoolean } from '@jest-games-organization/backend-package-graphql-types';
import { BooleanFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Maps the GraphQL filter by boolean to a Prisma boolean filter.
 * @param filter The GraphQL filter by boolean.
 * @returns The Prisma boolean filter.
 */
export const mapGraphQLFilterByBooleanToPrismaBooleanFilter = (
  filter: FilterByBoolean | null | undefined,
): BooleanFilter | undefined => {
  // If the filter by boolean is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma boolean filter.
  return {
    equals: filter.equals ?? undefined,
  };
};
