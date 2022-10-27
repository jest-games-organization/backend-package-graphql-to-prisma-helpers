import { IdNullableFilter as GraphQLIdNullableFilter } from '@jest-games-organization/backend-package-graphql-types';
import { StringNullableFilter as PrismaStringNullableFilter } from '@jest-games-organization/backend-package-prisma-types';
import { graphQLNestedIdNullableFilterToPrismaNestedStringNullableFilter } from './graphQLNestedIdNullableFilterToPrismaNestedStringNullableFilter';
import { graphQLQueryModeToPrismaQueryMode } from './graphQLQueryModeToPrismaQueryMode';

/**
 * Maps the GraphQL id nullable filter to the Prisma string nullable filter.
 * @param filter The GraphQL filter.
 * @returns The Prisma string.
 */
export const graphQLIdNullableFilterToPrismaStringNullableFilter = (
  filter: GraphQLIdNullableFilter | null | undefined,
): PrismaStringNullableFilter | undefined => {
  // If the GraphQL filter is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma filter.
  return {
    contains: filter.contains ?? undefined,
    endsWith: filter.endsWith ?? undefined,
    equals: filter.equals,
    gt: filter.gt ?? undefined,
    gte: filter.gte ?? undefined,
    in: filter.in ? filter.in.filter((o): o is string => !!o) : filter.in,
    lt: filter.lt ?? undefined,
    lte: filter.lte ?? undefined,
    mode: graphQLQueryModeToPrismaQueryMode(filter.mode),
    not: filter.not ? graphQLNestedIdNullableFilterToPrismaNestedStringNullableFilter(filter.not) : filter.not,
    notIn: filter.notIn ? filter.notIn.filter((o): o is string => !!o) : filter.notIn,
    startsWith: filter.startsWith ?? undefined,
  };
};
