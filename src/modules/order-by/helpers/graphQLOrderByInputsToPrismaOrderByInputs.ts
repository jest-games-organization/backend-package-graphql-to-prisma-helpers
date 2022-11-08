import { OrderByInput as GraphQLOrderByInput } from '@jest-games-organization/backend-package-graphql-types';
import { DataObject } from '@jest-games-organization/backend-package-object-types';
import { OrderByInput as PrismaOrderByInput } from '@jest-games-organization/backend-package-prisma-types';
import { graphQLOrderByInputToPrismaOrderByInput } from './graphQLOrderByInputToPrismaOrderByInput';

/**
 * Maps the GraphQL order by inputs to the Prisma order by inputs.
 * @param orderByInputs The GraphQL order by inputs.
 * @returns The Prisma order by inputs.
 */
export const graphQLOrderByInputsToPrismaOrderByInputs = <Node extends DataObject, Record extends DataObject>(
  orderByInputs: GraphQLOrderByInput<Node>[] | null | undefined,
): PrismaOrderByInput<Record>[] | undefined => {
  // If the GraphQL order by inputs is null or undefined, return undefined.
  if (orderByInputs === null || orderByInputs === undefined) {
    return undefined;
  }

  // Return the Prisma order by inputs.
  return orderByInputs.map(graphQLOrderByInputToPrismaOrderByInput);
};
