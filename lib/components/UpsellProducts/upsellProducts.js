import React from 'react';
import { useStyle } from '@magento/venia-ui/lib/classify';
import { shape, string } from 'prop-types';
import defaultClasses from './upsellProducts.css';
import ProductsCarousel from '@castletech/pwa-module-core/lib/components/ProductsCarousel';
import { useIntl } from 'react-intl';
import { useUpsellProducts } from '../../talons/UpsellProducts/useUpsellProducts';

const UpsellProducts = props => {
  const { product } = props;

  if (!product) {
    return null;
  }

  const { sku } = product;
  const { products } = useUpsellProducts({ sku });

  if (!products || products.length === 0) {
    return null;
  }

  const { formatMessage } = useIntl();
  const classes = useStyle(defaultClasses, props.classes);

  return (
    <div className={classes.root}>
      <ProductsCarousel
        title={formatMessage({
          id: 'upsellProducts.upsellProducts',
          defaultMessage: 'We found other products you might like!'
        })}
        items={products}
      />
    </div>
  );
};

UpsellProducts.propTypes = {
  classes: shape({ root: string })
};

UpsellProducts.defaultProps = {};

export default UpsellProducts;
