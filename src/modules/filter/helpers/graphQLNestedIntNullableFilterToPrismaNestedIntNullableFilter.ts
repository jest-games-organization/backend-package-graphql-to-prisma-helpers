import { NestedIntNullableFilter as GraphQLNestedIntNullableFilter } from '@jest-games-organization/backend-package-graphql-types';
import { NestedIntNullableFilter as PrismaNestedIntNullableFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Maps the GraphQL nested int nullable filter to a Prisma nested int nullable filter.
 * @param filter The GraphQL filter.
 * @returns The Prisma filter.
 */
export const graphQLNestedIntNullableFilterToPrismaNestedIntNullableFilter = (
  filter: GraphQLNestedIntNullableFilter | null | undefined,
): PrismaNestedIntNullableFilter | undefined => {
  // If the GraphQL filter is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma filter.
  return {
    equals: filter.equals,
    in: filter.in ? filter.in.filter((o): o is number => !!o) : filter.in,
    notIn: filter.notIn ? filter.notIn.filter((o): o is number => !!o) : filter.notIn,
    lt: filter.lt ?? undefined,
    lte: filter.lte ?? undefined,
    gt: filter.gt ?? undefined,
    gte: filter.gte ?? undefined,
    not: filter.not ? graphQLNestedIntNullableFilterToPrismaNestedIntNullableFilter(filter.not) : filter.not,
  };
};
