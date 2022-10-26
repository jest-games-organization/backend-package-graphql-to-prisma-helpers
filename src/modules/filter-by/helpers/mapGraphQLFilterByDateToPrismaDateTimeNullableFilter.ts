import { FilterByDate } from '@jest-games-organization/backend-package-graphql-types';
import { DateTimeNullableFilter } from '@jest-games-organization/backend-package-prisma-types';
import { mapGraphQLFilterByDateNestedToPrismaNestedDateTimeNullableFilter } from './mapGraphQLFilterByDateNestedToPrismaNestedDateTimeNullableFilter';

/**
 * Map the GraphQL filter by date to the Prisma date time nullable filter.
 * @param filter The GraphQL filter by date.
 * @returns The Prisma date time nullable filter.
 */
export const mapGraphQLFilterByDateToPrismaDateTimeNullableFilter = (
  filter: FilterByDate | null | undefined,
): DateTimeNullableFilter | undefined => {
  // If the filter by date is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma date time nullable filter.
  return {
    equals: filter.equals,
    in: filter.in ? filter.in.filter((o): o is string => !!o) : filter.in,
    notIn: filter.notIn ? filter.notIn.filter((o): o is string => !!o) : filter.notIn,
    lt: filter.lt ?? undefined,
    lte: filter.lte ?? undefined,
    gt: filter.gt ?? undefined,
    gte: filter.gte ?? undefined,
    not: filter.not ? mapGraphQLFilterByDateNestedToPrismaNestedDateTimeNullableFilter(filter.not) : filter.not,
  };
};
