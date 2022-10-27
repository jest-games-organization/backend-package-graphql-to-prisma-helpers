import { SortOrder as GraphQLSortOrder } from '@jest-games-organization/backend-package-graphql-types';
import { graphQLSortOrderToPrismaSortOrder } from '../../helpers/graphQLSortOrderToPrismaSortOrder';

describe('GIVEN the method', () => {
  let orderByDirection: GraphQLSortOrder | null | undefined;

  describe('WHEN the sort order is null', () => {
    beforeEach(() => {
      orderByDirection = null;
    });

    test('THEN it should return undefined', () => {
      const response = graphQLSortOrderToPrismaSortOrder(orderByDirection);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the sort order is undefined', () => {
    beforeEach(() => {
      orderByDirection = undefined;
    });

    test('THEN it should return undefined', () => {
      const response = graphQLSortOrderToPrismaSortOrder(orderByDirection);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the sort order is ascending', () => {
    beforeEach(() => {
      orderByDirection = GraphQLSortOrder.Ascending;
    });

    test('THEN it should return the prisma sort order', () => {
      const response = graphQLSortOrderToPrismaSortOrder(orderByDirection);
      expect(response).toEqual('asc');
    });
  });

  describe('WHEN the sort order is descending', () => {
    beforeEach(() => {
      orderByDirection = GraphQLSortOrder.Descending;
    });

    test('THEN it should return the prisma sort order', () => {
      const response = graphQLSortOrderToPrismaSortOrder(orderByDirection);
      expect(response).toEqual('desc');
    });
  });
});
