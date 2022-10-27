import { NestedStringNullableFilter as GraphQLNestedStringNullableFilter } from '@jest-games-organization/backend-package-graphql-types';
import { NestedStringNullableFilter as PrismaNestedStringNullableFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Maps the GraphQL nested id nullable filter to the Prisma nested string nullable filter.
 * @param filter The GraphQL filter.
 * @returns The Prisma filter.
 */
export const graphQLNestedIdNullableFilterToPrismaNestedStringNullableFilter = (
  filter: GraphQLNestedStringNullableFilter | null | undefined,
): PrismaNestedStringNullableFilter | undefined => {
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
    not: filter.not ? graphQLNestedIdNullableFilterToPrismaNestedStringNullableFilter(filter.not) : filter.not,
    notIn: filter.notIn ? filter.notIn.filter((o): o is string => !!o) : filter.notIn,
    startsWith: filter.startsWith ?? undefined,
  };
};
