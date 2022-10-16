import { FilterByIntNested } from '@jest-games-organization/backend-package-graphql-types';
import { NestedIntFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Map the GraphQL filter by int nested to a Prisma int filter.
 * @param f The GraphQL filter by int nested.
 * @returns The Prisma nested int filter.
 */
export const mapGraphQLFilterByIntNestedToPrismaNestedIntFilter = (f: FilterByIntNested): NestedIntFilter => {
  return {
    equals: f.equals ?? undefined,
    in: f.in?.filter((o): o is number => !!o),
    notIn: f.notIn?.filter((o): o is number => !!o),
    lt: f.lt ?? undefined,
    lte: f.lte ?? undefined,
    gt: f.gt ?? undefined,
    gte: f.gte ?? undefined,
    not: f.not ? mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(f.not) : undefined,
  };
};
