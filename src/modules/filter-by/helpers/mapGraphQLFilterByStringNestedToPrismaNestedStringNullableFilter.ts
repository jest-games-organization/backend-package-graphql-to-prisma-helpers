import { FilterByStringNested } from '@jest-games-organization/backend-package-graphql-types';
import { NestedStringNullableFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Map the GraphQL filter by string nested to a Prisma string nullable filter.
 * @param filter The GraphQL filter by string nested.
 * @returns The Prisma nested string nullable filter.
 */
export const mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter = (
  filter: FilterByStringNested | null | undefined,
): NestedStringNullableFilter | undefined => {
  // If the filter by string nested is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma nested string nullable filter.
  return {
    equals: filter.equals,
    in: filter.in ? filter.in.filter((o): o is string => !!o) : filter.in,
    notIn: filter.notIn ? filter.notIn.filter((o): o is string => !!o) : filter.notIn,
    lt: filter.lt ?? undefined,
    lte: filter.lte ?? undefined,
    gt: filter.gt ?? undefined,
    gte: filter.gte ?? undefined,
    contains: filter.contains ?? undefined,
    startsWith: filter.startsWith ?? undefined,
    endsWith: filter.endsWith ?? undefined,
    not: filter.not ? mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(filter.not) : filter.not,
  };
};
