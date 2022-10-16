import { FilterById, FilterByMode } from '@jest-games-organization/backend-package-graphql-types';
import { mapGraphQLFilterByIdToPrismaStringFilter } from '../../helpers/mapGraphQLFilterByIdToPrismaStringFilter';

describe('GIVEN the mapGraphQLFilterByIdToPrismaStringFilter method', () => {
  let graphQLFilterById: FilterById;

  describe('AND the equals property', () => {
    describe('WHEN the equals property is undefined', () => {
      beforeEach(() => {
        graphQLFilterById = {
          equals: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ equals: undefined });
      });
    });

    describe('WHEN the equals property is null', () => {
      beforeEach(() => {
        graphQLFilterById = {
          equals: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ equals: undefined });
      });
    });

    describe('WHEN the equals property is set', () => {
      beforeEach(() => {
        graphQLFilterById = {
          equals: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ equals: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the in property', () => {
    describe('WHEN the in property is undefined', () => {
      beforeEach(() => {
        graphQLFilterById = {
          in: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ in: undefined });
      });
    });

    describe('WHEN the in property is null', () => {
      beforeEach(() => {
        graphQLFilterById = {
          in: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ in: undefined });
      });
    });

    describe('WHEN the in property is set', () => {
      beforeEach(() => {
        graphQLFilterById = {
          in: ['a30fabd0-6758-4603-b3a6-2081020de35e'],
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ in: ['a30fabd0-6758-4603-b3a6-2081020de35e'] });
      });
    });
  });

  describe('AND the notIn property', () => {
    describe('WHEN the notIn property is undefined', () => {
      beforeEach(() => {
        graphQLFilterById = {
          notIn: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ notIn: undefined });
      });
    });

    describe('WHEN the notIn property is null', () => {
      beforeEach(() => {
        graphQLFilterById = {
          notIn: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ notIn: undefined });
      });
    });

    describe('WHEN the notIn property is set', () => {
      beforeEach(() => {
        graphQLFilterById = {
          notIn: ['a30fabd0-6758-4603-b3a6-2081020de35e'],
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ notIn: ['a30fabd0-6758-4603-b3a6-2081020de35e'] });
      });
    });
  });

  describe('AND the lt property', () => {
    describe('WHEN the lt property is undefined', () => {
      beforeEach(() => {
        graphQLFilterById = {
          lt: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ lt: undefined });
      });
    });

    describe('WHEN the lt property is null', () => {
      beforeEach(() => {
        graphQLFilterById = {
          lt: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ lt: undefined });
      });
    });

    describe('WHEN the lt property is set', () => {
      beforeEach(() => {
        graphQLFilterById = {
          lt: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ lt: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the lte property', () => {
    describe('WHEN the lte property is undefined', () => {
      beforeEach(() => {
        graphQLFilterById = {
          lte: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ lte: undefined });
      });
    });

    describe('WHEN the lte property is null', () => {
      beforeEach(() => {
        graphQLFilterById = {
          lte: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ lte: undefined });
      });
    });

    describe('WHEN the lte property is set', () => {
      beforeEach(() => {
        graphQLFilterById = {
          lte: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ lte: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the gt property', () => {
    describe('WHEN the gt property is undefined', () => {
      beforeEach(() => {
        graphQLFilterById = {
          gt: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ gt: undefined });
      });
    });

    describe('WHEN the gt property is null', () => {
      beforeEach(() => {
        graphQLFilterById = {
          gt: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ gt: undefined });
      });
    });

    describe('WHEN the gt property is set', () => {
      beforeEach(() => {
        graphQLFilterById = {
          gt: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ gt: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the gte property', () => {
    describe('WHEN the gte property is undefined', () => {
      beforeEach(() => {
        graphQLFilterById = {
          gte: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ gte: undefined });
      });
    });

    describe('WHEN the gte property is null', () => {
      beforeEach(() => {
        graphQLFilterById = {
          gte: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ gte: undefined });
      });
    });

    describe('WHEN the gte property is set', () => {
      beforeEach(() => {
        graphQLFilterById = {
          gte: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ gte: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the not property', () => {
    describe('WHEN the not property is undefined', () => {
      beforeEach(() => {
        graphQLFilterById = {
          not: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ not: undefined });
      });
    });

    describe('WHEN the not property is null', () => {
      beforeEach(() => {
        graphQLFilterById = {
          not: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ not: undefined });
      });
    });

    describe('WHEN the not property is set', () => {
      beforeEach(() => {
        graphQLFilterById = {
          not: {
            equals: 'a30fabd0-6758-4603-b3a6-2081020de35e',
          },
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ not: { equals: 'a30fabd0-6758-4603-b3a6-2081020de35e' } });
      });
    });
  });

  describe('AND the contains property', () => {
    describe('WHEN the contains property is undefined', () => {
      beforeEach(() => {
        graphQLFilterById = {
          contains: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ contains: undefined });
      });
    });

    describe('WHEN the contains property is null', () => {
      beforeEach(() => {
        graphQLFilterById = {
          contains: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ contains: undefined });
      });
    });

    describe('WHEN the contains property is set', () => {
      beforeEach(() => {
        graphQLFilterById = {
          contains: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ contains: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the startsWith property', () => {
    describe('WHEN the startsWith property is undefined', () => {
      beforeEach(() => {
        graphQLFilterById = {
          startsWith: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ startsWith: undefined });
      });
    });

    describe('WHEN the startsWith property is null', () => {
      beforeEach(() => {
        graphQLFilterById = {
          startsWith: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ startsWith: undefined });
      });
    });

    describe('WHEN the startsWith property is set', () => {
      beforeEach(() => {
        graphQLFilterById = {
          startsWith: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ startsWith: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the endsWith property', () => {
    describe('WHEN the endsWith property is undefined', () => {
      beforeEach(() => {
        graphQLFilterById = {
          endsWith: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ endsWith: undefined });
      });
    });

    describe('WHEN the endsWith property is null', () => {
      beforeEach(() => {
        graphQLFilterById = {
          endsWith: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ endsWith: undefined });
      });
    });

    describe('WHEN the endsWith property is set', () => {
      beforeEach(() => {
        graphQLFilterById = {
          endsWith: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ endsWith: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the mode property', () => {
    describe('WHEN the mode property is undefined', () => {
      beforeEach(() => {
        graphQLFilterById = {
          mode: undefined,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ mode: undefined });
      });
    });

    describe('WHEN the mode property is null', () => {
      beforeEach(() => {
        graphQLFilterById = {
          mode: null,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ mode: undefined });
      });
    });

    describe('WHEN the mode property is set to default', () => {
      beforeEach(() => {
        graphQLFilterById = {
          mode: FilterByMode.Default,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ mode: 'default' });
      });
    });

    describe('WHEN the mode property is set to insensitive', () => {
      beforeEach(() => {
        graphQLFilterById = {
          mode: FilterByMode.Insensitive,
        };
      });

      test('THEN it should return the prisma string filter', () => {
        const response = mapGraphQLFilterByIdToPrismaStringFilter(graphQLFilterById);
        expect(response).toEqual({ mode: 'insensitive' });
      });
    });
  });
});
