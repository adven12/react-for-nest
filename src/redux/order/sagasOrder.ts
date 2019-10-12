import { put, takeEvery , call} from "redux-saga/effects";
import  { callApi }  from "../../services/request";

export function* doGetOrders(): IterableIterator<any> {
  yield takeEvery(`@@order/LOAD_ORDERS`, function* () {      
    try {
      const orders = yield call(callApi,'GET', 'orders');
              
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
