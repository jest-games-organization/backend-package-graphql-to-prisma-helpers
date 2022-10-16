import { FilterByBoolean } from '@jest-games-organization/backend-package-graphql-types';
import { BooleanFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Maps the GraphQL filter by boolean to a Prisma boolean filter.
 * @param f The GraphQL filter by boolean.
 * @returns The Prisma boolean filter.
 */
export const mapGraphQLFilterByBooleanToPrismaBooleanFilter = (f: FilterByBoolean): BooleanFilter => {
  return {
    equals: f.equals ?? undefined,
  };
};
