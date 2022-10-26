import { FilterByDateNested } from '@jest-games-organization/backend-package-graphql-types';
import { NestedDateTimeFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Map the GraphQL filter by date to a Prisma date time filter.
 * @param filter The GraphQL filter by date.
 * @returns The Prisma nested date time filter.
 */
export const mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter = (
  filter: FilterByDateNested | null | undefined,
): NestedDateTimeFilter | undefined => {
  // If the filter by date nested is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma nested date time filter.
  return {
    equals: filter.equals ?? undefined,
    in: filter.in?.filter((o): o is string => !!o),
    notIn: filter.notIn?.filter((o): o is string => !!o),
    lt: filter.lt ?? undefined,
    lte: filter.lte ?? undefined,
    gt: filter.gt ?? undefined,
    gte: filter.gte ?? undefined,
    not: mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(filter.not),
  };
};
