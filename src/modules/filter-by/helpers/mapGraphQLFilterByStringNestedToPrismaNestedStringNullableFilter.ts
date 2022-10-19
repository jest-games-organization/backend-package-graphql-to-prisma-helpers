import { FilterByStringNested } from '@jest-games-organization/backend-package-graphql-types';
import { NestedStringNullableFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Map the GraphQL filter by string nested to a Prisma string nullable filter.
 * @param f The GraphQL filter by string nested.
 * @returns The Prisma nested string nullable filter.
 */
export const mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter = (
  f: FilterByStringNested,
): NestedStringNullableFilter => {
  return {
    equals: f.equals,
    in: f.in ? f.in.filter((o): o is string => !!o) : f.in,
    notIn: f.notIn ? f.notIn.filter((o): o is string => !!o) : f.notIn,
    lt: f.lt ?? undefined,
    lte: f.lte ?? undefined,
    gt: f.gt ?? undefined,
    gte: f.gte ?? undefined,
    contains: f.contains ?? undefined,
    startsWith: f.startsWith ?? undefined,
    endsWith: f.endsWith ?? undefined,
    not: f.not ? mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(f.not) : f.not,
  };
};
