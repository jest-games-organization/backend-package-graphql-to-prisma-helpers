import { FilterByInt } from '@jest-games-organization/backend-package-graphql-types';
import { IntNullableFilter } from '@jest-games-organization/backend-package-prisma-types';
import { mapGraphQLFilterByIntNestedToPrismaNestedIntNullableFilter } from './mapGraphQLFilterByIntNestedToPrismaNestedIntNullableFilter';

/**
 * Map the GraphQL filter by int to a Prisma int nullable filter.
 * @param f The GraphQL filter by int.
 * @returns The int nullable filter.
 */
export const mapGraphQLFilterByIntToPrismaIntNullableFilter = (f: FilterByInt): IntNullableFilter => {
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
