import { FilterByStringNested } from '@jest-games-organization/backend-package-graphql-types';
import { mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter } from '../../helpers/mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter';

describe('GIVEN the mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter method', () => {
  let graphQLFilterByStringNested: FilterByStringNested;

  describe('AND the equals property', () => {
    describe('WHEN the equals property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          equals: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ equals: undefined });
      });
    });

    describe('WHEN the equals property is null', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          equals: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ equals: null });
      });
    });

    describe('WHEN the equals property is set', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          equals: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ equals: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the in property', () => {
    describe('WHEN the in property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          in: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ in: undefined });
      });
    });

    describe('WHEN the in property is null', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          in: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ in: null });
      });
    });

    describe('WHEN the in property is set', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          in: ['a30fabd0-6758-4603-b3a6-2081020de35e'],
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ in: ['a30fabd0-6758-4603-b3a6-2081020de35e'] });
      });
    });
  });

  describe('AND the notIn property', () => {
    describe('WHEN the notIn property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          notIn: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ notIn: undefined });
      });
    });

    describe('WHEN the notIn property is null', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          notIn: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ notIn: null });
      });
    });

    describe('WHEN the notIn property is set', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          notIn: ['a30fabd0-6758-4603-b3a6-2081020de35e'],
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ notIn: ['a30fabd0-6758-4603-b3a6-2081020de35e'] });
      });
    });
  });

  describe('AND the lt property', () => {
    describe('WHEN the lt property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          lt: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ lt: undefined });
      });
    });

    describe('WHEN the lt property is null', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          lt: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ lt: undefined });
      });
    });

    describe('WHEN the lt property is set', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          lt: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ lt: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the lte property', () => {
    describe('WHEN the lte property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          lte: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ lte: undefined });
      });
    });

    describe('WHEN the lte property is null', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          lte: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ lte: undefined });
      });
    });

    describe('WHEN the lte property is set', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          lte: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ lte: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the gt property', () => {
    describe('WHEN the gt property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          gt: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ gt: undefined });
      });
    });

    describe('WHEN the gt property is null', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          gt: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ gt: undefined });
      });
    });

    describe('WHEN the gt property is set', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          gt: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ gt: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the gte property', () => {
    describe('WHEN the gte property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          gte: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ gte: undefined });
      });
    });

    describe('WHEN the gte property is null', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          gte: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ gte: undefined });
      });
    });

    describe('WHEN the gte property is set', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          gte: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ gte: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the not property', () => {
    describe('WHEN the not property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          not: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ not: undefined });
      });
    });

    describe('WHEN the not property is null', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          not: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ not: null });
      });
    });

    describe('WHEN the not property is set', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          not: {
            equals: 'a30fabd0-6758-4603-b3a6-2081020de35e',
          },
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ not: { equals: 'a30fabd0-6758-4603-b3a6-2081020de35e' } });
      });
    });
  });

  describe('AND the contains property', () => {
    describe('WHEN the contains property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          contains: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ contains: undefined });
      });
    });

    describe('WHEN the contains property is null', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          contains: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ contains: undefined });
      });
    });

    describe('WHEN the contains property is set', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          contains: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ contains: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the startsWith property', () => {
    describe('WHEN the startsWith property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          startsWith: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ startsWith: undefined });
      });
    });

    describe('WHEN the startsWith property is null', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          startsWith: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ startsWith: undefined });
      });
    });

    describe('WHEN the startsWith property is set', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          startsWith: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ startsWith: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });

  describe('AND the endsWith property', () => {
    describe('WHEN the endsWith property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          endsWith: undefined,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ endsWith: undefined });
      });
    });

    describe('WHEN the endsWith property is null', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          endsWith: null,
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ endsWith: undefined });
      });
    });

    describe('WHEN the endsWith property is set', () => {
      beforeEach(() => {
        graphQLFilterByStringNested = {
          endsWith: 'a30fabd0-6758-4603-b3a6-2081020de35e',
        };
      });

      test('THEN it should return the prisma nested string filter', () => {
        const response = mapGraphQLFilterByStringNestedToPrismaNestedStringNullableFilter(graphQLFilterByStringNested);
        expect(response).toEqual({ endsWith: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
      });
    });
  });
});
