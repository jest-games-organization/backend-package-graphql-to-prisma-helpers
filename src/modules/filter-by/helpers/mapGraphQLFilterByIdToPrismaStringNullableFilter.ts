import { FilterById } from '@jest-games-organization/backend-package-graphql-types';
import { StringNullableFilter } from '@jest-games-organization/backend-package-prisma-types';
import { mapGraphQLFilterByIdNestedToPrismaNestedStringNullableFilter } from './mapGraphQLFilterByIdNestedToPrismaNestedStringNullableFilter';
import { mapGraphQLFilterByModeToPrismaQueryMode } from './mapGraphQLFilterByModeToPrismaQueryMode';

/**
 * Map the GraphQL filter by id to the Prisma string nullable filter.
 * @param f The GraphQL filter by id.
 * @returns The Prisma string nullable filter.
 */
export const mapGraphQLFilterByIdToPrismaStringNullableFilter = (f: FilterById): StringNullableFilter => {
  return {
    contains: f.contains ?? undefined,
    endsWith: f.endsWith ?? undefined,
    equals: f.equals,
    gt: f.gt ?? undefined,
    gte: f.gte ?? undefined,
    in: f.in ? f.in.filter((o): o is string => !!o) : f.in,
    lt: f.lt ?? undefined,
    lte: f.lte ?? undefined,
    mode: f.mode ? mapGraphQLFilterByModeToPrismaQueryMode(f.mode) : undefined,
    not: f.not ? mapGraphQLFilterByIdNestedToPrismaNestedStringNullableFilter(f.not) : f.not,
    notIn: f.notIn ? f.notIn.filter((o): o is string => !!o) : f.notIn,
    startsWith: f.startsWith ?? undefined,
  };
};
