import { FilterByIntNested } from '@jest-games-organization/backend-package-graphql-types';
import { NestedIntNullableFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Map the GraphQL filter by int nested to a Prisma int nullable filter.
 * @param filter The GraphQL filter by int nested.
 * @returns The Prisma nested int nullable filter.
 */
export const mapGraphQLFilterByIntNestedToPrismaNestedIntNullableFilter = (
  filter: FilterByIntNested | null | undefined,
): NestedIntNullableFilter | undefined => {
  // If the filter by int nested is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma nested int nullable filter.
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
