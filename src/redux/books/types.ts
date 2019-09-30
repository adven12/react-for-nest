 
  export interface BooksState {
    dataProducts: string,
    book: string,
    dataArr: [],
    search: string,
    numberBooks: number,
    countBooks: number,
  }

  export interface BooksRequest{
    addToBasket: string;
  }
  export interface BooksModalState  {
    picture: string,
    name: string,
    descript:string,
    price: number,
    full_descript: string,
  }
  export interface DescriptionModalState  {
    product: any,
    full_descript: string,
  }

