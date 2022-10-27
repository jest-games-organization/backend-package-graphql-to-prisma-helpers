import { NestedIntFilter as GraphQLNestedIntFilter } from '@jest-games-organization/backend-package-graphql-types';
import { graphQLNestedIntFilterToPrismaNestedIntFilter } from '../../helpers/graphQLNestedIntFilterToPrismaNestedIntFilter';

describe('GIVEN the method', () => {
  let filter: GraphQLNestedIntFilter | null | undefined;

  describe('WHEN the filter is null', () => {
    beforeEach(() => {
      filter = null;
    });

    test('THEN it should return undefined', () => {
      const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the filter is undefined', () => {
    beforeEach(() => {
      filter = undefined;
    });

    test('THEN it should return undefined', () => {
      const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the filter is defined', () => {
    describe('AND the equals property', () => {
      describe('WHEN the equals property is undefined', () => {
        beforeEach(() => {
          filter = {
            equals: undefined,
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ equals: undefined });
        });
      });

      describe('WHEN the equals property is null', () => {
        beforeEach(() => {
          filter = {
            equals: null,
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ equals: undefined });
        });
      });

      describe('WHEN the equals property is set', () => {
        beforeEach(() => {
          filter = {
            equals: 1.0,
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ equals: 1.0 });
        });
      });
    });

    describe('AND the in property', () => {
      describe('WHEN the in property is undefined', () => {
        beforeEach(() => {
          filter = {
            in: undefined,
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ in: undefined });
        });
      });

      describe('WHEN the in property is null', () => {
        beforeEach(() => {
          filter = {
            in: null,
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ in: undefined });
        });
      });

      describe('WHEN the in property is set', () => {
        beforeEach(() => {
          filter = {
            in: [1.0],
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ in: [1.0] });
        });
      });
    });

    describe('AND the notIn property', () => {
      describe('WHEN the notIn property is undefined', () => {
        beforeEach(() => {
          filter = {
            notIn: undefined,
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ notIn: undefined });
        });
      });

      describe('WHEN the notIn property is null', () => {
        beforeEach(() => {
          filter = {
            notIn: null,
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ notIn: undefined });
        });
      });

      describe('WHEN the notIn property is set', () => {
        beforeEach(() => {
          filter = {
            notIn: [1.0],
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ notIn: [1.0] });
        });
      });
    });

    describe('AND the lt property', () => {
      describe('WHEN the lt property is undefined', () => {
        beforeEach(() => {
          filter = {
            lt: undefined,
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ lt: undefined });
        });
      });

      describe('WHEN the lt property is null', () => {
        beforeEach(() => {
          filter = {
            lt: null,
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ lt: undefined });
        });
      });

      describe('WHEN the lt property is set', () => {
        beforeEach(() => {
          filter = {
            lt: 1.0,
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ lt: 1.0 });
        });
      });
    });

    describe('AND the lte property', () => {
      describe('WHEN the lte property is undefined', () => {
        beforeEach(() => {
          filter = {
            lte: undefined,
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ lte: undefined });
        });
      });

      describe('WHEN the lte property is null', () => {
        beforeEach(() => {
          filter = {
            lte: null,
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ lte: undefined });
        });
      });

      describe('WHEN the lte property is set', () => {
        beforeEach(() => {
          filter = {
            lte: 1.0,
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ lte: 1.0 });
        });
      });
    });

    describe('AND the gt property', () => {
      describe('WHEN the gt property is undefined', () => {
        beforeEach(() => {
          filter = {
            gt: undefined,
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ gt: undefined });
        });
      });

      describe('WHEN the gt property is null', () => {
        beforeEach(() => {
          filter = {
            gt: null,
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ gt: undefined });
        });
      });

      describe('WHEN the gt property is set', () => {
        beforeEach(() => {
          filter = {
            gt: 1.0,
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ gt: 1.0 });
        });
      });
    });

    describe('AND the gte property', () => {
      describe('WHEN the gte property is undefined', () => {
        beforeEach(() => {
          filter = {
            gte: undefined,
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ gte: undefined });
        });
      });

      describe('WHEN the gte property is null', () => {
        beforeEach(() => {
          filter = {
            gte: null,
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ gte: undefined });
        });
      });

      describe('WHEN the gte property is set', () => {
        beforeEach(() => {
          filter = {
            gte: 1.0,
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ gte: 1.0 });
        });
      });
    });

    describe('AND the not property', () => {
      describe('WHEN the not property is undefined', () => {
        beforeEach(() => {
          filter = {
            not: undefined,
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ not: undefined });
        });
      });

      describe('WHEN the not property is null', () => {
        beforeEach(() => {
          filter = {
            not: null,
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ not: undefined });
        });
      });

      describe('WHEN the not property is set', () => {
        beforeEach(() => {
          filter = {
            not: {
              equals: 1.0,
            },
          };
        });

        test('THEN it should return the prisma nested int filter', () => {
          const response = graphQLNestedIntFilterToPrismaNestedIntFilter(filter);
          expect(response).toEqual({ not: { equals: 1.0 } });
        });
      });
    });
  });
});
