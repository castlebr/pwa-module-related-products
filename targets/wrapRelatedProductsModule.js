const { Targetables } = require('@magento/pwa-buildpack');

module.exports = ({ targets, settings = {} }) => {
  const targetables = Targetables.using(targets);

  const defaultSettings = {
    enableRelatedProducts: true,
    enableUpsellProducts: true,
    enableCrosssellProducts: true,
    ...settings
  };

  const {
    enableRelatedProducts,
    enableUpsellProducts,
    enableCrosssellProducts
  } = defaultSettings;

  const ProductFullDetail = targetables.reactComponent(
    '@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js'
  );
  const CartPage = targetables.reactComponent(
    '@magento/venia-ui/lib/components/CartPage/cartPage.js'
  );

  // Related Products in product page
  if (enableRelatedProducts) {
    ProductFullDetail.addImport(
      "import { RelatedProducts } from '@castletech/pwa-module-related-products';"
    );
    ProductFullDetail.insertBeforeSource(
      '</Fragment>',
      '<RelatedProducts product={product} />\n'
    );
  }

  // Upsell Products in product page
  if (enableUpsellProducts) {
    ProductFullDetail.addImport(
      "import { UpsellProducts } from '@castletech/pwa-module-related-products';"
    );
    ProductFullDetail.insertBeforeSource(
      '</Fragment>',
      '<UpsellProducts product={product} />\n'
    );
  }

  // Crosssell Products in cart page
  if (enableCrosssellProducts) {
    CartPage.addImport(
      "import { CrosssellProducts } from '@castletech/pwa-module-related-products';"
    );
    CartPage.appendJSX('div className={classes.root}', '<CrosssellProducts />');
  }
};
