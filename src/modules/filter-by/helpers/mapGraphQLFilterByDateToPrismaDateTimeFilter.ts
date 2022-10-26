import { FilterByDate } from '@jest-games-organization/backend-package-graphql-types';
import { DateTimeFilter } from '@jest-games-organization/backend-package-prisma-types';
import { mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter } from './mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter';

/**
 * Map the GraphQL filter by date to the Prisma date time filter.
 * @param filter The GraphQL filter by date.
 * @returns The Prisma date time filter.
 */
export const mapGraphQLFilterByDateToPrismaDateTimeFilter = (
  filter: FilterByDate | null | undefined,
): DateTimeFilter | undefined => {
  // If the filter by date is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma date time filter.
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
