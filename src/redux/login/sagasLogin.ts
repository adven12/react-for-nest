import { put, takeEvery, call, delay } from "redux-saga/effects";
import { callApi } from "./req";
import jwt_decode  from "jwt-decode"


export function* doLogin(): IterableIterator<any> {
  yield takeEvery(`@@login/DO_LOGIN`, function* (action: any) {
    try {
      console.log(action.data);
      
      const user = yield call(callApi, 'POST', 'login', action.data);

      console.log('ff',user.token);
      let data:any
      try {
          data  =  jwt_decode (user.token);
        console.log(data);
      //  допустимый формат токена 
     } catch (error) {
        // неверный формат токена 
     }
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
          type: `@@users/DO_DATAUSERS`,
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
