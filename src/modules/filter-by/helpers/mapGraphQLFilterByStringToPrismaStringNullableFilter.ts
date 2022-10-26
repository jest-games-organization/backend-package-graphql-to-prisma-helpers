import { FilterByString } from '@jest-games-organization/backend-package-graphql-types';
import { StringNullableFilter } from '@jest-games-organization/backend-package-prisma-types';
import { mapGraphQLFilterByModeToPrismaQueryMode } from './mapGraphQLFilterByModeToPrismaQueryMode';
import { mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter } from './mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter';

/**
 * Maps the GraphQL filter by string to a Prisma string nullable filter.
 * @param filter The GraphQL filter by string.
 * @returns The Prisma string nullable filter.
 */
export const mapGraphQLFilterByStringToPrismaStringNullableFilter = (
  filter: FilterByString | null | undefined,
): StringNullableFilter | undefined => {
  // If the filter by string is null or undefined, return undefined
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma string nullable filter
  return {
    equals: filter.equals,
    in: filter.in ? filter.in.filter((o): o is string => !!o) : filter.in,
    notIn: filter.notIn ? filter.notIn.filter((o): o is string => !!o) : filter.notIn,
    lt: filter.lt ?? undefined,
    lte: filter.lte ?? undefined,
    gt: filter.gt ?? undefined,
    gte: filter.gte ?? undefined,
    contains: filter.contains ?? undefined,
    startsWith: filter.startsWith ?? undefined,
    endsWith: filter.endsWith ?? undefined,
    mode: mapGraphQLFilterByModeToPrismaQueryMode(filter.mode),
    not: filter.not ? mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(filter.not) : filter.not,
  };
};
