import { useMemo } from 'react';
import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';
import DEFAULT_OPERATIONS from './crosssellProducts.gql';
import { useQuery } from '@apollo/client';
import { useCartContext } from '@magento/peregrine/lib/context/cart';

export const useCrosssellProducts = (props = {}) => {
  const operations = mergeOperations(DEFAULT_OPERATIONS, props.operations);
  const { getCrosssellProductsQuery } = operations;
  const [{ cartId }] = useCartContext();

  const { error, loading, data } = useQuery(getCrosssellProductsQuery, {
    skip: !cartId,
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
    variables: {
      cartId
    }
  });

  const items = useMemo(() => {
    if (data && data.cart && data.cart.items && data.cart.items.length > 0) {
      const { items } = data.cart;
      let crosssell = [];
      items.map(({ product }) => {
        crosssell = [...crosssell, ...product.crosssell_products];
      });
      return crosssell.filter((item, pos) => crosssell.indexOf(item) == pos);
    }

    return null;
  }, [data]);

  return {
    items
  };
};
