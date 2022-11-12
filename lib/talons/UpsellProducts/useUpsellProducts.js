import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';
import DEFAULT_OPERATIONS from './upsellProducts.gql';

export const useUpsellProducts = (props = {}) => {
  const { sku } = props;
  const operations = mergeOperations(DEFAULT_OPERATIONS, props.operations);
  const { getUpsellProductsQuery } = operations;

  const { error, loading, data } = useQuery(getUpsellProductsQuery, {
    skip: !sku,
    variables: {
      sku
    },
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first'
  });

  const products = useMemo(() => {
    if (data && data.products) {
      const { items } = data.products;
      if (items) {
        const item = items.find(product => product.sku === sku);
        if (item) {
          const { upsell_products } = item;
          return upsell_products;
        }
      }
    }
  }, [data]);

  return {
    products
  };
};
