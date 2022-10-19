import { FilterByIdNested } from '@jest-games-organization/backend-package-graphql-types';
import { NestedStringNullableFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Map the GraphQL filter by id nested to the Prisma string nullable filter.
 * @param f The GraphQL filter by id nested.
 * @returns The Prisma nested string nullable filter.
 */
export const mapGraphQLFilterByIdNestedToPrismaNestedStringNullableFilter = (
  f: FilterByIdNested,
): NestedStringNullableFilter => {
  return {
    contains: f.contains ?? undefined,
    endsWith: f.endsWith ?? undefined,
    equals: f.equals,
    gt: f.gt ?? undefined,
    gte: f.gte ?? undefined,
    in: f.in ? f.in.filter((o): o is string => !!o) : f.in,
    lt: f.lt ?? undefined,
    lte: f.lte ?? undefined,
    not: f.not ? mapGraphQLFilterByIdNestedToPrismaNestedStringNullableFilter(f.not) : f.not,
    notIn: f.notIn ? f.notIn.filter((o): o is string => !!o) : f.notIn,
    startsWith: f.startsWith ?? undefined,
  };
};
