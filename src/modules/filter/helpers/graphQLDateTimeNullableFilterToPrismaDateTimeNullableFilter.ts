import { DateTimeNullableFilter as GraphQLDateTimeNullableFilter } from '@jest-games-organization/backend-package-graphql-types';
import { DateTimeNullableFilter as PrismaDateTimeNullableFilter } from '@jest-games-organization/backend-package-prisma-types';
import { graphQLNestedDateTimeNullableFilterToPrismaNestedDateTimeNullableFilter } from './graphQLNestedDateTimeNullableFilterToPrismaNestedDateTimeNullableFilter';
111;
/**
 * Maps the GraphQL date time nullable filter to the Prisma date time nullable filter.
 * @param filter The GraphQL filter.
 * @returns The Prisma filter.
 */
export const graphQLDateTimeNullableFilterToPrismaDateTimeNullableFilter = (
  filter: GraphQLDateTimeNullableFilter | null | undefined,
): PrismaDateTimeNullableFilter | undefined => {
  // If the GraphQL filter is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma filter.
  return {
    equals: filter.equals,
    in: filter.in ? filter.in.filter((o): o is string => !!o) : filter.in,
    notIn: filter.notIn ? filter.notIn.filter((o): o is string => !!o) : filter.notIn,
    lt: filter.lt ?? undefined,
    lte: filter.lte ?? undefined,
    gt: filter.gt ?? undefined,
    gte: filter.gte ?? undefined,
    not: filter.not ? graphQLNestedDateTimeNullableFilterToPrismaNestedDateTimeNullableFilter(filter.not) : filter.not,
  };
};
