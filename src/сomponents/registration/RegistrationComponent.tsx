import React from "react";
import {RegistrationState, RegistrationRequest } from "../../redux/registration/types";
import { Redirect } from 'react-router-dom'
import  {callApi}   from "../../redux/login/req";

export interface RegistrationProps {
  doRegistration: (data: RegistrationRequest) => object;
  isLog: boolean,
}

export class RegistrationComponent extends React.Component<RegistrationProps, RegistrationState> {
  state: RegistrationState = {
    email: "",
    password: "",
    name: "",
    avatar: "",
    isLog: false,
  };
  
  handle = (event: any) =>
  this.setState({ [event.target.name]: event.target.value } as any);

  registration = () => {   
    const { doRegistration } = this.props;
    doRegistration({ email: this.state.email, password: this.state.password, name: this.state.name, avatar:this.state.avatar });
    
  };

  render() {   
    if (this.props.isLog) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="headerRegistration">
        <div>
          <button
            onClick={(e:any) => {
              let qqq:any = {}
              console.log(callApi("GET", "users", {}, "http://localhost:3002")
              .then((res:any) => console.log(qqq = {...res}))
              .then((res:any)=> console.log(JSON.stringify(qqq)))
              .then((res:any) => console.log({...res}))
              .then())
              
            }}
          >
            test
          </button>
        </div>
        <div className="headerRegistration-h3">
            <h3>New user registration</h3>
        </div>
        <div className="headerRegistration-group">
        <div className="headerRegistration-group">
            <input
              className="headerRegistration-input"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handle}
            />
            <label className="headerRegistration-label"> Name</label>
          </div>
          <div className="headerRegistration-group">
            <input
              className="headerRegistration-input"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handle}
            />
            <label className="headerRegistration-label"> E-mail</label>
          </div>
          <div className="headerRegistration-group">
            <input
              className="headerRegistration-input"
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handle}
            />
            <label className="headerRegistration-label"> Password</label>
          </div>
          <div className="headerRegistration-group">
            <button onClick={() => this.registration()}  className="headerRegistration-button">Registration</button>
          </div>
        </div>
      </div>
    );
  }
}