import { NestedStringFilter as GraphQLNestedStringFilter } from '@jest-games-organization/backend-package-graphql-types';
import { NestedStringFilter as PrismaNestedStringFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Maps the GraphQL nested string filter to a Prisma nested string filter.
 * @param filter The GraphQL filter.
 * @returns The Prisma filter.
 */
export const graphQLNestedStringFilterToPrismaNestedStringFilter = (
  filter: GraphQLNestedStringFilter | null | undefined,
): PrismaNestedStringFilter | undefined => {
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
    not: graphQLNestedStringFilterToPrismaNestedStringFilter(filter.not),
  };
};
