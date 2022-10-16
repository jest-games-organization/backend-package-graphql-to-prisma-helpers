import { FilterById } from '@jest-games-organization/backend-package-graphql-types';
import { StringFilter } from '@jest-games-organization/backend-package-prisma-types';
import { mapGraphQLFilterByIdNestedToPrismaNestedStringFilter } from './mapGraphQLFilterByIdNestedToPrismaNestedStringFilter';
import { mapGraphQLFilterByModeToPrismaQueryMode } from './mapGraphQLFilterByModeToPrismaQueryMode';

/**
 * Map the GraphQL filter by id to the Prisma string filter.
 * @param f The GraphQL filter by id.
 * @returns The Prisma string filter.
 */
export const mapGraphQLFilterByIdToPrismaStringFilter = (f: FilterById): StringFilter => {
  return {
    contains: f.contains ?? undefined,
    endsWith: f.endsWith ?? undefined,
    equals: f.equals ?? undefined,
    gt: f.gt ?? undefined,
    gte: f.gte ?? undefined,
    in: f.in?.filter((o): o is string => !!o),
    lt: f.lt ?? undefined,
    lte: f.lte ?? undefined,
    mode: f.mode ? mapGraphQLFilterByModeToPrismaQueryMode(f.mode) : undefined,
    not: f.not ? mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(f.not) : undefined,
    notIn: f.notIn?.filter((o): o is string => !!o),
    startsWith: f.startsWith ?? undefined,
  };
};
