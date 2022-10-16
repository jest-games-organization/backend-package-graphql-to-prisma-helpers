import { OrderByDirection } from '@jest-games-organization/backend-package-graphql-types';
import { mapGraphQLOrderByDirectionToPrismaSortOrder } from '../../helpers/mapGraphQLOrderByDirectionToPrismaSortOrder';

describe('GIVEN the mapGraphQLOrderByDirectionToPrismaSortOrder method', () => {
  let graphQLOrderByDirection: OrderByDirection;

  describe('WHEN the order by direction is ascending', () => {
    beforeEach(() => {
      graphQLOrderByDirection = OrderByDirection.Ascending;
    });

    test('THEN it should return the prisma sort order', () => {
      const response = mapGraphQLOrderByDirectionToPrismaSortOrder(graphQLOrderByDirection);
      expect(response).toEqual('asc');
    });
  });

  describe('WHEN the order by direction is descending', () => {
    beforeEach(() => {
      graphQLOrderByDirection = OrderByDirection.Descending;
    });

    test('THEN it should return the prisma sort order', () => {
      const response = mapGraphQLOrderByDirectionToPrismaSortOrder(graphQLOrderByDirection);
      expect(response).toEqual('desc');
    });
  });
});
