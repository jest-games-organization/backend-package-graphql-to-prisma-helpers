import { NestedIntFilter as GraphQLNestedIntFilter } from '@jest-games-organization/backend-package-graphql-types';
import { NestedIntFilter as PrismaNestedIntFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Maps the GraphQL nested int filter to a Prisma nested int filter.
 * @param filter The GraphQL filter.
 * @returns The Prisma filter.
 */
export const graphQLNestedIntFilterToPrismaNestedIntFilter = (
  filter: GraphQLNestedIntFilter | null | undefined,
): PrismaNestedIntFilter | undefined => {
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
    not: graphQLNestedIntFilterToPrismaNestedIntFilter(filter.not),
  };
};
