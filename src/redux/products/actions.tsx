import { ProductsRequest } from "./types";


export function doProducts() {
  return { type: `GET_ALL_BOOKS`,
  };
}
export function createProducts(data:ProductsRequest) {
  return { type: `CREATE_BOOKS`,data
  };
}
  export function doProductsToBasket(book:ProductsRequest) {
    return { type: `DO_PRODUCTS_TO_BASKET`,
    book
    };
}
export function doProductsUpdate(data:ProductsRequest, allBooks:ProductsRequest) {
  return { type: 'DELETE_BOOK',
  data, allBooks
  };
}
export function doProductChange(data:ProductsRequest, id:ProductsRequest) {
  return { type: 'DO_BOOK_CHANGE',
  data, id
  };
}