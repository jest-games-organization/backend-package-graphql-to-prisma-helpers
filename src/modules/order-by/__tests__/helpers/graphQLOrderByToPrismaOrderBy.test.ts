import { OrderBy as GraphQLOrderBy, SortOrder } from '@jest-games-organization/backend-package-graphql-types';
import { DataObject } from '@jest-games-organization/backend-package-object-types';
import { graphQLOrderByToPrismaOrderBy } from '../../helpers/graphQLOrderByToPrismaOrderBy';

describe('GIVEN the method', () => {
  let orderBy: GraphQLOrderBy<DataObject> | null | undefined;

  describe('WHEN the order by is null', () => {
    beforeEach(() => {
      orderBy = null;
    });

    it('THEN it should return undefined', () => {
      const response = graphQLOrderByToPrismaOrderBy(orderBy);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the order by is undefined', () => {
    beforeEach(() => {
      orderBy = undefined;
    });

    it('THEN it should return undefined', () => {
      const response = graphQLOrderByToPrismaOrderBy(orderBy);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the order by is defined', () => {
    describe('AND the order by is set', () => {
      beforeEach(() => {
        orderBy = { id: SortOrder.Ascending };
      });

      it('THEN it should return the prisma order by', () => {
        const response = graphQLOrderByToPrismaOrderBy(orderBy);
        expect(response).toEqual({ id: 'asc' });
      });
    });
  });
});
