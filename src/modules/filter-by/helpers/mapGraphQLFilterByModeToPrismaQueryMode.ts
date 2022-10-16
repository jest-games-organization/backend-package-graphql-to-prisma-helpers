import { FilterByMode } from '@jest-games-organization/backend-package-graphql-types';
import { QueryMode } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Map the GraphQL filter by mode to a Prisma query mode.
 * @param f The GraphQL filter by mode.
 * @returns The Prisma query mode.
 */
export const mapGraphQLFilterByModeToPrismaQueryMode = (f: FilterByMode): QueryMode => {
  return f === FilterByMode.Default ? 'default' : 'insensitive';
};
