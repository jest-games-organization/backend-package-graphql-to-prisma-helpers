import { FilterByString } from '@jest-games-organization/backend-package-graphql-types';
import { StringFilter } from '@jest-games-organization/backend-package-prisma-types';
import { mapGraphQLFilterByModeToPrismaQueryMode } from './mapGraphQLFilterByModeToPrismaQueryMode';
import { mapGraphQLFilterByStringNestedToPrismaNestedStringFilter } from './mapGraphQLFilterByStringNestedToPrismaNestedStringFilter';

/**
 * Map the GraphQL filter by string to a Prisma string filter.
 * @param f The GraphQL filter by string.
 * @returns The Prisma string filter.
 */
export const mapGraphQLFilterByStringToPrismaStringFilter = (f: FilterByString): StringFilter => {
  return {
    equals: f.equals ?? undefined,
    in: f.in?.filter((o): o is string => !!o),
    notIn: f.notIn?.filter((o): o is string => !!o),
    lt: f.lt ?? undefined,
    lte: f.lte ?? undefined,
    gt: f.gt ?? undefined,
    gte: f.gte ?? undefined,
    contains: f.contains ?? undefined,
    startsWith: f.startsWith ?? undefined,
    endsWith: f.endsWith ?? undefined,
    mode: f.mode ? mapGraphQLFilterByModeToPrismaQueryMode(f.mode) : undefined,
    not: f.not ? mapGraphQLFilterByStringNestedToPrismaNestedStringFilter(f.not) : undefined,
  };
};
