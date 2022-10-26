import { FilterById } from '@jest-games-organization/backend-package-graphql-types';
import { StringNullableFilter } from '@jest-games-organization/backend-package-prisma-types';
import { mapGraphQLFilterByIdNestedToPrismaNestedStringNullableFilter } from './mapGraphQLFilterByIdNestedToPrismaNestedStringNullableFilter';
import { mapGraphQLFilterByModeToPrismaQueryMode } from './mapGraphQLFilterByModeToPrismaQueryMode';

/**
 * Map the GraphQL filter by id to the Prisma string nullable filter.
 * @param filter The GraphQL filter by id.
 * @returns The Prisma string nullable filter.
 */
export const mapGraphQLFilterByIdToPrismaStringNullableFilter = (
  filter: FilterById | null | undefined,
): StringNullableFilter | undefined => {
  // If the filter by id is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma string nullable filter.
  return {
    contains: filter.contains ?? undefined,
    endsWith: filter.endsWith ?? undefined,
    equals: filter.equals,
    gt: filter.gt ?? undefined,
    gte: filter.gte ?? undefined,
    in: filter.in ? filter.in.filter((o): o is string => !!o) : filter.in,
    lt: filter.lt ?? undefined,
    lte: filter.lte ?? undefined,
    mode: mapGraphQLFilterByModeToPrismaQueryMode(filter.mode),
    not: filter.not ? mapGraphQLFilterByIdNestedToPrismaNestedStringNullableFilter(filter.not) : filter.not,
    notIn: filter.notIn ? filter.notIn.filter((o): o is string => !!o) : filter.notIn,
    startsWith: filter.startsWith ?? undefined,
  };
};
