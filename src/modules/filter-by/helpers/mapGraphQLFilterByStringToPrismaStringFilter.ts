import { FilterByString } from '@jest-games-organization/backend-package-graphql-types';
import { StringFilter } from '@jest-games-organization/backend-package-prisma-types';
import { mapGraphQLFilterByModeToPrismaQueryMode } from './mapGraphQLFilterByModeToPrismaQueryMode';
import { mapGraphQLFilterByStringNestedToPrismaNestedStringFilter } from './mapGraphQLFilterByStringNestedToPrismaNestedStringFilter';

/**
 * Map the GraphQL filter by string to a Prisma string filter.
 * @param filter The GraphQL filter by string.
 * @returns The Prisma string filter.
 */
export const mapGraphQLFilterByStringToPrismaStringFilter = (
  filter: FilterByString | null | undefined,
): StringFilter | undefined => {
  // If the filter by string is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma string filter.
  return {
    equals: filter.equals ?? undefined,
    in: filter.in?.filter((o): o is string => !!o),
    notIn: filter.notIn?.filter((o): o is string => !!o),
    lt: filter.lt ?? undefined,
    lte: filter.lte ?? undefined,
    gt: filter.gt ?? undefined,
    gte: filter.gte ?? undefined,
    contains: filter.contains ?? undefined,
    startsWith: filter.startsWith ?? undefined,
    endsWith: filter.endsWith ?? undefined,
    mode: mapGraphQLFilterByModeToPrismaQueryMode(filter.mode),
    not: mapGraphQLFilterByStringNestedToPrismaNestedStringFilter(filter.not),
  };
};
