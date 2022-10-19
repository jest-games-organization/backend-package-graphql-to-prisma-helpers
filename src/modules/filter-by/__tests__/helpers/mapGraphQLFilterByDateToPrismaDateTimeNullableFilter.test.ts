import { FilterByDateNested } from '@jest-games-organization/backend-package-graphql-types';
import { mapGraphQLFilterByDateToPrismaDateTimeNullableFilter } from '../../helpers/mapGraphQLFilterByDateToPrismaDateTimeNullableFilter';

describe('GIVEN the mapGraphQLFilterByDateToPrismaDateTimeNullableFilter', () => {
  let graphQLFilterByDate: FilterByDateNested;

  describe('AND the equals property', () => {
    describe('WHEN the equals property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          equals: undefined,
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ equals: undefined });
      });
    });

    describe('WHEN the equals property is null', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          equals: null,
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ equals: null });
      });
    });

    describe('WHEN the equals property is set', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          equals: '2021-01-01T00:00:00.000Z',
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ equals: '2021-01-01T00:00:00.000Z' });
      });
    });
  });

  describe('AND the in property', () => {
    describe('WHEN the in property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          in: undefined,
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ in: undefined });
      });
    });

    describe('WHEN the in property is null', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          in: null,
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ in: null });
      });
    });

    describe('WHEN the in property is set', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          in: ['2021-01-01T00:00:00.000Z'],
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ in: ['2021-01-01T00:00:00.000Z'] });
      });
    });
  });

  describe('AND the notIn property', () => {
    describe('WHEN the notIn property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          notIn: undefined,
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ notIn: undefined });
      });
    });

    describe('WHEN the notIn property is null', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          notIn: null,
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ notIn: null });
      });
    });

    describe('WHEN the notIn property is set', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          notIn: ['2021-01-01T00:00:00.000Z'],
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ notIn: ['2021-01-01T00:00:00.000Z'] });
      });
    });
  });

  describe('AND the lt property', () => {
    describe('WHEN the lt property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          lt: undefined,
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ lt: undefined });
      });
    });

    describe('WHEN the lt property is null', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          lt: null,
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ lt: undefined });
      });
    });

    describe('WHEN the lt property is set', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          lt: '2021-01-01T00:00:00.000Z',
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ lt: '2021-01-01T00:00:00.000Z' });
      });
    });
  });

  describe('AND the lte property', () => {
    describe('WHEN the lte property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          lte: undefined,
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ lte: undefined });
      });
    });

    describe('WHEN the lte property is null', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          lte: null,
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ lte: undefined });
      });
    });

    describe('WHEN the lte property is set', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          lte: '2021-01-01T00:00:00.000Z',
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ lte: '2021-01-01T00:00:00.000Z' });
      });
    });
  });

  describe('AND the gt property', () => {
    describe('WHEN the gt property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          gt: undefined,
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ gt: undefined });
      });
    });

    describe('WHEN the gt property is null', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          gt: null,
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ gt: undefined });
      });
    });

    describe('WHEN the gt property is set', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          gt: '2021-01-01T00:00:00.000Z',
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ gt: '2021-01-01T00:00:00.000Z' });
      });
    });
  });

  describe('AND the gte property', () => {
    describe('WHEN the gte property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          gte: undefined,
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ gte: undefined });
      });
    });

    describe('WHEN the gte property is null', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          gte: null,
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ gte: undefined });
      });
    });

    describe('WHEN the gte property is set', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          gte: '2021-01-01T00:00:00.000Z',
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ gte: '2021-01-01T00:00:00.000Z' });
      });
    });
  });

  describe('AND the not property', () => {
    describe('WHEN the not property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          not: undefined,
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ not: undefined });
      });
    });

    describe('WHEN the not property is null', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          not: null,
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ not: null });
      });
    });

    describe('WHEN the not property is set', () => {
      beforeEach(() => {
        graphQLFilterByDate = {
          not: {
            equals: '2021-01-01T00:00:00.000Z',
          },
        };
      });

      test('THEN it should return the prisma date time filter', () => {
        const response = mapGraphQLFilterByDateToPrismaDateTimeNullableFilter(graphQLFilterByDate);
        expect(response).toEqual({ not: { equals: '2021-01-01T00:00:00.000Z' } });
      });
    });
  });
});
