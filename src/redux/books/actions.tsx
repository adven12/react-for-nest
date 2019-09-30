import { BooksRequest } from "./types";

export function doBooks() {
  return { type: `@@books/GET_ALL_BOOKS`,
  };
}
export function createBooks(data:BooksRequest) {
  return { type: `@@books/CREATE_BOOK`,data
  };
}
  export function doBooksToBasket(book:BooksRequest) {
    return { type: `@@books/DO_BOOK_TO_BASKET`,
    book
    };
}
export function doBooksUpdate(data:BooksRequest, allBooks:BooksRequest) {
  return { type: '@@books/DELETE_BOOK',
  data, allBooks
  };
}
export function doBooksChange(data:BooksRequest, id:BooksRequest) {
  return { type: '@@books/DO_BOOK_CHANGE',
  data, id
  };
}
