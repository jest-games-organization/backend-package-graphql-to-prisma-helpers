import { NestedStringNullableFilter as GraphQLNestedStringNullableFilter } from '@jest-games-organization/backend-package-graphql-types';
import { NestedStringNullableFilter as PrismaNestedStringNullableFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Maps the GraphQL nested string nullable filter to a Prisma nested string nullable filter.
 * @param filter The GraphQL filter.
 * @returns The Prisma afilter.
 */
export const graphQLNestedStringNullableFilterToPrismaNestedStringNullableFilter = (
  filter: GraphQLNestedStringNullableFilter | null | undefined,
): PrismaNestedStringNullableFilter | undefined => {
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
    contains: filter.contains ?? undefined,
    startsWith: filter.startsWith ?? undefined,
    endsWith: filter.endsWith ?? undefined,
    not: filter.not ? graphQLNestedStringNullableFilterToPrismaNestedStringNullableFilter(filter.not) : filter.not,
  };
};
