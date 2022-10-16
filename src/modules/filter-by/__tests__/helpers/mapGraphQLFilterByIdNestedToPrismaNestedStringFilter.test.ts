import { FilterByIdNested } from '@jest-games-organization/backend-package-graphql-types';
import { mapGraphQLFilterByIdNestedToPrismaNestedStringFilter } from '../../helpers/mapGraphQLFilterByIdNestedToPrismaNestedStringFilter';

describe('GIVEN the mapGraphQLFilterByIdNestedToPrismaNestedStringFilter method', () => {
  let graphQLFilterByIdNested: FilterByIdNested;

  describe('AND the equals property', () => {
    describe('WHEN the equals property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          equals: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ equals: undefined });
      });
    });

    describe('WHEN the equals property is null', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          equals: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ equals: undefined });
      });
    });

    describe('WHEN the equals property is set', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          equals: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ equals: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the in property', () => {
    describe('WHEN the in property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          in: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ in: undefined });
      });
    });

    describe('WHEN the in property is null', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          in: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ in: undefined });
      });
    });

    describe('WHEN the in property is set', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          in: ['a30fabd0-6758-4603-b3a6-2081020de35e'],
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ in: ['a30fabd0-6758-4603-b3a6-2081020de35e'] });
      });
    });
  });

  describe('AND the notIn property', () => {
    describe('WHEN the notIn property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          notIn: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ notIn: undefined });
      });
    });

    describe('WHEN the notIn property is null', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          notIn: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ notIn: undefined });
      });
    });

    describe('WHEN the notIn property is set', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          notIn: ['a30fabd0-6758-4603-b3a6-2081020de35e'],
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ notIn: ['a30fabd0-6758-4603-b3a6-2081020de35e'] });
      });
    });
  });

  describe('AND the lt property', () => {
    describe('WHEN the lt property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          lt: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ lt: undefined });
      });
    });

    describe('WHEN the lt property is null', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          lt: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ lt: undefined });
      });
    });

    describe('WHEN the lt property is set', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          lt: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ lt: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the lte property', () => {
    describe('WHEN the lte property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          lte: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ lte: undefined });
      });
    });

    describe('WHEN the lte property is null', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          lte: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ lte: undefined });
      });
    });

    describe('WHEN the lte property is set', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          lte: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ lte: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the gt property', () => {
    describe('WHEN the gt property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          gt: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ gt: undefined });
      });
    });

    describe('WHEN the gt property is null', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          gt: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ gt: undefined });
      });
    });

    describe('WHEN the gt property is set', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          gt: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ gt: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the gte property', () => {
    describe('WHEN the gte property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          gte: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ gte: undefined });
      });
    });

    describe('WHEN the gte property is null', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          gte: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ gte: undefined });
      });
    });

    describe('WHEN the gte property is set', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          gte: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ gte: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the not property', () => {
    describe('WHEN the not property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          not: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ not: undefined });
      });
    });

    describe('WHEN the not property is null', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          not: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ not: undefined });
      });
    });

    describe('WHEN the not property is set', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          not: {
            equals: 'a30fabd0-6758-4603-b3a6-2081020de35e',
          },
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ not: { equals: 'a30fabd0-6758-4603-b3a6-2081020de35e' } });
      });
    });
  });

  describe('AND the contains property', () => {
    describe('WHEN the contains property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          contains: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ contains: undefined });
      });
    });

    describe('WHEN the contains property is null', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          contains: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ contains: undefined });
      });
    });

    describe('WHEN the contains property is set', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          contains: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ contains: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the startsWith property', () => {
    describe('WHEN the startsWith property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          startsWith: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ startsWith: undefined });
      });
    });

    describe('WHEN the startsWith property is null', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          startsWith: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ startsWith: undefined });
      });
    });

    describe('WHEN the startsWith property is set', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          startsWith: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ startsWith: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the endsWith property', () => {
    describe('WHEN the endsWith property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          endsWith: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ endsWith: undefined });
      });
    });

    describe('WHEN the endsWith property is null', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          endsWith: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ endsWith: undefined });
      });
    });

    describe('WHEN the endsWith property is set', () => {
      beforeEach(() => {
        graphQLFilterByIdNested = {
          endsWith: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(graphQLFilterByIdNested);
        expect(response).toEqual({ endsWith: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });
});
