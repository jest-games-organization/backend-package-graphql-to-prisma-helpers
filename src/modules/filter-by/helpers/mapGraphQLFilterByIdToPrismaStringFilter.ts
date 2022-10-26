import { FilterById } from '@jest-games-organization/backend-package-graphql-types';
import { StringFilter } from '@jest-games-organization/backend-package-prisma-types';
import { mapGraphQLFilterByIdNestedToPrismaNestedStringFilter } from './mapGraphQLFilterByIdNestedToPrismaNestedStringFilter';
import { mapGraphQLFilterByModeToPrismaQueryMode } from './mapGraphQLFilterByModeToPrismaQueryMode';

/**
 * Map the GraphQL filter by id to the Prisma string filter.
 * @param filter The GraphQL filter by id.
 * @returns The Prisma string filter.
 */
export const mapGraphQLFilterByIdToPrismaStringFilter = (
  filter: FilterById | null | undefined,
): StringFilter | undefined => {
  // If the filter by id is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma string filter.
  return {
    contains: filter.contains ?? undefined,
    endsWith: filter.endsWith ?? undefined,
    equals: filter.equals ?? undefined,
    gt: filter.gt ?? undefined,
    gte: filter.gte ?? undefined,
    in: filter.in?.filter((o): o is string => !!o),
    lt: filter.lt ?? undefined,
    lte: filter.lte ?? undefined,
    mode: mapGraphQLFilterByModeToPrismaQueryMode(filter.mode),
    not: mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter.not),
    notIn: filter.notIn?.filter((o): o is string => !!o),
    startsWith: filter.startsWith ?? undefined,
  };
};
