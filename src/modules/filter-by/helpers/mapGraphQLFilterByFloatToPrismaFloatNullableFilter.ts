import { FilterByFloat } from '@jest-games-organization/backend-package-graphql-types';
import { FloatNullableFilter } from '@jest-games-organization/backend-package-prisma-types';
import { mapGraphQLFilterByFloatNestedToPrismaNestedFloatNullableFilter } from './mapGraphQLFilterByFloatNestedToPrismaNestedFloatNullableFilter';

/**
 * Maps the GraphQL filter by float to a Prisma float nullable filter.
 * @param filter The GraphQL filter by float.
 * @returns The Prisma float nullable filter.
 */
export const mapGraphQLFilterByFloatToPrismaFloatNullableFilter = (
  filter: FilterByFloat | null | undefined,
): FloatNullableFilter | undefined => {
  // If the filter by float is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma float nullable filter.
  return {
    equals: filter.equals,
    in: filter.in ? filter.in.filter((o): o is number => !!o) : filter.in,
    notIn: filter.notIn ? filter.notIn.filter((o): o is number => !!o) : filter.notIn,
    lt: filter.lt ?? undefined,
    lte: filter.lte ?? undefined,
    gt: filter.gt ?? undefined,
    gte: filter.gte ?? undefined,
    not: filter.not ? mapGraphQLFilterByFloatNestedToPrismaNestedFloatNullableFilter(filter.not) : filter.not,
  };
};
