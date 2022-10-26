import { FilterByInt } from '@jest-games-organization/backend-package-graphql-types';
import { IntNullableFilter } from '@jest-games-organization/backend-package-prisma-types';
import { mapGraphQLFilterByIntNestedToPrismaNestedIntNullableFilter } from './mapGraphQLFilterByIntNestedToPrismaNestedIntNullableFilter';

/**
 * Map the GraphQL filter by int to a Prisma int nullable filter.
 * @param filter The GraphQL filter by int.
 * @returns The int nullable filter.
 */
export const mapGraphQLFilterByIntToPrismaIntNullableFilter = (
  filter: FilterByInt | null | undefined,
): IntNullableFilter | undefined => {
  // If the filter by int is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma int nullable filter.
  return {
    equals: filter.equals,
    in: filter.in ? filter.in.filter((o): o is number => !!o) : filter.in,
    notIn: filter.notIn ? filter.notIn.filter((o): o is number => !!o) : filter.notIn,
    lt: filter.lt ?? undefined,
    lte: filter.lte ?? undefined,
    gt: filter.gt ?? undefined,
    gte: filter.gte ?? undefined,
    not: filter.not ? mapGraphQLFilterByIntNestedToPrismaNestedIntNullableFilter(filter.not) : filter.not,
  };
};
