import { NestedDateTimeNullableFilter as GraphQLNestedDateTimeNullableFilter } from '@jest-games-organization/backend-package-graphql-types';
import { NestedDateTimeNullableFilter as PrismaNestedDateTimeNullableFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Maps the GraphQL nested date time nullable filter to a Prisma nested date time nullable filter.
 * @param filter The GraphQL filter.
 * @returns The Prisma filter.
 */
export const graphQLNestedDateTimeNullableFilterToPrismaNestedDateTimeNullableFilter = (
  filter: GraphQLNestedDateTimeNullableFilter | null | undefined,
): PrismaNestedDateTimeNullableFilter | undefined => {
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
