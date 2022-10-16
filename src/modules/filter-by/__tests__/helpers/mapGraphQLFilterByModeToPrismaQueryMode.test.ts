import { FilterByMode } from '@jest-games-organization/backend-package-graphql-types';
import { mapGraphQLFilterByModeToPrismaQueryMode } from '../../helpers/mapGraphQLFilterByModeToPrismaQueryMode';

describe('GIVEN the mapGraphQLFilterByModeToPrismaQueryMode method', () => {
  let graphQLFilterByMode: FilterByMode;

  describe('WHEN the filter by mode is default', () => {
    beforeEach(() => {
      graphQLFilterByMode = FilterByMode.Default;
    });

    test('THEN it should return the prisma query mode', () => {
      const response = mapGraphQLFilterByModeToPrismaQueryMode(graphQLFilterByMode);
      expect(response).toEqual('default');
    });
  });

  describe('WHEN the filter by mode is insensitive', () => {
    beforeEach(() => {
      graphQLFilterByMode = FilterByMode.Insensitive;
    });

    test('THEN it should return the prisma query mode', () => {
      const response = mapGraphQLFilterByModeToPrismaQueryMode(graphQLFilterByMode);
      expect(response).toEqual('insensitive');
    });
  });
});
