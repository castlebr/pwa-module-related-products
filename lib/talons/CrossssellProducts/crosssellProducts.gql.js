import { gql } from '@apollo/client';

const GET_CROSSSELL_PRODUCTS = gql`
  query getCrosssellProcucts($cartId: String!) {
    cart(cart_id: $cartId) {
      items {
        product {
          crosssell_products {
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
  }
`;

export default {
  getCrosssellProductsQuery: GET_CROSSSELL_PRODUCTS
};
