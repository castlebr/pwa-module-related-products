import { gql } from '@apollo/client';
import { ProductDetailsFragment } from '@magento/peregrine/lib/talons/RootComponents/Product/productDetailFragment.gql';

export const GET_RELATED_PRODUCTS = gql`
  query getRelatedProducts($sku: String!) {
    products(filter: { sku: { eq: $sku } }, pageSize: 1) {
      items {
        ...ProductDetailsFragment
        sku
        related_products {
          id
          name
          sku
          small_image {
            url
          }
          url_key
          url_suffix
          price {
            regularPrice {
              amount {
                currency
                value
              }
            }
          }
          price_range {
            minimum_price {
              regular_price {
                currency
                value
              }
            }
          }
          special_price

          ... on ConfigurableProduct {
            variants {
              attributes {
                code
                value_index
              }
              product {
                id
                media_gallery_entries {
                  id
                  disabled
                  file
                  label
                  position
                }
                sku
                stock_status
                special_price
                price_range {
                  minimum_price {
                    regular_price {
                      currency
                      value
                    }
                  }
                }
                special_price
              }
            }
          }
        }
      }
    }
  }
  ${ProductDetailsFragment}
`;

export default {
  getRelatedProductsQuery: GET_RELATED_PRODUCTS
};
