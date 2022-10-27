import { DateTimeFilter as GraphQLDateTimeFilter } from '@jest-games-organization/backend-package-graphql-types';
import { DateTimeFilter as PrismaDateTimeFilter } from '@jest-games-organization/backend-package-prisma-types';
import { graphQLNestedDateTimeFilterToPrismaNestedDateTimeFilter } from './graphQLNestedDateTimeFilterToPrismaNestedDateTimeFilter';

/**
 * Maps the GraphQL date time filter to a Prisma date time filter.
 * @param filter The GraphQL filter.
 * @returns The Prisma filter.
 */
export const graphQLDateTimeFilterToPrismaDateTimeFilter = (
  filter: GraphQLDateTimeFilter | null | undefined,
): PrismaDateTimeFilter | undefined => {
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
