import { put, takeEvery, call, delay } from "redux-saga/effects";
import { callApi } from "../../services/request";
import jwt_decode  from "jwt-decode"


export function* doLogin(): IterableIterator<any> {
  yield takeEvery(`@@login/DO_LOGIN`, function* (action: any) { 
    try {     
      const user = yield call(callApi, 'POST', "login", action.data);
      console.log(user.token);
      
      let data:any
      if (user.token) {
        data  =  jwt_decode (user.token); 
        yield put({
          type: `@@login/LOGIN_SUCCESS`,
            data: data,
            token: user.token,
        });
        yield put({         
          type: `@@users/LOAD_USERS`,
        });
      } else {
        yield put({
          type: `@@error/SHOW_ERROR`,
          payload: {
            error: "Invalid login or password"

          }
        });

        yield delay(3000);
        yield put({
          type: `@@error/HIDE_ERROR`
        });
      }
    } catch (error) {
      yield put({
        type: `@@error/SHOW_ERROR`,
        payload: {
          error: error.message
        }
      });
    }
  });
}
