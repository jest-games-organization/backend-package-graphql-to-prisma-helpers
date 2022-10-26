import { FilterByDateNested } from '@jest-games-organization/backend-package-graphql-types';
import { NestedDateTimeNullableFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Map the GraphQL filter by date to a Prisma date time nullable filter.
 * @param filter The GraphQL filter by date.
 * @returns The Prisma Nested date time nullable filter.
 */
export const mapGraphQLFilterByDateNestedToPrismaNestedDateTimeNullableFilter = (
  filter: FilterByDateNested | null | undefined,
): NestedDateTimeNullableFilter | undefined => {
  // If the filter by date nested is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma nested date time nullable filter.
  return {
    equals: filter.equals,
    in: filter.in ? filter.in.filter((o): o is string => !!o) : filter.in,
    notIn: filter.notIn ? filter.notIn.filter((o): o is string => !!o) : filter.notIn,
    lt: filter.lt ?? undefined,
    lte: filter.lte ?? undefined,
    gt: filter.gt ?? undefined,
    gte: filter.gte ?? undefined,
    not: filter.not ? mapGraphQLFilterByDateNestedToPrismaNestedDateTimeNullableFilter(filter.not) : filter.not,
  };
};
