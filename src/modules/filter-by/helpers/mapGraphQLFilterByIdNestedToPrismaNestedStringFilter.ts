import { FilterByIdNested } from '@jest-games-organization/backend-package-graphql-types';
import { NestedStringFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Map the GraphQL filter by id nested to the Prisma string filter.
 * @param f The GraphQL filter by id nested.
 * @returns The Prisma nested string filter.
 */
export const mapGraphQLFilterByIdNestedToPrismaNestedStringFilter = (f: FilterByIdNested): NestedStringFilter => {
  return {
    contains: f.contains ?? undefined,
    endsWith: f.endsWith ?? undefined,
    equals: f.equals ?? undefined,
    gt: f.gt ?? undefined,
    gte: f.gte ?? undefined,
    in: f.in?.filter((o): o is string => !!o),
    lt: f.lt ?? undefined,
    lte: f.lte ?? undefined,
    not: f.not ? mapGraphQLFilterByIdNestedToPrismaNestedStringFilter(f.not) : undefined,
    notIn: f.notIn?.filter((o): o is string => !!o),
    startsWith: f.startsWith ?? undefined,
  };
};
