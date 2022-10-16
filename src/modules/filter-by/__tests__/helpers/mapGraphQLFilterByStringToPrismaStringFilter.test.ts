import { FilterByMode, FilterByString } from '@jest-games-organization/backend-package-graphql-types';
import { mapGraphQLFilterByStringToPrismaStringFilter } from '../../helpers/mapGraphQLFilterByStringToPrismaStringFilter';

describe('GIVEN the mapGraphQLFilterByStringToPrismaStringFilter method', () => {
  let graphQLFilterByString: FilterByString;

  describe('AND the equals property', () => {
    describe('WHEN the equals property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          equals: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ equals: undefined });
      });
    });

    describe('WHEN the equals property is null', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          equals: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ equals: undefined });
      });
    });

    describe('WHEN the equals property is set', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          equals: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ equals: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the in property', () => {
    describe('WHEN the in property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          in: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ in: undefined });
      });
    });

    describe('WHEN the in property is null', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          in: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ in: undefined });
      });
    });

    describe('WHEN the in property is set', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          in: ['a30fabd0-6758-4603-b3a6-2081020de35e'],
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ in: ['a30fabd0-6758-4603-b3a6-2081020de35e'] });
      });
    });
  });

  describe('AND the notIn property', () => {
    describe('WHEN the notIn property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          notIn: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ notIn: undefined });
      });
    });

    describe('WHEN the notIn property is null', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          notIn: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ notIn: undefined });
      });
    });

    describe('WHEN the notIn property is set', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          notIn: ['a30fabd0-6758-4603-b3a6-2081020de35e'],
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ notIn: ['a30fabd0-6758-4603-b3a6-2081020de35e'] });
      });
    });
  });

  describe('AND the lt property', () => {
    describe('WHEN the lt property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          lt: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ lt: undefined });
      });
    });

    describe('WHEN the lt property is null', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          lt: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ lt: undefined });
      });
    });

    describe('WHEN the lt property is set', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          lt: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ lt: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the lte property', () => {
    describe('WHEN the lte property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          lte: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ lte: undefined });
      });
    });

    describe('WHEN the lte property is null', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          lte: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ lte: undefined });
      });
    });

    describe('WHEN the lte property is set', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          lte: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ lte: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the gt property', () => {
    describe('WHEN the gt property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          gt: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ gt: undefined });
      });
    });

    describe('WHEN the gt property is null', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          gt: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ gt: undefined });
      });
    });

    describe('WHEN the gt property is set', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          gt: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ gt: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the gte property', () => {
    describe('WHEN the gte property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          gte: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ gte: undefined });
      });
    });

    describe('WHEN the gte property is null', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          gte: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ gte: undefined });
      });
    });

    describe('WHEN the gte property is set', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          gte: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ gte: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the not property', () => {
    describe('WHEN the not property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          not: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ not: undefined });
      });
    });

    describe('WHEN the not property is null', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          not: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ not: undefined });
      });
    });

    describe('WHEN the not property is set', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          not: {
            equals: 'a30fabd0-6758-4603-b3a6-2081020de35e',
          },
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ not: { equals: 'a30fabd0-6758-4603-b3a6-2081020de35e' } });
      });
    });
  });

  describe('AND the contains property', () => {
    describe('WHEN the contains property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          contains: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ contains: undefined });
      });
    });

    describe('WHEN the contains property is null', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          contains: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ contains: undefined });
      });
    });

    describe('WHEN the contains property is set', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          contains: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ contains: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the startsWith property', () => {
    describe('WHEN the startsWith property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          startsWith: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ startsWith: undefined });
      });
    });

    describe('WHEN the startsWith property is null', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          startsWith: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ startsWith: undefined });
      });
    });

    describe('WHEN the startsWith property is set', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          startsWith: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ startsWith: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the endsWith property', () => {
    describe('WHEN the endsWith property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          endsWith: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ endsWith: undefined });
      });
    });

    describe('WHEN the endsWith property is null', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          endsWith: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ endsWith: undefined });
      });
    });

    describe('WHEN the endsWith property is set', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          endsWith: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ endsWith: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the mode property', () => {
    describe('WHEN the mode property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          mode: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ mode: undefined });
      });
    });

    describe('WHEN the mode property is null', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          mode: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ mode: undefined });
      });
    });

    describe('WHEN the mode property is set to default', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          mode: FilterByMode.Default,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ mode: 'default' });
      });
    });

    describe('WHEN the mode property is set to insensitive', () => {
      beforeEach(() => {
        graphQLFilterByString = {
          mode: FilterByMode.Insensitive,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByStringToPrismaStringFilter(graphQLFilterByString);
        expect(response).toEqual({ mode: 'insensitive' });
      });
    });
  });
});
