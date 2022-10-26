import { FilterByMode } from '@jest-games-organization/backend-package-graphql-types';
import { QueryMode } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Map the GraphQL filter by mode to a Prisma query mode.
 * @param filter The GraphQL filter by mode.
 * @returns The Prisma query mode.
 */
export const mapGraphQLFilterByModeToPrismaQueryMode = (
  filter: FilterByMode | null | undefined,
): QueryMode | undefined => {
  // If the filter by mode is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma query mode.
  return filter === FilterByMode.Default ? 'default' : 'insensitive';
};
