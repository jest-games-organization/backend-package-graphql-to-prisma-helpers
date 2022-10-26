import { FilterByIdNested } from '@jest-games-organization/backend-package-graphql-types';
import { mapGraphQLFilterByIdNestedToPrismaNestedStringFilter } from '../../helpers/mapGraphQLFilterByIdNestedToPrismaNestedStringFilter';

describe('GIVEN the mapGraphQLFilterByIdNestedToPrismaNestedStringFilter method', () => {
  let filter: FilterByIdNested | null | undefined;

  describe('WHEN the filter by id nested is null', () => {
    beforeEach(() => {
      filter = null;
    });

    test('THEN it should return undefined', () => {
      const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the filter by id nested is undefined', () => {
    beforeEach(() => {
      filter = undefined;
    });

    test('THEN it should return undefined', () => {
      const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the filter by id nested is defined', () => {
    describe('AND the equals property', () => {
      describe('WHEN the equals property is undefined', () => {
        beforeEach(() => {
          filter = {
            equals: undefined,
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ equals: undefined });
        });
      });

      describe('WHEN the equals property is null', () => {
        beforeEach(() => {
          filter = {
            equals: null,
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ equals: undefined });
        });
      });

      describe('WHEN the equals property is set', () => {
        beforeEach(() => {
          filter = {
            equals: 'a30fabd0-6758-4603-b3a6-2081020de35e',
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ equals: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
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

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ in: undefined });
        });
      });

      describe('WHEN the in property is null', () => {
        beforeEach(() => {
          filter = {
            in: null,
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ in: undefined });
        });
      });

      describe('WHEN the in property is set', () => {
        beforeEach(() => {
          filter = {
            in: ['a30fabd0-6758-4603-b3a6-2081020de35e'],
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ in: ['a30fabd0-6758-4603-b3a6-2081020de35e'] });
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

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ notIn: undefined });
        });
      });

      describe('WHEN the notIn property is null', () => {
        beforeEach(() => {
          filter = {
            notIn: null,
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ notIn: undefined });
        });
      });

      describe('WHEN the notIn property is set', () => {
        beforeEach(() => {
          filter = {
            notIn: ['a30fabd0-6758-4603-b3a6-2081020de35e'],
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ notIn: ['a30fabd0-6758-4603-b3a6-2081020de35e'] });
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

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ lt: undefined });
        });
      });

      describe('WHEN the lt property is null', () => {
        beforeEach(() => {
          filter = {
            lt: null,
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ lt: undefined });
        });
      });

      describe('WHEN the lt property is set', () => {
        beforeEach(() => {
          filter = {
            lt: 'a30fabd0-6758-4603-b3a6-2081020de35e',
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ lt: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
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

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ lte: undefined });
        });
      });

      describe('WHEN the lte property is null', () => {
        beforeEach(() => {
          filter = {
            lte: null,
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ lte: undefined });
        });
      });

      describe('WHEN the lte property is set', () => {
        beforeEach(() => {
          filter = {
            lte: 'a30fabd0-6758-4603-b3a6-2081020de35e',
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ lte: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
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

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ gt: undefined });
        });
      });

      describe('WHEN the gt property is null', () => {
        beforeEach(() => {
          filter = {
            gt: null,
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ gt: undefined });
        });
      });

      describe('WHEN the gt property is set', () => {
        beforeEach(() => {
          filter = {
            gt: 'a30fabd0-6758-4603-b3a6-2081020de35e',
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ gt: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
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

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ gte: undefined });
        });
      });

      describe('WHEN the gte property is null', () => {
        beforeEach(() => {
          filter = {
            gte: null,
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ gte: undefined });
        });
      });

      describe('WHEN the gte property is set', () => {
        beforeEach(() => {
          filter = {
            gte: 'a30fabd0-6758-4603-b3a6-2081020de35e',
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ gte: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
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

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ not: undefined });
        });
      });

      describe('WHEN the not property is null', () => {
        beforeEach(() => {
          filter = {
            not: null,
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ not: undefined });
        });
      });

      describe('WHEN the not property is set', () => {
        beforeEach(() => {
          filter = {
            not: {
              equals: 'a30fabd0-6758-4603-b3a6-2081020de35e',
            },
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ not: { equals: 'a30fabd0-6758-4603-b3a6-2081020de35e' } });
        });
      });
    });

    describe('AND the contains property', () => {
      describe('WHEN the contains property is undefined', () => {
        beforeEach(() => {
          filter = {
            contains: undefined,
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ contains: undefined });
        });
      });

      describe('WHEN the contains property is null', () => {
        beforeEach(() => {
          filter = {
            contains: null,
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ contains: undefined });
        });
      });

      describe('WHEN the contains property is set', () => {
        beforeEach(() => {
          filter = {
            contains: 'a30fabd0-6758-4603-b3a6-2081020de35e',
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ contains: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
        });
      });
    });

    describe('AND the startsWith property', () => {
      describe('WHEN the startsWith property is undefined', () => {
        beforeEach(() => {
          filter = {
            startsWith: undefined,
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ startsWith: undefined });
        });
      });

      describe('WHEN the startsWith property is null', () => {
        beforeEach(() => {
          filter = {
            startsWith: null,
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ startsWith: undefined });
        });
      });

      describe('WHEN the startsWith property is set', () => {
        beforeEach(() => {
          filter = {
            startsWith: 'a30fabd0-6758-4603-b3a6-2081020de35e',
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ startsWith: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
        });
      });
    });

    describe('AND the endsWith property', () => {
      describe('WHEN the endsWith property is undefined', () => {
        beforeEach(() => {
          filter = {
            endsWith: undefined,
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ endsWith: undefined });
        });
      });

      describe('WHEN the endsWith property is null', () => {
        beforeEach(() => {
          filter = {
            endsWith: null,
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ endsWith: undefined });
        });
      });

      describe('WHEN the endsWith property is set', () => {
        beforeEach(() => {
          filter = {
            endsWith: 'a30fabd0-6758-4603-b3a6-2081020de35e',
          };
        });

        test('THEN it should return the prisma nested string filter', () => {
          const response = mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter);
          expect(response).toEqual({ endsWith: 'a30fabd0-6758-4603-b3a6-2081020de35e' });
        });
      });
    });
  });
});
