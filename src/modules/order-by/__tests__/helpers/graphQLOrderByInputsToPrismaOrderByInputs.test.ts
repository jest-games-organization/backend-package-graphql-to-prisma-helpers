import { OrderByInput as GraphQLOrderByInput, SortOrder } from '@jest-games-organization/backend-package-graphql-types';
import { DataObject, Enumerable } from '@jest-games-organization/backend-package-object-types';
import { graphQLOrderByInputsToPrismaOrderByInputs } from '../../helpers/graphQLOrderByInputsToPrismaOrderByInputs';

describe('GIVEN the method', () => {
  let orderByInputs: GraphQLOrderByInput<DataObject>[] | null | undefined;

  describe('WHEN the order by inputs are null', () => {
    beforeEach(() => {
      orderByInputs = null;
    });

    test('THEN it should return undefined', () => {
      const response = graphQLOrderByInputsToPrismaOrderByInputs(orderByInputs);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the order by inputs are undefined', () => {
    beforeEach(() => {
      orderByInputs = undefined;
    });

    test('THEN it should return undefined', () => {
      const response = graphQLOrderByInputsToPrismaOrderByInputs(orderByInputs);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the order by inputs are defined', () => {
    describe('AND the order by inputs is empty', () => {
      beforeEach(() => {
        orderByInputs = [];
      });

      test('THEN it should return undefined', () => {
        const response = graphQLOrderByInputsToPrismaOrderByInputs(orderByInputs);
        expect(response).toEqual([]);
      });
    });

    describe('AND the order by inputs is not empty', () => {
      beforeEach(() => {
        orderByInputs = [{ id: SortOrder.Ascending }];
      });

      test('THEN it should return the prisma order by inputs', () => {
        const response = graphQLOrderByInputsToPrismaOrderByInputs(orderByInputs);
        expect(response).toEqual([{ id: 'asc' }]);
      });
    });
  });
});
