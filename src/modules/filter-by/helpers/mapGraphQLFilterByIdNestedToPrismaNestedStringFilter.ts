import { FilterByIdNested } from '@jest-games-organization/backend-package-graphql-types';
import { NestedStringFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Map the GraphQL filter by id nested to the Prisma string filter.
 * @param filter The GraphQL filter by id nested.
 * @returns The Prisma nested string filter.
 */
export const mapGraphQLFilterByIdNestedToPrismaNestedStringFilter = (
  filter: FilterByIdNested | null | undefined,
): NestedStringFilter | undefined => {
  // If the filter by id nested is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma nested string filter.
  return {
    contains: filter.contains ?? undefined,
    endsWith: filter.endsWith ?? undefined,
    equals: filter.equals ?? undefined,
    gt: filter.gt ?? undefined,
    gte: filter.gte ?? undefined,
    in: filter.in?.filter((o): o is string => !!o),
    lt: filter.lt ?? undefined,
    lte: filter.lte ?? undefined,
    not: mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(filter.not),
    notIn: filter.notIn?.filter((o): o is string => !!o),
    startsWith: filter.startsWith ?? undefined,
  };
};
