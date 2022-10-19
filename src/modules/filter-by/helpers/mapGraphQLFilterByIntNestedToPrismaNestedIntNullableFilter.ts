import { FilterByIntNested } from '@jest-games-organization/backend-package-graphql-types';
import { NestedIntNullableFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Map the GraphQL filter by int nested to a Prisma int nullable filter.
 * @param f The GraphQL filter by int nested.
 * @returns The Prisma nested int nullable filter.
 */
export const mapGraphQLFilterByIntNestedToPrismaNestedIntNullableFilter = (
  f: FilterByIntNested,
): NestedIntNullableFilter => {
  return {
    equals: f.equals,
    in: f.in ? f.in.filter((o): o is number => !!o) : f.in,
    notIn: f.notIn ? f.notIn.filter((o): o is number => !!o) : f.notIn,
    lt: f.lt ?? undefined,
    lte: f.lte ?? undefined,
    gt: f.gt ?? undefined,
    gte: f.gte ?? undefined,
    not: f.not ? mapGraphQLFilterByIntNestedToPrismaNestedIntNullableFilter(f.not) : f.not,
  };
};
