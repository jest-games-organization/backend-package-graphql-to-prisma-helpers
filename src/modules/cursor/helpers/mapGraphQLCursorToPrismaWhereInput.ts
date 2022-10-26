import { decodeCursor } from '@jest-games-organization/backend-package-graphql-helpers';
import { OrderByDirection } from '@jest-games-organization/backend-package-graphql-types';
import { WhereInput } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Map the GraphQL cursor to a Prisma where input.
 * @param cursor The GraphQL cursor
 * @returns The Prisma where input
 */
export const mapGraphQLCursorToPrismaWhereInput = <Record extends { [key: string]: any }>(
  cursor?: string | null | undefined,
): WhereInput<Record> | undefined => {
  // If the cursor is null or undefined, return undefined.
  if (cursor === null || cursor === undefined) {
    return undefined;
  }

  // Decode the cursor.
  const { args, data } = decodeCursor<Record>(cursor);

  // Initialize Prisma where input.
  let prismaWhereInput: WhereInput<Record> = {};

  // Iterate over the order by arguments (last to first).
  for (let i = args.orderBy.length - 1; i >= 0; i--) {
    // Check if the index is the last index.
    const isLast = i === args.orderBy.length - 1;

    // Get the order by key and direction.
    const [key, direction] = Object.entries(args.orderBy[i])[0];

    // Check if the direction is ascending.
    const isAsc = direction === OrderByDirection.Ascending;

    // Get the data value for the order by key.
    const value = data[key];

    // Check if the value is null.
    const isNull = value === null;

    // Get the first OR block.
    const orBlock1 = isNull ? { [key]: { not: null } } : { [key]: isAsc ? { gt: value } : { lt: value } };

    // Get the second OR block.
    const orBlock2 = isLast ? undefined : { AND: [{ [key]: { equals: value } }, prismaWhereInput] };

    // Create the Prisma where input.
    prismaWhereInput = { OR: [orBlock1, orBlock2].filter((b) => !!b) };
  }

  // Return the Prisma where input.
  return prismaWhereInput;
};
