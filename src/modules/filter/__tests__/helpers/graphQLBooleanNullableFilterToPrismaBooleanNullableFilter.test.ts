import { BooleanNullableFilter as GraphQLBooleanNullableFilter } from '@jest-games-organization/backend-package-graphql-types';
import { graphQLBooleanNullableFilterToPrismaBooleanNullableFilter } from '../../helpers/graphQLBooleanNullableFilterToPrismaBooleanNullableFilter';

describe('GIVEN the method', () => {
  let filter: GraphQLBooleanNullableFilter | null | undefined;

  describe('WHEN the filter is null', () => {
    beforeEach(() => {
      filter = null;
    });

    test('THEN it should return undefined', () => {
      const response = graphQLBooleanNullableFilterToPrismaBooleanNullableFilter(filter);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the filter is undefined', () => {
    beforeEach(() => {
      filter = undefined;
    });

    test('THEN it should return undefined', () => {
      const response = graphQLBooleanNullableFilterToPrismaBooleanNullableFilter(filter);
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
          const response = graphQLBooleanNullableFilterToPrismaBooleanNullableFilter(filter);
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
          const response = graphQLBooleanNullableFilterToPrismaBooleanNullableFilter(filter);
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
          const response = graphQLBooleanNullableFilterToPrismaBooleanNullableFilter(filter);
          expect(response).toEqual({ equals: true });
        });
      });
    });
  });
});
