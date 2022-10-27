import { BooleanFilter as GraphQLBooleanFilter } from '@jest-games-organization/backend-package-graphql-types';
import { graphQLBooleanFilterToPrismaBooleanFilter } from '../../helpers/graphQLBooleanFilterToPrismaBooleanFilter';

describe('GIVEN the method', () => {
  let filter: GraphQLBooleanFilter | null | undefined;

  describe('WHEN the filter is null', () => {
    beforeEach(() => {
      filter = null;
    });

    test('THEN it should return undefined', () => {
      const response = graphQLBooleanFilterToPrismaBooleanFilter(filter);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the filter is undefined', () => {
    beforeEach(() => {
      filter = undefined;
    });

    test('THEN it should return undefined', () => {
      const response = graphQLBooleanFilterToPrismaBooleanFilter(filter);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the filter is defined', () => {
    describe('AND the equals property', () => {
      describe('WHEN the equals property is undefined', () => {
        beforeEach(() => {
          filter = {
            equals: undefined,
          };
        });

        test('THEN it should return the prisma boolean filter', () => {
          const response = graphQLBooleanFilterToPrismaBooleanFilter(filter);
          expect(response).toEqual({ equals: undefined });
        });
      });

      describe('WHEN the equals property is null', () => {
        beforeEach(() => {
          filter = {
            equals: null,
          };
        });

        test('THEN it should return the prisma boolean filter', () => {
          const response = graphQLBooleanFilterToPrismaBooleanFilter(filter);
          expect(response).toEqual({ equals: undefined });
        });
      });

      describe('WHEN the equals property is set', () => {
        beforeEach(() => {
          filter = {
            equals: true,
          };
        });

        test('THEN it should return the prisma boolean filter', () => {
          const response = graphQLBooleanFilterToPrismaBooleanFilter(filter);
          expect(response).toEqual({ equals: true });
        });
      });
    });
  });
});
