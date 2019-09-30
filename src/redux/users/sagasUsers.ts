import { put, takeEvery , call} from "redux-saga/effects";
import  { callApi }  from "../request";

export function* doUsers(): IterableIterator<any> {
  yield takeEvery(`@@users/LOAD_USERS`, function* () {
    try {
      const users = yield call(callApi,'GET', 'users');
              
    if(users){
        yield put({ 
        type: `@@users/LOAD_USERS_SUCCESS`,
          payload: {
          dataUsers: users.data,
          }
       });
    }
       
}catch (error) {
    yield put({
      type: `@@users/LOAD_USERS_ERROR`,
      payload: {
        error: error.message
      }
    });
  }
});
}
