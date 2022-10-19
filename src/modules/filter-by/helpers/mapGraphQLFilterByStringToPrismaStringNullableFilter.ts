import { FilterByString } from '@jest-games-organization/backend-package-graphql-types';
import { StringNullableFilter } from '@jest-games-organization/backend-package-prisma-types';
import { mapGraphQLFilterByModeToPrismaQueryMode } from './mapGraphQLFilterByModeToPrismaQueryMode';
import { mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter } from './mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter';

/**
 * Maps the GraphQL filter by string to a Prisma string nullable filter.
 * @param f The GraphQL filter by string.
 * @returns The Prisma string nullable filter.
 */
export const mapGraphQLFilterByStringToPrismaStringNullableFilter = (f: FilterByString): StringNullableFilter => {
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
    mode: f.mode ? mapGraphQLFilterByModeToPrismaQueryMode(f.mode) : undefined,
    not: f.not ? mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(f.not) : f.not,
  };
};
