import { IntNullableFilter as GraphQLIntNullableFilter } from '@jest-games-organization/backend-package-graphql-types';
import { IntNullableFilter as PrismaIntNullableFilter } from '@jest-games-organization/backend-package-prisma-types';
import { graphQLNestedIntNullableFilterToPrismaNestedIntNullableFilter } from './graphQLNestedIntNullableFilterToPrismaNestedIntNullableFilter';

/**
 * Maps the GraphQL int nullable filter to a Prisma int nullable filter.
 * @param filter The GraphQL filter.
 * @returns The Prisma filter.
 */
export const graphQLIntNullableFilterToPrismaIntNullableFilter = (
  filter: GraphQLIntNullableFilter | null | undefined,
): PrismaIntNullableFilter | undefined => {
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
