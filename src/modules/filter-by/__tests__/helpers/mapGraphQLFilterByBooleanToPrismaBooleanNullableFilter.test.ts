import { FilterByBoolean } from '@jest-games-organization/backend-package-graphql-types';
import { mapGraphQLFilterByBooleanToPrismaBooleanNullableFilter } from '../../helpers/mapGraphQLFilterByBooleanToPrismaBooleanNullableFilter';

describe('GIVEN the mapGraphQLFilterByBooleanToPrismaBooleanNullableFilter method', () => {
  let filter: FilterByBoolean | null | undefined;

  describe('WHEN the filter by boolean is null', () => {
    beforeEach(() => {
      filter = null;
    });

    test('THEN it should return undefined', () => {
      const response = mapGraphQLFilterByBooleanToPrismaBooleanNullableFilter(filter);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the filter by boolean is undefined', () => {
    beforeEach(() => {
      filter = undefined;
    });

    test('THEN it should return undefined', () => {
      const response = mapGraphQLFilterByBooleanToPrismaBooleanNullableFilter(filter);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the filter by boolean is defined', () => {
    describe('AND the equals property', () => {
      describe('WHEN the equals property is undefined', () => {
        beforeEach(() => {
          filter = {
            equals: undefined,
          };
        });

        test('THEN it should return the prisma boolean filter', () => {
          const response = mapGraphQLFilterByBooleanToPrismaBooleanNullableFilter(filter);
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
          const response = mapGraphQLFilterByBooleanToPrismaBooleanNullableFilter(filter);
          expect(response).toEqual({ equals: null });
        });
      });

      describe('WHEN the equals property is set', () => {
        beforeEach(() => {
          filter = {
            equals: true,
          };
        });

        test('THEN it should return the prisma boolean filter', () => {
          const response = mapGraphQLFilterByBooleanToPrismaBooleanNullableFilter(filter);
          expect(response).toEqual({ equals: true });
        });
      });
    });
  });
});
