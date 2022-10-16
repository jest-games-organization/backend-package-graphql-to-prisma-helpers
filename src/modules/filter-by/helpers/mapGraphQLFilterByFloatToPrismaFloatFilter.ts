import { FilterByFloat } from '@jest-games-organization/backend-package-graphql-types';
import { FloatFilter } from '@jest-games-organization/backend-package-prisma-types';
import { mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter } from './mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter';

/**
 * Maps the GraphQL filter by float to a Prisma float filter.
 * @param f The GraphQL filter by float.
 * @returns The Prisma float filter.
 */
export const mapGraphQLFilterByFloatToPrismaFloatFilter = (f: FilterByFloat): FloatFilter => {
  return {
    equals: f.equals ?? undefined,
    in: f.in?.filter((o): o is number => !!o),
    notIn: f.notIn?.filter((o): o is number => !!o),
    lt: f.lt ?? undefined,
    lte: f.lte ?? undefined,
    gt: f.gt ?? undefined,
    gte: f.gte ?? undefined,
    not: f.not ? mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(f.not) : undefined,
  };
};
