import { FilterByStringNested } from '@jest-games-organization/backend-package-graphql-types';
import { NestedStringFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Map the GraphQL filter by string nested to a Prisma string filter.
 * @param f The GraphQL filter by string nested.
 * @returns The Prisma nested string filter.
 */
export const mapGraphQLFilterByStringNestedToPrismaNestedStringFilter = (
  f: FilterByStringNested,
): NestedStringFilter => {
  return {
    equals: f.equals ?? undefined,
    in: f.in?.filter((o): o is string => !!o),
    notIn: f.notIn?.filter((o): o is string => !!o),
    lt: f.lt ?? undefined,
    lte: f.lte ?? undefined,
    gt: f.gt ?? undefined,
    gte: f.gte ?? undefined,
    contains: f.contains ?? undefined,
    startsWith: f.startsWith ?? undefined,
    endsWith: f.endsWith ?? undefined,
    not: f.not ? mapGraphQLFilterByStringNestedToPrismaNestedStringFilter(f.not) : undefined,
  };
};
