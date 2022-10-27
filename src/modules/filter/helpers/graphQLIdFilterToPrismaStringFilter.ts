import { IdFilter as GraphQLIdFilter } from '@jest-games-organization/backend-package-graphql-types';
import { StringFilter as PrismaStringFilter } from '@jest-games-organization/backend-package-prisma-types';
import { graphQLNestedIdFilterToPrismaNestedStringFilter } from './graphQLNestedIdFilterToPrismaNestedStringFilter';
import { graphQLQueryModeToPrismaQueryMode } from './graphQLQueryModeToPrismaQueryMode';

/**
 * Maps the GraphQL id filter to the Prisma string filter.
 * @param filter The GraphQL filter.
 * @returns The Prisma filter.
 */
export const graphQLIdFilterToPrismaStringFilter = (
  filter: GraphQLIdFilter | null | undefined,
): PrismaStringFilter | undefined => {
  // If the GraphQL filter is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma filter.
  return {
    contains: filter.contains ?? undefined,
    endsWith: filter.endsWith ?? undefined,
    equals: filter.equals ?? undefined,
    gt: filter.gt ?? undefined,
    gte: filter.gte ?? undefined,
    in: filter.in?.filter((o): o is string => !!o),
    lt: filter.lt ?? undefined,
    lte: filter.lte ?? undefined,
    mode: graphQLQueryModeToPrismaQueryMode(filter.mode),
    not: graphQLNestedIdFilterToPrismaNestedStringFilter(filter.not),
    notIn: filter.notIn?.filter((o): o is string => !!o),
    startsWith: filter.startsWith ?? undefined,
  };
};
