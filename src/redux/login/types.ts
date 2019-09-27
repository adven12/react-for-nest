
  export interface LoginState {
    email: string;
    password: string;
    isLog: boolean,
    error: string,
    data: any,
    token: string,
  }
  
  export interface LoginRequest {
    username: string;
    password: string;
  }

