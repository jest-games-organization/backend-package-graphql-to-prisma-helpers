import { FilterByBoolean } from '@jest-games-organization/backend-package-graphql-types';
import { BooleanNullableFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Maps the GraphQL filter by boolean to a Prisma boolean nullable filter.
 * @param f The GraphQL filter by boolean.
 * @returns The Prisma boolean nullable filter.
 */
export const mapGraphQLFilterByBooleanToPrismaBooleanNullableFilter = (f: FilterByBoolean): BooleanNullableFilter => {
  return {
    equals: f.equals,
  };
};
