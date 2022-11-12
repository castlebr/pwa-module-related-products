import { gql } from '@apollo/client';

const GET_CROSSSELL_PRODUCTS = gql`
  query getCrosssellProcucts($cartId: String!) {
    cart(cart_id: $cartId) {
      items {
        product {
          crosssell_products {
            id
            name
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
            sku
            small_image {
              url
            }
            url_key
            url_suffix

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
  }
`;

export default {
  getCrosssellProductsQuery: GET_CROSSSELL_PRODUCTS
};
