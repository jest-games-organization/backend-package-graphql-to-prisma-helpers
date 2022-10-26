import { OrderByDirection } from '@jest-games-organization/backend-package-graphql-types';
import { SortOrder } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Map the GraphQL order by direction to a Prisma sort order.
 * @param o The GraphQL order by direction.
 * @returns The Prisma sort order.
 */
export const mapGraphQLOrderByDirectionToPrismaSortOrder = (
  o: OrderByDirection | null | undefined,
): SortOrder | undefined => {
  // If the order by direction is null or undefined, return undefined.
  if (o === null || o === undefined) {
    return undefined;
  }

  // Return the Prisma sort order.
  return o === OrderByDirection.Ascending ? 'asc' : 'desc';
};
