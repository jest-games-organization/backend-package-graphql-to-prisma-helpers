import { FilterByDateNested } from '@jest-games-organization/backend-package-graphql-types';
import { mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter } from '../../helpers/mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter';

describe('GIVEN the mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter', () => {
  let graphQLFilterByDateNested: FilterByDateNested;

  describe('AND the equals property', () => {
    describe('WHEN the equals property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          equals: undefined,
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ equals: undefined });
      });
    });

    describe('WHEN the equals property is null', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          equals: null,
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ equals: undefined });
      });
    });

    describe('WHEN the equals property is set', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          equals: '2021-01-01T00:00:00.000Z',
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ equals: '2021-01-01T00:00:00.000Z' });
      });
    });
  });

  describe('AND the in property', () => {
    describe('WHEN the in property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          in: undefined,
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ in: undefined });
      });
    });

    describe('WHEN the in property is null', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          in: null,
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ in: undefined });
      });
    });

    describe('WHEN the in property is set', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          in: ['2021-01-01T00:00:00.000Z'],
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ in: ['2021-01-01T00:00:00.000Z'] });
      });
    });
  });

  describe('AND the notIn property', () => {
    describe('WHEN the notIn property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          notIn: undefined,
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ notIn: undefined });
      });
    });

    describe('WHEN the notIn property is null', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          notIn: null,
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ notIn: undefined });
      });
    });

    describe('WHEN the notIn property is set', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          notIn: ['2021-01-01T00:00:00.000Z'],
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ notIn: ['2021-01-01T00:00:00.000Z'] });
      });
    });
  });

  describe('AND the lt property', () => {
    describe('WHEN the lt property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          lt: undefined,
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ lt: undefined });
      });
    });

    describe('WHEN the lt property is null', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          lt: null,
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ lt: undefined });
      });
    });

    describe('WHEN the lt property is set', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          lt: '2021-01-01T00:00:00.000Z',
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ lt: '2021-01-01T00:00:00.000Z' });
      });
    });
  });

  describe('AND the lte property', () => {
    describe('WHEN the lte property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          lte: undefined,
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ lte: undefined });
      });
    });

    describe('WHEN the lte property is null', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          lte: null,
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ lte: undefined });
      });
    });

    describe('WHEN the lte property is set', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          lte: '2021-01-01T00:00:00.000Z',
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ lte: '2021-01-01T00:00:00.000Z' });
      });
    });
  });

  describe('AND the gt property', () => {
    describe('WHEN the gt property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          gt: undefined,
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ gt: undefined });
      });
    });

    describe('WHEN the gt property is null', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          gt: null,
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ gt: undefined });
      });
    });

    describe('WHEN the gt property is set', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          gt: '2021-01-01T00:00:00.000Z',
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ gt: '2021-01-01T00:00:00.000Z' });
      });
    });
  });

  describe('AND the gte property', () => {
    describe('WHEN the gte property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          gte: undefined,
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ gte: undefined });
      });
    });

    describe('WHEN the gte property is null', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          gte: null,
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ gte: undefined });
      });
    });

    describe('WHEN the gte property is set', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          gte: '2021-01-01T00:00:00.000Z',
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ gte: '2021-01-01T00:00:00.000Z' });
      });
    });
  });

  describe('AND the not property', () => {
    describe('WHEN the not property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          not: undefined,
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ not: undefined });
      });
    });

    describe('WHEN the not property is null', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          not: null,
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ not: undefined });
      });
    });

    describe('WHEN the not property is set', () => {
      beforeEach(() => {
        graphQLFilterByDateNested = {
          not: {
            equals: '2021-01-01T00:00:00.000Z',
          },
        };
      });

      test('THEN it should return the prisma nested date time filter', () => {
        const response = mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(graphQLFilterByDateNested);
        expect(response).toEqual({ not: { equals: '2021-01-01T00:00:00.000Z' } });
      });
    });
  });
});
