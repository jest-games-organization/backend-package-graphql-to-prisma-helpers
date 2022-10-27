import { StringNullableFilter as GraphQLStringNullableFilter } from '@jest-games-organization/backend-package-graphql-types';
import { StringNullableFilter as PrismaStringNullableFilter } from '@jest-games-organization/backend-package-prisma-types';
import { graphQLNestedStringNullableFilterToPrismaNestedStringNullableFilter } from './graphQLNestedStringNullableFilterToPrismaNestedStringNullableFilter';
import { graphQLQueryModeToPrismaQueryMode } from './graphQLQueryModeToPrismaQueryMode';

/**
 * Maps the GraphQL string nullable filter to a Prisma string nullable filter.
 * @param filter The GraphQL filter.
 * @returns The Prisma filter.
 */
export const graphQLStringNullableFilterToPrismaStringNullableFilter = (
  filter: GraphQLStringNullableFilter | null | undefined,
): PrismaStringNullableFilter | undefined => {
  // If the GraphQL filter is null or undefined, return undefined
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma filter
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
    mode: graphQLQueryModeToPrismaQueryMode(filter.mode),
    not: filter.not ? graphQLNestedStringNullableFilterToPrismaNestedStringNullableFilter(filter.not) : filter.not,
  };
};
