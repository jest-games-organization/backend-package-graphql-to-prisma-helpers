import { FilterByFloat } from '@jest-games-organization/backend-package-graphql-types';
import { FloatNullableFilter } from '@jest-games-organization/backend-package-prisma-types';
import { mapGraphQLFilterByFloatNestedToPrismaNestedFloatNullableFilter } from './mapGraphQLFilterByFloatNestedToPrismaNestedFloatNullableFilter';

/**
 * Maps the GraphQL filter by float to a Prisma float nullable filter.
 * @param f The GraphQL filter by float.
 * @returns The Prisma float nullable filter.
 */
export const mapGraphQLFilterByFloatToPrismaFloatNullableFilter = (f: FilterByFloat): FloatNullableFilter => {
  return {
    equals: f.equals,
    in: f.in ? f.in.filter((o): o is number => !!o) : f.in,
    notIn: f.notIn ? f.notIn.filter((o): o is number => !!o) : f.notIn,
    lt: f.lt ?? undefined,
    lte: f.lte ?? undefined,
    gt: f.gt ?? undefined,
    gte: f.gte ?? undefined,
    not: f.not ? mapGraphQLFilterByFloatNestedToPrismaNestedFloatNullableFilter(f.not) : f.not,
  };
};
