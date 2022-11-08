import { OrderByInput as GraphQLOrderByInput, SortOrder } from '@jest-games-organization/backend-package-graphql-types';
import { DataObject } from '@jest-games-organization/backend-package-object-types';
import { graphQLOrderByInputToPrismaOrderByInput } from '../../helpers/graphQLOrderByInputToPrismaOrderByInput';

describe('GIVEN the method', () => {
  let orderByInput: GraphQLOrderByInput<DataObject>;

  beforeEach(() => {
    orderByInput = { id: SortOrder.Ascending };
  });

  it('THEN it should return the prisma order by', () => {
    const response = graphQLOrderByInputToPrismaOrderByInput(orderByInput);
    expect(response).toEqual({ id: 'asc' });
  });
});
