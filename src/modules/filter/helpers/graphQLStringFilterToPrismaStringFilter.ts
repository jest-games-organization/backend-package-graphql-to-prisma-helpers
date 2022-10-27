import { StringFilter as GraphQLStringFilter } from '@jest-games-organization/backend-package-graphql-types';
import { StringFilter as PrismaStringFilter } from '@jest-games-organization/backend-package-prisma-types';
import { graphQLNestedStringFilterToPrismaNestedStringFilter } from './graphQLNestedStringFilterToPrismaNestedStringFilter';
import { graphQLQueryModeToPrismaQueryMode } from './graphQLQueryModeToPrismaQueryMode';

/**
 * Maps the GraphQL string filter to a Prisma string filter.
 * @param filter The GraphQL filter.
 * @returns The Prisma filter.
 */
export const graphQLStringFilterToPrismaStringFilter = (
  filter: GraphQLStringFilter | null | undefined,
): PrismaStringFilter | undefined => {
  // If the GraphQL filter is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma filter.
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
    mode: graphQLQueryModeToPrismaQueryMode(filter.mode),
    not: graphQLNestedStringFilterToPrismaNestedStringFilter(filter.not),
  };
};
