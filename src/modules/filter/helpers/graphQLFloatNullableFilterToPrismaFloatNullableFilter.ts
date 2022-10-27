import { FloatNullableFilter as GraphQLFloatNullableFilter } from '@jest-games-organization/backend-package-graphql-types';
import { FloatNullableFilter as PrismaFloatNullableFilter } from '@jest-games-organization/backend-package-prisma-types';
import { graphQLNestedFloatNullableFilterToPrismaNestedFloatNullableFilter } from './graphQLNestedFloatNullableFilterToPrismaNestedFloatNullableFilter';

/**
 * Maps the GraphQL float nullable filter to a Prisma float nullable filter.
 * @param filter The GraphQL filter.
 * @returns The Prisma filter.
 */
export const graphQLFloatNullableFilterToPrismaFloatNullableFilter = (
  filter: GraphQLFloatNullableFilter | null | undefined,
): PrismaFloatNullableFilter | undefined => {
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
    not: filter.not ? graphQLNestedFloatNullableFilterToPrismaNestedFloatNullableFilter(filter.not) : filter.not,
  };
};
