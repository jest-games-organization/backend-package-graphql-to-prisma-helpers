import { OrderByDirection } from '@jest-games-organization/backend-package-graphql-types';
import { encodeObject } from '@jest-games-organization/backend-package-object-helpers';
import { mapGraphQLCursorToPrismaWhereInput } from '../../helpers/mapGraphQLCursorToPrismaWhereInput';

describe('GIVEN the mapGraphQLCursorToPrismaWhereInput method', () => {
  let cursor: string;

  beforeEach(() => {
    cursor = encodeObject({
      args: {
        orderBy: [
          { isAdmin: OrderByDirection.Descending },
          { updatedAt: OrderByDirection.Ascending },
          { createdAt: OrderByDirection.Descending },
          { id: OrderByDirection.Ascending },
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
