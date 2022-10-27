import { IntFilter as GraphQLIntFilter } from '@jest-games-organization/backend-package-graphql-types';
import { IntFilter as PrismaIntFilter } from '@jest-games-organization/backend-package-prisma-types';
import { graphQLNestedIntFilterToPrismaNestedIntFilter } from './graphQLNestedIntFilterToPrismaNestedIntFilter';

/**
 * Map the GraphQL int filter to a Prisma int filter.
 * @param filter The GraphQL filter.
 * @returns The Prisma filter.
 */
export const graphQLIntFilterToPrismaIntFilter = (
  filter: GraphQLIntFilter | null | undefined,
): PrismaIntFilter | undefined => {
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
