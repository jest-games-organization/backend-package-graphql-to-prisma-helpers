import { SortOrder as GraphQLSortOrder } from '@jest-games-organization/backend-package-graphql-types';
import { SortOrder as PrismaSortOrder } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Map the GraphQL sort order to a Prisma sort order.
 * @param sortOrder The GraphQL sort order.
 * @returns The Prisma sort order.
 */
export const graphQLSortOrderToPrismaSortOrder = (
  sortOrder: GraphQLSortOrder | null | undefined,
): PrismaSortOrder | undefined => {
  // If the sort order is null or undefined, return undefined.
  if (sortOrder === null || sortOrder === undefined) {
    return undefined;
  }

  // Return the Prisma sort order.
  return sortOrder === GraphQLSortOrder.Ascending ? 'asc' : 'desc';
};
