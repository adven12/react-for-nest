import { put, takeEvery, call, delay } from "redux-saga/effects";
import { callApi } from "../request";
import jwt_decode  from "jwt-decode"


export function* doLogin(): IterableIterator<any> {
  yield takeEvery(`@@login/DO_LOGIN`, function* (action: any) { 
    try {      
      const user = yield call(callApi, 'POST', 'login', action.data);
      let data:any
      try {
          data  =  jwt_decode (user.token);
     } catch (error) {
     }
     console.log(data);
     
      // const {
      //   data: { email, password },
      // } = action;
      // console.log('User email: ' + email);
      // console.log('User password: ' + password);

      // const user = users.find((users: any) => email === users.email && password === users.password)

      if (data) {
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
