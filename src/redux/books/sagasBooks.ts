import { put, takeEvery , call} from "redux-saga/effects";
import  { callApi }  from "../../services/request";


export function* doBooks(): IterableIterator<any> {
  yield takeEvery(`@@books/GET_ALL_BOOKS`, function* () {
    try {     
    const products = yield call(callApi,'GET', 'books' );
    console.log(products);
    
    if(products.length == 0){
      return null;
    }

        yield put({ 
        type: `LOADED_BOOKS`,
          payload: {
          dataProducts: products,
          
          }
       });
       
}catch (error) {
    yield put({
      type: `BOOKS_ERROR`,
      payload: {
        error: error.message
      }
    });
  }
});
}
export function* doBooksUpdate(): IterableIterator<any> {
  yield takeEvery('@@books/DELETE_BOOK', function*(action: any) {
      try {
        let id = action.data;                                                  
          const  answerApi = yield call (callApi,'DELETE', `books/${id}` );  
          console.log(answerApi);
           
          yield put ({
            type: '@@books/GET_ALL_BOOKS',
            payload: {
                            
            }
          })
                    
      }     
      catch (error) {
        yield put({
          type: `BOOKS_ERROR`,
          payload: {
            error: error.message
          }
        });
      }
    })
  }

  export function* createBooks(): IterableIterator<any> {
    yield takeEvery('@@books/CREATE_BOOK', function*(action: any) {     
        try {        
          const  answerApi = yield call (callApi,'POST', `books`, action.data); 
          console.log(answerApi);
           
            yield put ({
              type: '@@books/GET_ALL_BOOKS',
              payload: {
                              
              }
            })
                      
        } 
        
        catch (error) {
          yield put({
            type: `BOOKS_ERROR`,
            payload: {
              error: error.message
            }
          });
        }
      })
    }

  export function* doBooksChange(): IterableIterator<any> {
    yield takeEvery('@@books/DO_BOOK_CHANGE', function*(action: any) {
        try {
            yield call (callApi, 'PUT', `books/${action.id}`, action.data);                       
        }   
        catch (error) {
          yield put({
            type: `BOOKS_ERROR`,
            payload: {
              error: error.message
            }
          });
        }
      })
    }