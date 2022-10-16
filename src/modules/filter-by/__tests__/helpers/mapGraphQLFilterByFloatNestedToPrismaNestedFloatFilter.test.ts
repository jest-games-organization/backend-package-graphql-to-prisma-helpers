import { FilterByFloatNested } from '@jest-games-organization/backend-package-graphql-types';
import { mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter } from '../../helpers/mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter';

describe('GIVEN the mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter method', () => {
  let graphQLFilterByFloatNested: FilterByFloatNested;

  describe('AND the equals property', () => {
    describe('WHEN the equals property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          equals: undefined,
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ equals: undefined });
      });
    });

    describe('WHEN the equals property is null', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          equals: null,
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ equals: undefined });
      });
    });

    describe('WHEN the equals property is set', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          equals: 1.0,
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ equals: 1.0 });
      });
    });
  });

  describe('AND the in property', () => {
    describe('WHEN the in property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          in: undefined,
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ in: undefined });
      });
    });

    describe('WHEN the in property is null', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          in: null,
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ in: undefined });
      });
    });

    describe('WHEN the in property is set', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          in: [1.0],
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ in: [1.0] });
      });
    });
  });

  describe('AND the notIn property', () => {
    describe('WHEN the notIn property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          notIn: undefined,
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ notIn: undefined });
      });
    });

    describe('WHEN the notIn property is null', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          notIn: null,
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ notIn: undefined });
      });
    });

    describe('WHEN the notIn property is set', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          notIn: [1.0],
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ notIn: [1.0] });
      });
    });
  });

  describe('AND the lt property', () => {
    describe('WHEN the lt property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          lt: undefined,
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ lt: undefined });
      });
    });

    describe('WHEN the lt property is null', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          lt: null,
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ lt: undefined });
      });
    });

    describe('WHEN the lt property is set', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          lt: 1.0,
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ lt: 1.0 });
      });
    });
  });

  describe('AND the lte property', () => {
    describe('WHEN the lte property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          lte: undefined,
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ lte: undefined });
      });
    });

    describe('WHEN the lte property is null', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          lte: null,
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ lte: undefined });
      });
    });

    describe('WHEN the lte property is set', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          lte: 1.0,
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ lte: 1.0 });
      });
    });
  });

  describe('AND the gt property', () => {
    describe('WHEN the gt property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          gt: undefined,
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ gt: undefined });
      });
    });

    describe('WHEN the gt property is null', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          gt: null,
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ gt: undefined });
      });
    });

    describe('WHEN the gt property is set', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          gt: 1.0,
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ gt: 1.0 });
      });
    });
  });

  describe('AND the gte property', () => {
    describe('WHEN the gte property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          gte: undefined,
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ gte: undefined });
      });
    });

    describe('WHEN the gte property is null', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          gte: null,
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ gte: undefined });
      });
    });

    describe('WHEN the gte property is set', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          gte: 1.0,
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ gte: 1.0 });
      });
    });
  });

  describe('AND the not property', () => {
    describe('WHEN the not property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          not: undefined,
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ not: undefined });
      });
    });

    describe('WHEN the not property is null', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          not: null,
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ not: undefined });
      });
    });

    describe('WHEN the not property is set', () => {
      beforeEach(() => {
        graphQLFilterByFloatNested = {
          not: {
            equals: 1.0,
          },
        };
      });

      test('THEN it should return the prisma nested float filter', () => {
        const response = mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(graphQLFilterByFloatNested);
        expect(response).toEqual({ not: { equals: 1.0 } });
      });
    });
  });
});
