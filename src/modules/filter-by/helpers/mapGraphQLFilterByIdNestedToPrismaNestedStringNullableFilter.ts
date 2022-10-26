import { FilterByIdNested } from '@jest-games-organization/backend-package-graphql-types';
import { NestedStringNullableFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Map the GraphQL filter by id nested to the Prisma string nullable filter.
 * @param filter The GraphQL filter by id nested.
 * @returns The Prisma nested string nullable filter.
 */
export const mapGraphQLFilterByIdNestedToPrismaNestedStringNullableFilter = (
  filter: FilterByIdNested | null | undefined,
): NestedStringNullableFilter | undefined => {
  // If the filter by id nested is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma nested string nullable filter.
  return {
    contains: filter.contains ?? undefined,
    endsWith: filter.endsWith ?? undefined,
    equals: filter.equals,
    gt: filter.gt ?? undefined,
    gte: filter.gte ?? undefined,
    in: filter.in ? filter.in.filter((o): o is string => !!o) : filter.in,
    lt: filter.lt ?? undefined,
    lte: filter.lte ?? undefined,
    not: filter.not ? mapGraphQLFilterByIdNestedToPrismaNestedStringNullableFilter(filter.not) : filter.not,
    notIn: filter.notIn ? filter.notIn.filter((o): o is string => !!o) : filter.notIn,
    startsWith: filter.startsWith ?? undefined,
  };
};
