import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';
import DEFAULT_OPERATIONS from './relatedProducts.gql';

export const useRelatedProducts = (props = {}) => {
  const { sku } = props;
  const operations = mergeOperations(DEFAULT_OPERATIONS, props.operations);
  const { getRelatedProductsQuery } = operations;

  const { error, loading, data } = useQuery(getRelatedProductsQuery, {
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
          const { related_products } = item;
          return related_products;
        }
      }
    }

    return null;
  }, [data]);

  return {
    products
  };
};
