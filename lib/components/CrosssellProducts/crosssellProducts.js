import React from 'react';
import { useStyle } from '@magento/venia-ui/lib/classify';
import { shape, string } from 'prop-types';
import defaultClasses from './crosssellProducts.css';

import { useIntl } from 'react-intl';
import { useWindowSize } from '@magento/peregrine';
import { useCrosssellProducts } from '../../talons/CrossssellProducts/useCrosssellProducts';
import ProductsCarousel from '@castletech/pwa-module-core/lib/components/ProductsCarousel';

const CrosssellProducts = props => {
  const classes = useStyle(defaultClasses, props.classes);
  const { items } = useCrosssellProducts();
  

  if (!items || items.length === 0) {
    return null;
  }

  const { formatMessage } = useIntl();
  const windowSize = useWindowSize();
  const isMobile = windowSize.innerWidth <= 767;
  const isDesktop = windowSize.innerWidth >= 1024;

  const slidesToShow = isMobile ? 1.6 : isDesktop ? 5 : 4;
  const carouselSettings = {
    slidesToShow
  };

  return (
    <div className={classes.root}>
      <ProductsCarousel
        title={formatMessage({
          id: 'crosssellProducts.crosssellProducts',
          defaultMessage: 'Recommendations for you'
        })}
        items={items}
        settings={carouselSettings}
      />
    </div>
  );
};

CrosssellProducts.propTypes = {
  classes: shape({ root: string })
};

CrosssellProducts.defaultProps = {};

export default CrosssellProducts;
