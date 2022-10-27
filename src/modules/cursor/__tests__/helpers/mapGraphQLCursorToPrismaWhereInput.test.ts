import { SortOrder as GraphQLSortOrder } from '@jest-games-organization/backend-package-graphql-types';
import { encodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { mapGraphQLCursorToPrismaWhereInput } from '../../helpers/mapGraphQLCursorToPrismaWhereInput';

describe('GIVEN the mapGraphQLCursorToPrismaWhereInput method', () => {
  let cursor: string | null | undefined;

  describe('WHEN the cursor is null', () => {
    beforeEach(() => {
      cursor = null;
    });

    test('THEN it should return undefined', () => {
      const response = mapGraphQLCursorToPrismaWhereInput(cursor);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the cursor is undefined', () => {
    beforeEach(() => {
      cursor = undefined;
    });

    test('THEN it should return undefined', () => {
      const response = mapGraphQLCursorToPrismaWhereInput(cursor);
      expect(response).toBeUndefined();
    });
  });

  describe('WHEN the cursor is not null or undefined', () => {
    beforeEach(() => {
      cursor = encodeObject({
        args: {
          orderBy: [
            { isAdmin: GraphQLSortOrder.Descending },
            { updatedAt: GraphQLSortOrder.Ascending },
            { createdAt: GraphQLSortOrder.Descending },
            { id: GraphQLSortOrder.Ascending },
          ],
        },
        data: { id: null, createdAt: 'mockCreatedAt', updatedAt: 'mockUpdatedAt', isAdmin: null },
      });
    });

    test('THEN it should return the prisma where input', () => {
      const response = mapGraphQLCursorToPrismaWhereInput(cursor);
      expect(response).toEqual({
        OR: [
          { isAdmin: { not: null } },
          {
            AND: [
              { isAdmin: { equals: null } },
              {
                OR: [
                  { updatedAt: { gt: 'mockUpdatedAt' } },
                  {
                    AND: [
                      { updatedAt: { equals: 'mockUpdatedAt' } },
                      {
                        OR: [
                          { createdAt: { lt: 'mockCreatedAt' } },
                          {
                            AND: [
                              { createdAt: { equals: 'mockCreatedAt' } },
                              {
                                OR: [{ id: { not: null } }],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      });
    });
  });
});
