import { RootState } from "../rootReducer";
import { ProductsState } from "./types";

export const initialState: ProductsState = {
  dataProducts: "",
  book: "",
  dataArr: [],
  search: "",
  numberBooks: 1,
  countBooks: 0,
};

export function productsReducer(state: ProductsState = initialState, action: any) {
  switch (action.type) {
    case `GET_ALL_BOOKS`: {
      return initialState;
    }
    case `DELETE_BOOK`: {
      const { data, allBooks } = action;

      allBooks.map((text: any, index: any) => (
        text.id == data ? (
          allBooks.splice(text, 1)
        ) : (null)
      ))
      return {
        ...state,
        dataProducts: allBooks
      }
    }
    case `LOADED_BOOKS`: {
      const { dataProducts } = action.payload;

      return {
        ...state,
        dataProducts,
      };
    }
    case `@@DATAPRODUCTS_ERROR`: {
      const { error } = action.payload;
      return {
        ...state,
        error: error
      };
    }
    case `DO_PRODUCTS_TO_BASKET`: {
      let newState = JSON.parse(JSON.stringify(state))
      const { book } = action;

      if (newState.dataArr.length === 0) {
        book.quantity = 1;
        newState.dataArr.push(book);
      }
      else {
          newState.dataArr.forEach((item: any) => {
            if (item._id === book._id) {
              item.quantity++
              book.quantity = 0
        }
      })
            if(book.quantity != 0) {
            book.quantity = 1;
            newState.dataArr.push(book);
        }
    }

      return {
        ...state,
        dataArr: newState.dataArr,
        book: book
      };
    }
    case `@@basket/CLEAN_ALL_BASKET`: {
      return {
        ...state,
        dataArr: []
      };
    }
    case `@@basket/CLEAN_ONE_BASKET`: {
      let { book, numberBooks } = action;     
      let newState = JSON.parse(JSON.stringify(state))

        newState.dataArr.map((text: any, index: any) => {
          if(text._id == book._id) {
            if(text.quantity <= 1){
            let index:number = newState.dataArr.indexOf(text);
            newState.dataArr.splice(index, 1)
            }
            else{
              text.quantity--;
              book.quantity = text.quantity
            }
          }
          
        })
      
      return {
        ...state,
        dataArr: newState.dataArr,
        numberBooks:  book.quantity,
      };
    }
    case `@@basket/ADD_ONE_BASKET`: {
      let newState = JSON.parse(JSON.stringify(state))
      
      let  {book}  = action;
      newState.dataArr.map((text: any) => {
      if(book._id == text._id){
        text.quantity++;
        book.quantity = text.quantity
      }
      })
      return {
        ...state,
        dataArr: newState.dataArr,
        numberBooks:  book.quantity,
      };
    }
    case `CREATE_BOOKS`: {   
      return {
        ...state,
      };
    }
    case `DO_BOOK_CHANGE`: {   
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

export const products = (state: RootState) => state.products;