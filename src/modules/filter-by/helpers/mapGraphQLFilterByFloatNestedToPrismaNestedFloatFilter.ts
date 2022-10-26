import { FilterByFloat } from '@jest-games-organization/backend-package-graphql-types';
import { FloatFilter } from '@jest-games-organization/backend-package-prisma-types';

/**
 * Maps the GraphQL filter by float to a Prisma float filter.
 * @param filter The GraphQL filter by float.
 * @returns The Prisma float filter.
 */
export const mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter = (
  filter: FilterByFloat | null | undefined,
): FloatFilter | undefined => {
  // If the filter by float is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma nested float filter.
  return {
    equals: filter.equals ?? undefined,
    in: filter.in?.filter((o): o is number => !!o),
    notIn: filter.notIn?.filter((o): o is number => !!o),
    lt: filter.lt ?? undefined,
    lte: filter.lte ?? undefined,
    gt: filter.gt ?? undefined,
    gte: filter.gte ?? undefined,
    not: mapGraphQLFilterByFloatNestedToPrismaNestedFloatFilter(filter.not),
  };
};
