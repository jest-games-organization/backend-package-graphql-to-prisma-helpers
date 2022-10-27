import { QueryMode as GraphQLQueryMode } from '@jest-games-organization/backend-package-graphql-types';
import { graphQLQueryModeToPrismaQueryMode } from '../../helpers/graphQLQueryModeToPrismaQueryMode';

describe('GIVEN the method', () => {
  let filter: GraphQLQueryMode | null | undefined;

  describe('WHEN the query mode is null', () => {
    beforeEach(() => {
      filter = null;
    });

    it('THEN it should return undefined', () => {
      const response = graphQLQueryModeToPrismaQueryMode(filter);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the query mode is undefined', () => {
    beforeEach(() => {
      filter = undefined;
    });

    it('THEN it should return undefined', () => {
      const response = graphQLQueryModeToPrismaQueryMode(filter);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the query mode is default', () => {
    beforeEach(() => {
      filter = GraphQLQueryMode.Default;
    });

    test('THEN it should return the prisma query mode', () => {
      const response = graphQLQueryModeToPrismaQueryMode(filter);
      expect(response).toEqual('default');
    });
  });

  describe('WHEN the query mode is insensitive', () => {
    beforeEach(() => {
      filter = GraphQLQueryMode.Insensitive;
    });

    test('THEN it should return the prisma query mode', () => {
      const response = graphQLQueryModeToPrismaQueryMode(filter);
      expect(response).toEqual('insensitive');
    });
  });
});
