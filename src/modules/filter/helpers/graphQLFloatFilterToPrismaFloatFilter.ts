import { FloatFilter as GraphQLFloatFilter } from '@jest-games-organization/backend-package-graphql-types';
import { FloatFilter as PrismaFloatFilter } from '@jest-games-organization/backend-package-prisma-types';
import { graphQLNestedFloatFilterToPrismaNestedFloatFilter } from './graphQLNestedFloatFilterToPrismaNestedFloatFilter';

/**
 * Maps the GraphQL float filter to a Prisma float filter.
 * @param filter The GraphQL filter.
 * @returns The Prisma filter.
 */
export const graphQLFloatFilterToPrismaFloatFilter = (
  filter: GraphQLFloatFilter | null | undefined,
): PrismaFloatFilter | undefined => {
  // If the GraphQL filter is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma filter.
  return {
    equals: filter.equals ?? undefined,
    in: filter.in?.filter((o): o is number => !!o),
    notIn: filter.notIn?.filter((o): o is number => !!o),
    lt: filter.lt ?? undefined,
    lte: filter.lte ?? undefined,
    gt: filter.gt ?? undefined,
    gte: filter.gte ?? undefined,
    not: graphQLNestedFloatFilterToPrismaNestedFloatFilter(filter.not),
  };
};
