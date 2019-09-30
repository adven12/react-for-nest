import { put, takeEvery, call } from "redux-saga/effects";
import { callApi } from "../request";


export function* sagaHome(): IterableIterator<any> {
  yield takeEvery(`@@home/DO_HOME_CHANGE`, function* (action: any) {
    try {

      const { data, id } = action;
      console.log(action);
      const local:any = localStorage.getItem('state');
      const localParce = JSON.parse(local);
      const token = localParce.login.token;      
      
      const answerApi = fetch(`http://localhost:4201/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", "Accept": "application/json", 'Authorization' : `Bearer ${token}`},
        body: JSON.stringify(data)
      })
      
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