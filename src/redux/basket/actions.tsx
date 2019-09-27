
export function cleanAllBasket() {
  return { type: '@@basket/CLEAN_ALL_BASKET',
  };
}
export function cleanOneBasket(book:any,numberBooks:any) {
  return { type: '@@basket/CLEAN_ONE_BASKET',
  book,numberBooks
  };
}
export function AddOneBasket(numberBooks:any, countBooks:number, book:any) {
  return { type: '@@basket/ADD_ONE_BASKET',
  numberBooks, countBooks, book
  };
}
