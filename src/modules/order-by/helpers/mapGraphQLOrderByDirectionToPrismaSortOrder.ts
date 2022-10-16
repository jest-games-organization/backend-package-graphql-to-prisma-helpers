import { OrderByDirection } from '@jest-games-organization/backend-package-graphql-types';
import { SortOrder } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Map the GraphQL order by direction to a Prisma sort order.
 * @param o The GraphQL order by direction.
 * @returns The Prisma sort order.
 */
export const mapGraphQLOrderByDirectionToPrismaSortOrder = (o: OrderByDirection): SortOrder => {
  return o === OrderByDirection.Ascending ? 'asc' : 'desc';
};
