import { put, takeEvery , call} from "redux-saga/effects";
import  { callApi }  from "../../services/request";

export function* doGetOrders(): IterableIterator<any> {
  yield takeEvery(`@@order/LOAD_ORDERS`, function* () {      
    try {
      const local: any = localStorage.getItem('state');
      const localParce:any = JSON.parse(local);
      const user:any = localParce.login.data;
      
      const orders = yield call(callApi,'GET', 'orders',user);
              
    if(orders){
        yield put({ 
        type: `@@order/LOAD_ORDERS_SUCCESS`,
          allOrders: orders,
       });
    }
       
}catch (error) {
    yield put({
      type: `@@error/SHOW_ERROR`,
      payload: {
        error: error.message
      }
    });
  }
});
}

export function* doOrder(): IterableIterator<any> {
  yield takeEvery('@@basket/DO_ORDER', function*(action: any) {  
    console.log('1111 ', action.data);
       
      try {        
        const  answerApi = yield call (callApi,'POST', `orders`, action.data); 
        console.log(answerApi);
         
          // yield put ({
          //   type: '@@books/GET_ALL_BOOKS',
          //   payload: {
                            
          //   }
          // })
                    
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
