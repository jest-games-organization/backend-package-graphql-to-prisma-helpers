import { FilterByDate } from '@jest-games-organization/backend-package-graphql-types';
import { DateTimeNullableFilter } from '@jest-games-organization/backend-package-prisma-types';
import { mapGraphQLFilterByDateNestedToPrismaNestedDateTimeNullableFilter } from './mapGraphQLFilterByDateNestedToPrismaNestedDateTimeNullableFilter';

/**
 * Map the GraphQL filter by date to the Prisma date time nullable filter.
 * @param f The GraphQL filter by date.
 * @returns The Prisma date time nullable filter.
 */
export const mapGraphQLFilterByDateToPrismaDateTimeNullableFilter = (f: FilterByDate): DateTimeNullableFilter => {
  return {
    equals: f.equals,
    in: f.in ? f.in.filter((o): o is string => !!o) : f.in,
    notIn: f.notIn ? f.notIn.filter((o): o is string => !!o) : f.notIn,
    lt: f.lt ?? undefined,
    lte: f.lte ?? undefined,
    gt: f.gt ?? undefined,
    gte: f.gte ?? undefined,
    not: f.not ? mapGraphQLFilterByDateNestedToPrismaNestedDateTimeNullableFilter(f.not) : f.not,
  };
};
