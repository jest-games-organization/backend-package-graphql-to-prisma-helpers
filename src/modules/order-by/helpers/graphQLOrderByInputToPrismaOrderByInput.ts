import { OrderByInput as GraphQLOrderByInput } from '@jest-games-organization/backend-package-graphql-types';
import { DataObject } from '@jest-games-organization/backend-package-object-types';
import { OrderByInput as PrismaOrderByInput } from '@jest-games-organization/backend-package-prisma-types';
import { graphQLSortOrderToPrismaSortOrder } from './graphQLSortOrderToPrismaSortOrder';

/**
 * Maps the GraphQL order by input to a Prisma order by input.
 * @param orderByInput The GraphQL order by input.
 * @returns The Prisma order by input.
 */
export const graphQLOrderByInputToPrismaOrderByInput = <Node extends DataObject, Record extends DataObject>(
  orderByInput: GraphQLOrderByInput<Node>,
): PrismaOrderByInput<Record> => {
  // Return the Prisma order by.
  return Object.fromEntries(
    Object.entries(orderByInput).map(([key, value]) => {
      return [key, graphQLSortOrderToPrismaSortOrder(value)];
    }),
  ) as PrismaOrderByInput<Record>;
};
