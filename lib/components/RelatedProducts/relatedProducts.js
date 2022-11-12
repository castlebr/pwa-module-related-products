import React from 'react';
import { useStyle } from '@magento/venia-ui/lib/classify';
import { shape, string } from 'prop-types';
import defaultClasses from './relatedProducts.css';

import { useIntl } from 'react-intl';
import ProductsCarousel from '@castletech/pwa-module-core/lib/components/ProductsCarousel';
import { useRelatedProducts } from '../../talons/RelatedProducts/useRelatedProducts';

const RelatedProducts = props => {
  const { product } = props;

  if (!product) {
    return null;
  }

  const { sku } = product;
  const { products } = useRelatedProducts({ sku });

  if (!products || products.length === 0) {
    return null;
  }

  const classes = useStyle(defaultClasses, props.classes);
  const { formatMessage } = useIntl();

  return (
    <div className={classes.root}>
      <ProductsCarousel
        title={formatMessage({
          id: 'relatedProducts.relatedProducts',
          defaultMessage: 'Related products'
        })}
        items={products}
      />
    </div>
  );
};

RelatedProducts.propTypes = {
  classes: shape({ root: string })
};

RelatedProducts.defaultProps = {};

export default RelatedProducts;
