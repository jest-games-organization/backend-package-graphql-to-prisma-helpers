import { FilterByIntNested } from '@jest-games-organization/backend-package-graphql-types';
import { NestedIntFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Map the GraphQL filter by int nested to a Prisma int filter.
 * @param filter The GraphQL filter by int nested.
 * @returns The Prisma nested int filter.
 */
export const mapGraphQLFilterByIntNestedToPrismaNestedIntFilter = (
  filter: FilterByIntNested | null | undefined,
): NestedIntFilter | undefined => {
  // If the filter by int nested is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma nested int filter.
  return {
    equals: filter.equals ?? undefined,
    in: filter.in?.filter((o): o is number => !!o),
    notIn: filter.notIn?.filter((o): o is number => !!o),
    lt: filter.lt ?? undefined,
    lte: filter.lte ?? undefined,
    gt: filter.gt ?? undefined,
    gte: filter.gte ?? undefined,
    not: mapGraphQLFilterByIntNestedToPrismaNestedIntFilter(filter.not),
  };
};
