import * as React from "react";
import { LoginState,  LoginRequest } from "../../redux/login/types";
import '../../rootStyle.css'
import { Redirect } from 'react-router-dom'
import  ErrorComponent  from "../../сontainers/error.container"
 
export interface LoginProps {
  doLogin: (data: LoginRequest) => object;
  isLog: boolean
  data: any
}

export class LoginComponent extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    email: "",
    password: "",
    isLog: false,
    error: '',
    data:[],
    token: '',
  };
  handle = (event: any) =>{
    this.setState({ [event.target.name]: event.target.value } as any);  
  }  
    
  
  login = () => {
    const { doLogin } = this.props;
    doLogin({ username: this.state.email, password: this.state.password });
  };

  render() {  
    console.log(this.props.data.isAdmin);
    
    return (
        <div className="loginComponent">
              {this.props.isLog ? ( 
              this.props.data.isAdmin ===  true ? (
              <Redirect to="/users" />
              ) : (<Redirect to="/home" />)
              ):(null)}

         <ErrorComponent />    
          <div className="loginComponent-h4">
            <h4>Enter your e-mail and password  </h4>
          </div>
          <div>
            <input
              className="loginComponent-input"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handle}
            />
          </div>
          <div>
            <input
              className="loginComponent-input"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handle}
            />
          </div>
          <div>
            <button onClick={() => this.login()} className="loginComponent-button">Login</button>
          </div>
        </div>
    );
  }
}
