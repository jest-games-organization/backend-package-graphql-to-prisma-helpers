import { FilterByInt } from '@jest-games-organization/backend-package-graphql-types';
import { IntFilter } from '@jest-games-organization/backend-package-prisma-types';
import { mapGraphQLFilterByIntNestedToPrismaNestedIntFilter } from './mapGraphQLFilterByIntNestedToPrismaNestedIntFilter';

/**
 * Map the GraphQL filter by int to a Prisma int filter.
 * @param filter The GraphQL filter by int.
 * @returns The int filter.
 */
export const mapGraphQLFilterByIntToPrismaIntFilter = (
  filter: FilterByInt | null | undefined,
): IntFilter | undefined => {
  // If the filter by int is null or undefined, return undefined.
  if (filter === null || filter === undefined) {
    return undefined;
  }

  // Return the Prisma int filter.
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
