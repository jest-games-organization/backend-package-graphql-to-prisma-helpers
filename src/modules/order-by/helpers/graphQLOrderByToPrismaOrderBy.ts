import { OrderBy as GraphQLOrderBy } from '@jest-games-organization/backend-package-graphql-types';
import { DataObject } from '@jest-games-organization/backend-package-object-types';
import { OrderBy as PrismaOrderBy } from '@jest-games-organization/backend-package-prisma-types';
import { graphQLSortOrderToPrismaSortOrder } from './graphQLSortOrderToPrismaSortOrder';

export const graphQLOrderByToPrismaOrderBy = <Node extends DataObject, Entity extends DataObject>(
  orderBy: GraphQLOrderBy<Node> | null | undefined,
): PrismaOrderBy<Entity> | undefined => {
  // If the GraphQL order by is null or undefined, return undefined.
  if (orderBy === null || orderBy === undefined) {
    return undefined;
  }

  // Return the Prisma order by.
  return Object.fromEntries(
    Object.entries(orderBy).map(([key, value]) => {
      return [key, graphQLSortOrderToPrismaSortOrder(value)];
    }),
  ) as PrismaOrderBy<Entity>;
};
