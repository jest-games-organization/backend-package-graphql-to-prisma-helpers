import { FilterByMode } from '@jest-games-organization/backend-package-graphql-types';
import { mapGraphQLFilterByModeToPrismaQueryMode } from '../../helpers/mapGraphQLFilterByModeToPrismaQueryMode';

describe('GIVEN the mapGraphQLFilterByModeToPrismaQueryMode method', () => {
  let filter: FilterByMode | null | undefined;

  describe('WHEN the filter by mode is null', () => {
    beforeEach(() => {
      filter = null;
    });

    it('THEN it should return undefined', () => {
      const response = mapGraphQLFilterByModeToPrismaQueryMode(filter);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the filter by mode is undefined', () => {
    beforeEach(() => {
      filter = undefined;
    });

    it('THEN it should return undefined', () => {
      const response = mapGraphQLFilterByModeToPrismaQueryMode(filter);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the filter by mode is default', () => {
    beforeEach(() => {
      filter = FilterByMode.Default;
    });

    test('THEN it should return the prisma query mode', () => {
      const response = mapGraphQLFilterByModeToPrismaQueryMode(filter);
      expect(response).toEqual('default');
    });
  });

  describe('WHEN the filter by mode is insensitive', () => {
    beforeEach(() => {
      filter = FilterByMode.Insensitive;
    });

    test('THEN it should return the prisma query mode', () => {
      const response = mapGraphQLFilterByModeToPrismaQueryMode(filter);
      expect(response).toEqual('insensitive');
    });
  });
});
