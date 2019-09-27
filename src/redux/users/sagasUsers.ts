import { put, takeEvery , call} from "redux-saga/effects";
import  {callApi}  from "../login/req";


export function* doUsers(): IterableIterator<any> {
  yield takeEvery(`@@users/DO_DATAUSERS`, function* () {
    try {
      const users = yield call(callApi,'GET', 'users');
      console.log(users.data);
              
    if(users){
        yield put({ 
        type: `@@users/DATAUSERS_SUCCESS`,
          payload: {
          dataUsers: users.data,
          }
       });
    }
       
}catch (error) {
    yield put({
      type: `@@users/DATAUSERS_ERROR`,
      payload: {
        error: error.message
      }
    });
  }
});
}
