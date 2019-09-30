import { put, takeEvery , call} from "redux-saga/effects";
import  { callApi }  from "../request";


export function* doBooks(): IterableIterator<any> {
  yield takeEvery(`@@books/GET_ALL_BOOKS`, function* () {
    try {     
    const products = yield call(callApi,'GET', 'books');
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
    const local: any = localStorage.getItem('state')
    const localParce = JSON.parse(local)
    const token = localParce.login.token
    console.log(localParce.login.token);
      try {
        
        let id = action.data;
        console.log(id);
                                                   
          const  answerApi = fetch(`http://localhost:4201/books/${id}`, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json", "Accept": "application/json", 'Authorization' : `Bearer ${token}`},
              });
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
      const local: any = localStorage.getItem('state')
      const localParce = JSON.parse(local)
      const token = localParce.login.token
      console.log(localParce.login.token);
        try {         
          const answerApi = fetch(`http://localhost:4201/books`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json", 'Authorization' : `Bearer ${token}`},
            body: JSON.stringify(action.data)
          });
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
      console.log(action.id);
      const local: any = localStorage.getItem('state')
      const localParce = JSON.parse(local)
      const token = localParce.login.token
      console.log(localParce.login.token);
        try {
           fetch(`http://localhost:4201/books/${action.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json", "Accept": "application/json", 'Authorization' : `Bearer ${token}`},
            body: JSON.stringify(action.data)
          });
                      
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