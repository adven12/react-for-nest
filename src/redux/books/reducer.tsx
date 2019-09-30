import { RootState } from "../rootReducer";
import { BooksState } from "./types";

export const initialState: BooksState = {
  dataProducts: "",
  book: "",
  dataArr: [],
  search: "",
  numberBooks: 1,
  countBooks: 0,
};

export function booksReducer(state: BooksState = initialState, action: any) {
  switch (action.type) {
    case `@@books/GET_ALL_BOOKS`: {
      return initialState;
    }
    case `@@books/DELETE_BOOK`: {
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
    case `BOOKS_ERROR`: {
      const { error } = action.payload;
      return {
        ...state,
        error: error
      };
    }
    case `@@books/DO_BOOK_TO_BASKET`: {
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
    case `@@books/CREATE_BOOK`: {   
      return {
        ...state,
      };
    }
    case `@@books/DO_BOOK_CHANGE`: {   
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

export const books = (state: RootState) => state.books;