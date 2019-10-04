import { put, takeEvery, call } from "redux-saga/effects";
import { callApi } from "../request";


export function* sagaHome(): IterableIterator<any> {
  yield takeEvery(`@@home/DO_HOME_CHANGE`, function* (action: any) {
    try {
      const { data, id } = action;      
      yield call (callApi, 'PUT', `users/${id}`, data);   
      
      yield put({ 
        type: `@@home/DO_HOME_CHANGE_CALL`,
          payload: {
          data: data,        
          }
       });
       yield put({
        type: `@@login/LOGIN_SUCCESS`,
          data: data,
      });


    } catch (error) {
      yield put({
        type: `@@home/DO_HOME_FAILED`,
        payload: {
          error: error.message
        }
      });
    }
  });
}