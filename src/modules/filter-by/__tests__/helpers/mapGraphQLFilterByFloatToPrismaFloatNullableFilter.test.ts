import { FilterByFloat } from '@jest-games-organization/backend-package-graphql-types';
import { mapGraphQLFilterByFloatToPrismaFloatNullableFilter } from '../../helpers/mapGraphQLFilterByFloatToPrismaFloatNullableFilter';

describe('GIVEN the mapGraphQLFilterByFloatToPrismaFloatNullableFilter method', () => {
  let graphQLFilterByFloat: FilterByFloat;

  describe('AND the equals property', () => {
    describe('WHEN the equals property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          equals: undefined,
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ equals: undefined });
      });
    });

    describe('WHEN the equals property is null', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          equals: null,
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ equals: null });
      });
    });

    describe('WHEN the equals property is set', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          equals: 1.0,
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ equals: 1.0 });
      });
    });
  });

  describe('AND the in property', () => {
    describe('WHEN the in property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          in: undefined,
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ in: undefined });
      });
    });

    describe('WHEN the in property is null', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          in: null,
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ in: null });
      });
    });

    describe('WHEN the in property is set', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          in: [1.0],
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ in: [1.0] });
      });
    });
  });

  describe('AND the notIn property', () => {
    describe('WHEN the notIn property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          notIn: undefined,
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ notIn: undefined });
      });
    });

    describe('WHEN the notIn property is null', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          notIn: null,
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ notIn: null });
      });
    });

    describe('WHEN the notIn property is set', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          notIn: [1.0],
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ notIn: [1.0] });
      });
    });
  });

  describe('AND the lt property', () => {
    describe('WHEN the lt property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          lt: undefined,
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ lt: undefined });
      });
    });

    describe('WHEN the lt property is null', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          lt: null,
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ lt: undefined });
      });
    });

    describe('WHEN the lt property is set', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          lt: 1.0,
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ lt: 1.0 });
      });
    });
  });

  describe('AND the lte property', () => {
    describe('WHEN the lte property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          lte: undefined,
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ lte: undefined });
      });
    });

    describe('WHEN the lte property is null', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          lte: null,
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ lte: undefined });
      });
    });

    describe('WHEN the lte property is set', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          lte: 1.0,
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ lte: 1.0 });
      });
    });
  });

  describe('AND the gt property', () => {
    describe('WHEN the gt property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          gt: undefined,
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ gt: undefined });
      });
    });

    describe('WHEN the gt property is null', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          gt: null,
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ gt: undefined });
      });
    });

    describe('WHEN the gt property is set', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          gt: 1.0,
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ gt: 1.0 });
      });
    });
  });

  describe('AND the gte property', () => {
    describe('WHEN the gte property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          gte: undefined,
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ gte: undefined });
      });
    });

    describe('WHEN the gte property is null', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          gte: null,
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ gte: undefined });
      });
    });

    describe('WHEN the gte property is set', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          gte: 1.0,
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ gte: 1.0 });
      });
    });
  });

  describe('AND the not property', () => {
    describe('WHEN the not property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          not: undefined,
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ not: undefined });
      });
    });

    describe('WHEN the not property is null', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          not: null,
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ not: null });
      });
    });

    describe('WHEN the not property is set', () => {
      beforeEach(() => {
        graphQLFilterByFloat = {
          not: {
            equals: 1.0,
          },
        };
      });

      test('THEN it should return the prisma float filter', () => {
        const response = mapGraphQLFilterByFloatToPrismaFloatNullableFilter(graphQLFilterByFloat);
        expect(response).toEqual({ not: { equals: 1.0 } });
      });
    });
  });
});
