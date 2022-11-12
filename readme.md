## PWA Studio Related Products Extension

**Product Page**
![Preview Product Page](https://github.com/castlebr/pwa-module-related-products/blob/master/docs/preview-product-page.png?raw=true 'Preview Product Page')

**Cart Page**
![Preview Cart Page](https://github.com/castlebr/pwa-module-related-products/blob/master/docs/preview-cart-page.png?raw=true 'Preview Cart Page')

PWA studio <= v12 has no have related products on product page and cart page. Accelerate your project with this module that adds related, upsell and crosssell products in your Storefront.

#### 1. Installation

```
yarn add @castletech/pwa-module-module-core @castletech/pwa-module-related-products
```

#### 2. Active Related Products module in your local-intercept

```
const {
  wrapRelatedProductsModule
} = require('@castletech/pwa-module-related-products/targets');
wrapRelatedProductsModule({
  targets
});
```

#### 3. Run project

```
yarn watch
```
