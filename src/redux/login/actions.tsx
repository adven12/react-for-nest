import {  LoginRequest } from "./types";


export function doLogin(data: LoginRequest) {
  return {
     type: `@@login/DO_LOGIN`,
      data };
}
