import { FilterByIntNested } from '@jest-games-organization/backend-package-graphql-types';
import { mapGraphQLFilterByIntNestedToPrismaNestedIntFilter } from '../../helpers/mapGraphQLFilterByIntNestedToPrismaNestedIntFilter';

describe('GIVEN the mapGraphQLFilterByIntNestedToPrismaNestedIntFilter method', () => {
  let graphQLFilterByIntNested: FilterByIntNested;

  describe('AND the equals property', () => {
    describe('WHEN the equals property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          equals: undefined,
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ equals: undefined });
      });
    });

    describe('WHEN the equals property is null', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          equals: null,
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ equals: undefined });
      });
    });

    describe('WHEN the equals property is set', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          equals: 1.0,
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ equals: 1.0 });
      });
    });
  });

  describe('AND the in property', () => {
    describe('WHEN the in property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          in: undefined,
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ in: undefined });
      });
    });

    describe('WHEN the in property is null', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          in: null,
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ in: undefined });
      });
    });

    describe('WHEN the in property is set', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          in: [1.0],
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ in: [1.0] });
      });
    });
  });

  describe('AND the notIn property', () => {
    describe('WHEN the notIn property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          notIn: undefined,
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ notIn: undefined });
      });
    });

    describe('WHEN the notIn property is null', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          notIn: null,
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ notIn: undefined });
      });
    });

    describe('WHEN the notIn property is set', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          notIn: [1.0],
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ notIn: [1.0] });
      });
    });
  });

  describe('AND the lt property', () => {
    describe('WHEN the lt property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          lt: undefined,
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ lt: undefined });
      });
    });

    describe('WHEN the lt property is null', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          lt: null,
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ lt: undefined });
      });
    });

    describe('WHEN the lt property is set', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          lt: 1.0,
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ lt: 1.0 });
      });
    });
  });

  describe('AND the lte property', () => {
    describe('WHEN the lte property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          lte: undefined,
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ lte: undefined });
      });
    });

    describe('WHEN the lte property is null', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          lte: null,
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ lte: undefined });
      });
    });

    describe('WHEN the lte property is set', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          lte: 1.0,
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ lte: 1.0 });
      });
    });
  });

  describe('AND the gt property', () => {
    describe('WHEN the gt property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          gt: undefined,
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ gt: undefined });
      });
    });

    describe('WHEN the gt property is null', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          gt: null,
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ gt: undefined });
      });
    });

    describe('WHEN the gt property is set', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          gt: 1.0,
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ gt: 1.0 });
      });
    });
  });

  describe('AND the gte property', () => {
    describe('WHEN the gte property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          gte: undefined,
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ gte: undefined });
      });
    });

    describe('WHEN the gte property is null', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          gte: null,
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ gte: undefined });
      });
    });

    describe('WHEN the gte property is set', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          gte: 1.0,
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ gte: 1.0 });
      });
    });
  });

  describe('AND the not property', () => {
    describe('WHEN the not property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          not: undefined,
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ not: undefined });
      });
    });

    describe('WHEN the not property is null', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          not: null,
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ not: undefined });
      });
    });

    describe('WHEN the not property is set', () => {
      beforeEach(() => {
        graphQLFilterByIntNested = {
          not: {
            equals: 1.0,
          },
        };
      });

      test('THEN it should return the prisma nested int filter', () => {
        const response = mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(graphQLFilterByIntNested);
        expect(response).toEqual({ not: { equals: 1.0 } });
      });
    });
  });
});
