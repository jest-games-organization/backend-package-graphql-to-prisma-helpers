import { OrderByDirection } from '@jest-games-organization/backend-package-graphql-types';
import { mapGraphQLOrderByDirectionToPrismaSortOrder } from '../../helpers/mapGraphQLOrderByDirectionToPrismaSortOrder';

describe('GIVEN the mapGraphQLOrderByDirectionToPrismaSortOrder method', () => {
  let orderByDirection: OrderByDirection | null | undefined;

  describe('WHEN the order by direction is null', () => {
    beforeEach(() => {
      orderByDirection = null;
    });

    test('THEN it should return undefined', () => {
      const response = mapGraphQLOrderByDirectionToPrismaSortOrder(orderByDirection);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the order by direction is undefined', () => {
    beforeEach(() => {
      orderByDirection = undefined;
    });

    test('THEN it should return undefined', () => {
      const response = mapGraphQLOrderByDirectionToPrismaSortOrder(orderByDirection);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the order by direction is ascending', () => {
    beforeEach(() => {
      orderByDirection = OrderByDirection.Ascending;
    });

    test('THEN it should return the prisma sort order', () => {
      const response = mapGraphQLOrderByDirectionToPrismaSortOrder(orderByDirection);
      expect(response).toEqual('asc');
    });
  });

  describe('WHEN the order by direction is descending', () => {
    beforeEach(() => {
      orderByDirection = OrderByDirection.Descending;
    });

    test('THEN it should return the prisma sort order', () => {
      const response = mapGraphQLOrderByDirectionToPrismaSortOrder(orderByDirection);
      expect(response).toEqual('desc');
    });
  });
});
