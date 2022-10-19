import { FilterByInt } from '@jest-games-organization/backend-package-graphql-types';
import { mapGraphQLFilterByIntToPrismaIntNullableFilter } from '../../helpers/mapGraphQLFilterByIntToPrismaIntNullableFilter';

describe('GIVEN the mapGraphQLFilterByIntToPrismaIntNullableFilter method', () => {
  let graphQLFilterByInt: FilterByInt;

  describe('AND the equals property', () => {
    describe('WHEN the equals property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          equals: undefined,
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ equals: undefined });
      });
    });

    describe('WHEN the equals property is null', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          equals: null,
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ equals: null });
      });
    });

    describe('WHEN the equals property is set', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          equals: 1.0,
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ equals: 1.0 });
      });
    });
  });

  describe('AND the in property', () => {
    describe('WHEN the in property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          in: undefined,
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ in: undefined });
      });
    });

    describe('WHEN the in property is null', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          in: null,
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ in: null });
      });
    });

    describe('WHEN the in property is set', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          in: [1.0],
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ in: [1.0] });
      });
    });
  });

  describe('AND the notIn property', () => {
    describe('WHEN the notIn property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          notIn: undefined,
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ notIn: undefined });
      });
    });

    describe('WHEN the notIn property is null', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          notIn: null,
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ notIn: null });
      });
    });

    describe('WHEN the notIn property is set', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          notIn: [1.0],
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ notIn: [1.0] });
      });
    });
  });

  describe('AND the lt property', () => {
    describe('WHEN the lt property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          lt: undefined,
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ lt: undefined });
      });
    });

    describe('WHEN the lt property is null', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          lt: null,
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ lt: undefined });
      });
    });

    describe('WHEN the lt property is set', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          lt: 1.0,
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ lt: 1.0 });
      });
    });
  });

  describe('AND the lte property', () => {
    describe('WHEN the lte property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          lte: undefined,
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ lte: undefined });
      });
    });

    describe('WHEN the lte property is null', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          lte: null,
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ lte: undefined });
      });
    });

    describe('WHEN the lte property is set', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          lte: 1.0,
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ lte: 1.0 });
      });
    });
  });

  describe('AND the gt property', () => {
    describe('WHEN the gt property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          gt: undefined,
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ gt: undefined });
      });
    });

    describe('WHEN the gt property is null', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          gt: null,
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ gt: undefined });
      });
    });

    describe('WHEN the gt property is set', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          gt: 1.0,
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ gt: 1.0 });
      });
    });
  });

  describe('AND the gte property', () => {
    describe('WHEN the gte property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          gte: undefined,
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ gte: undefined });
      });
    });

    describe('WHEN the gte property is null', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          gte: null,
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ gte: undefined });
      });
    });

    describe('WHEN the gte property is set', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          gte: 1.0,
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ gte: 1.0 });
      });
    });
  });

  describe('AND the not property', () => {
    describe('WHEN the not property is undefined', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          not: undefined,
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ not: undefined });
      });
    });

    describe('WHEN the not property is null', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          not: null,
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ not: null });
      });
    });

    describe('WHEN the not property is set', () => {
      beforeEach(() => {
        graphQLFilterByInt = {
          not: {
            equals: 1.0,
          },
        };
      });

      test('THEN it should return the prisma int filter', () => {
        const response = mapGraphQLFilterByIntToPrismaIntNullableFilter(graphQLFilterByInt);
        expect(response).toEqual({ not: { equals: 1.0 } });
      });
    });
  });
});
