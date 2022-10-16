import { FilterByDateNested } from '@jest-games-organization/backend-package-graphql-types';
import { NestedDateTimeFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Map the GraphQL filter by date to a Prisma date time filter.
 * @param f The GraphQL filter by date.
 * @returns The Prisma Nested date time filter.
 */
export const mapGraphQLFilterByDateNestedToPrismaNestedDateTimeFilter = (
  f: FilterByDateNested,
): NestedDateTimeFilter => {
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
