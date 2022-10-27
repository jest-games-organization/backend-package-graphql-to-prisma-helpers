import { NestedStringFilter as GraphQLNestedStringFilter } from '@jest-games-organization/backend-package-graphql-types';
import { NestedStringFilter as PrismaNestedStringFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Maps the GraphQL nested id filter to the Prisma nested string filter.
 * @param filter The GraphQL filter.
 * @returns The Prisma filter.
 */
export const graphQLNestedIdFilterToPrismaNestedStringFilter = (
  filter: GraphQLNestedStringFilter | null | undefined,
): PrismaNestedStringFilter | undefined => {
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
    not: graphQLNestedIdFilterToPrismaNestedStringFilter(filter.not),
    notIn: filter.notIn?.filter((o): o is string => !!o),
    startsWith: filter.startsWith ?? undefined,
  };
};
