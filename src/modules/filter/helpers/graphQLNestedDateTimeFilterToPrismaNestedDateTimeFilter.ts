import { NestedDateTimeFilter as GraphQLNestedDateTimeFilter } from '@jest-games-organization/backend-package-graphql-types';
import { NestedDateTimeFilter as PrismaNestedDateTimeFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Maps the GraphQL nested date time filter to a Prisma neseted date time filter.
 * @param filter The GraphQL filter.
 * @returns The Prisma filter.
 */
export const graphQLNestedDateTimeFilterToPrismaNestedDateTimeFilter = (
  filter: GraphQLNestedDateTimeFilter | null | undefined,
): PrismaNestedDateTimeFilter | undefined => {
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
    not: graphQLNestedDateTimeFilterToPrismaNestedDateTimeFilter(filter.not),
  };
};
