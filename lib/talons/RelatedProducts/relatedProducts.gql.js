import { gql } from '@apollo/client';
import { ProductDetailsFragment } from '@magento/peregrine/lib/talons/RootComponents/Product/productDetailFragment.gql';

export const GET_RELATED_PRODUCTS = gql`
  query getRelatedProducts($sku: String!) {
    products(filter: { sku: { eq: $sku } }, pageSize: 1) {
      items {
        ...ProductDetailsFragment
        sku
        related_products {
          uid
          name
          small_image {
            url
          }
          sku
          stock_status
          price {
            regularPrice {
              amount {
                currency
                value
              }
            }
          }
          price_range {
            maximum_price {
              final_price {
                currency
                value
              }
              discount {
                amount_off
              }
            }
          }
          special_price
          url_key
          url_suffix

          ... on ConfigurableProduct {
            variants {
              attributes {
                code
                value_index
              }
              product {
                uid
                sku
                small_image {
                  url
                }
                stock_status
                price {
                  regularPrice {
                    amount {
                      currency
                      value
                    }
                  }
                }
                price_range {
                  maximum_price {
                    final_price {
                      currency
                      value
                    }
                    discount {
                      amount_off
                    }
                  }
                }
                special_price
                url_key
                url_suffix
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
