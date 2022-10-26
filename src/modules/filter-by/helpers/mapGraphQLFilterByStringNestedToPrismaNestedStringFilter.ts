import { FilterByStringNested } from '@jest-games-organization/backend-package-graphql-types';
import { NestedStringFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Map the GraphQL filter by string nested to a Prisma string filter.
 * @param filter The GraphQL filter by string nested.
 * @returns The Prisma nested string filter.
 */
export const mapGraphQLFilterByStringNestedToPrismaNestedStringFilter = (
  filter: FilterByStringNested | null | undefined,
): NestedStringFilter | undefined => {
  // If the filter by string nested is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma nested string filter.
  return {
    equals: filter.equals ?? undefined,
    in: filter.in?.filter((o): o is string => !!o),
    notIn: filter.notIn?.filter((o): o is string => !!o),
    lt: filter.lt ?? undefined,
    lte: filter.lte ?? undefined,
    gt: filter.gt ?? undefined,
    gte: filter.gte ?? undefined,
    contains: filter.contains ?? undefined,
    startsWith: filter.startsWith ?? undefined,
    endsWith: filter.endsWith ?? undefined,
    not: mapGraphQLFilterByStringNestedToPrismaNestedStringFilter(filter.not),
  };
};
