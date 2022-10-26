import { FilterByDateNested } from '@jest-games-organization/backend-package-graphql-types';
import { mapGraphQLFilterByDateToPrismaDateTimeNullableFilter } from '../../helpers/mapGraphQLFilterByDateToPrismaDateTimeNullableFilter';

describe('GIVEN the mapGraphQLFilterByDateToPrismaDateTimeNullableFilter method', () => {
  let filter: FilterByDateNested | null | undefined;

  describe('WHEN the filter by date is null', () => {
    beforeEach(() => {
      filter = null;
    });

    test('THEN it should return undefined', () => {
      const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the filter by date is undefined', () => {
    beforeEach(() => {
      filter = undefined;
    });

    test('THEN it should return undefined', () => {
      const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the filter by date is defined', () => {
    describe('AND the equals property', () => {
      describe('WHEN the equals property is undefined', () => {
        beforeEach(() => {
          filter = {
            equals: undefined,
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ equals: undefined });
        });
      });

      describe('WHEN the equals property is null', () => {
        beforeEach(() => {
          filter = {
            equals: null,
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ equals: null });
        });
      });

      describe('WHEN the equals property is set', () => {
        beforeEach(() => {
          filter = {
            equals: '2021-01-01T00:00:00.000Z',
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ equals: '2021-01-01T00:00:00.000Z' });
        });
      });
    });

    describe('AND the in property', () => {
      describe('WHEN the in property is undefined', () => {
        beforeEach(() => {
          filter = {
            in: undefined,
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ in: undefined });
        });
      });

      describe('WHEN the in property is null', () => {
        beforeEach(() => {
          filter = {
            in: null,
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ in: null });
        });
      });

      describe('WHEN the in property is set', () => {
        beforeEach(() => {
          filter = {
            in: ['2021-01-01T00:00:00.000Z'],
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ in: ['2021-01-01T00:00:00.000Z'] });
        });
      });
    });

    describe('AND the notIn property', () => {
      describe('WHEN the notIn property is undefined', () => {
        beforeEach(() => {
          filter = {
            notIn: undefined,
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ notIn: undefined });
        });
      });

      describe('WHEN the notIn property is null', () => {
        beforeEach(() => {
          filter = {
            notIn: null,
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ notIn: null });
        });
      });

      describe('WHEN the notIn property is set', () => {
        beforeEach(() => {
          filter = {
            notIn: ['2021-01-01T00:00:00.000Z'],
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ notIn: ['2021-01-01T00:00:00.000Z'] });
        });
      });
    });

    describe('AND the lt property', () => {
      describe('WHEN the lt property is undefined', () => {
        beforeEach(() => {
          filter = {
            lt: undefined,
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ lt: undefined });
        });
      });

      describe('WHEN the lt property is null', () => {
        beforeEach(() => {
          filter = {
            lt: null,
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ lt: undefined });
        });
      });

      describe('WHEN the lt property is set', () => {
        beforeEach(() => {
          filter = {
            lt: '2021-01-01T00:00:00.000Z',
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ lt: '2021-01-01T00:00:00.000Z' });
        });
      });
    });

    describe('AND the lte property', () => {
      describe('WHEN the lte property is undefined', () => {
        beforeEach(() => {
          filter = {
            lte: undefined,
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ lte: undefined });
        });
      });

      describe('WHEN the lte property is null', () => {
        beforeEach(() => {
          filter = {
            lte: null,
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ lte: undefined });
        });
      });

      describe('WHEN the lte property is set', () => {
        beforeEach(() => {
          filter = {
            lte: '2021-01-01T00:00:00.000Z',
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ lte: '2021-01-01T00:00:00.000Z' });
        });
      });
    });

    describe('AND the gt property', () => {
      describe('WHEN the gt property is undefined', () => {
        beforeEach(() => {
          filter = {
            gt: undefined,
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ gt: undefined });
        });
      });

      describe('WHEN the gt property is null', () => {
        beforeEach(() => {
          filter = {
            gt: null,
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ gt: undefined });
        });
      });

      describe('WHEN the gt property is set', () => {
        beforeEach(() => {
          filter = {
            gt: '2021-01-01T00:00:00.000Z',
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ gt: '2021-01-01T00:00:00.000Z' });
        });
      });
    });

    describe('AND the gte property', () => {
      describe('WHEN the gte property is undefined', () => {
        beforeEach(() => {
          filter = {
            gte: undefined,
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ gte: undefined });
        });
      });

      describe('WHEN the gte property is null', () => {
        beforeEach(() => {
          filter = {
            gte: null,
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ gte: undefined });
        });
      });

      describe('WHEN the gte property is set', () => {
        beforeEach(() => {
          filter = {
            gte: '2021-01-01T00:00:00.000Z',
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ gte: '2021-01-01T00:00:00.000Z' });
        });
      });
    });

    describe('AND the not property', () => {
      describe('WHEN the not property is undefined', () => {
        beforeEach(() => {
          filter = {
            not: undefined,
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ not: undefined });
        });
      });

      describe('WHEN the not property is null', () => {
        beforeEach(() => {
          filter = {
            not: null,
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ not: null });
        });
      });

      describe('WHEN the not property is set', () => {
        beforeEach(() => {
          filter = {
            not: {
              equals: '2021-01-01T00:00:00.000Z',
            },
          };
        });

        test('THEN it should return the prisma date time filter', () => {
          const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(filter);
          expect(response).toEqual({ not: { equals: '2021-01-01T00:00:00.000Z' } });
        });
      });
    });
  });
});
