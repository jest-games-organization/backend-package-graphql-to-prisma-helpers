import { FilterByInt } from '@jest-games-organization/backend-package-graphql-types';
import { IntFilter } from '@jest-games-organization/backend-package-prisma-types';
import { mapGraphQLFilterByIntNestedToPrismaNestedIntFilter } from './mapGraphQLFilterByIntNestedToPrismaNestedIntFilter';

/**
 * Map the GraphQL filter by int to a Prisma int filter.
 * @param f The GraphQL filter by int.
 * @returns The int filter.
 */
export const mapGraphQLFilterByIntToPrismaIntFilter = (f: FilterByInt): IntFilter => {
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
