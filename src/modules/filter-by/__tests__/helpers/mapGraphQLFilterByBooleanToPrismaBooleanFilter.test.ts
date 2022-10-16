import { FilterByBoolean } from '@jest-games-organization/backend-package-graphql-types';
import { mapGraphQLFilterByBooleanToPrismaBooleanFilter } from '../../helpers/mapGraphQLFilterByBooleanToPrismaBooleanFilter';

describe('GIVEN the mapGraphQLFilterByBooleanToPrismaBooleanFilter method', () => {
  let graphQLFilterByBoolean: FilterByBoolean;

  describe('AND the equals property', () => {
    describe('WHEN the equals property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByBoolean = {
          equals: undefined,
        };
      });

      test('THEN it should return the prisma boolean filter', () => {
        const response = mapGraphQLFilterByBooleanToPrismaBooleanFilter(graphQLFilterByBoolean);
        expect(response).toEqual({ equals: undefined });
      });
    });

    describe('WHEN the equals property is null', () => {
      beforeEach(() => {
        graphQLFilterByBoolean = {
          equals: null,
        };
      });

      test('THEN it should return the prisma boolean filter', () => {
        const response = mapGraphQLFilterByBooleanToPrismaBooleanFilter(graphQLFilterByBoolean);
        expect(response).toEqual({ equals: undefined });
      });
    });

    describe('WHEN the equals property is set', () => {
      beforeEach(() => {
        graphQLFilterByBoolean = {
          equals: true,
        };
      });

      test('THEN it should return the prisma boolean filter', () => {
        const response = mapGraphQLFilterByBooleanToPrismaBooleanFilter(graphQLFilterByBoolean);
        expect(response).toEqual({ equals: true });
      });
    });
  });
});
