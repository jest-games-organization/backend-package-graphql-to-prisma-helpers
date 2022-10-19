import { FilterByDate } from '@jest-games-organization/backend-package-graphql-types';
import { DateTimeFilter } from '@jest-games-organization/backend-package-prisma-types';
import { mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter } from './mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter';

/**
 * Map the GraphQL filter by date to the Prisma date time filter.
 * @param f The GraphQL filter by date.
 * @returns The Prisma date time filter.
 */
export const mapGraphQLFilterByDateToPrismaDateTimeFilter = (f: FilterByDate): DateTimeFilter => {
  return {
    equals: f.equals ?? undefined,
    in: f.in?.filter((o): o is string => !!o),
    notIn: f.notIn?.filter((o): o is string => !!o),
    lt: f.lt ?? undefined,
    lte: f.lte ?? undefined,
    gt: f.gt ?? undefined,
    gte: f.gte ?? undefined,
    not: f.not ? mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter(f.not) : undefined,
  };
};
