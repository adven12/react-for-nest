 
  export interface ProductsState {
    dataProducts: string,
    book: string,
    dataArr: [],
    search: string,
    numberBooks: number,
    countBooks: number,
  }

  export interface ProductsRequest{
    addToBasket: string;
  }
  export interface ProductsModalState  {
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
  // export interface book {
  //   book: string;
  // }
