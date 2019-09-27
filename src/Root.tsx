import * as React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { Store } from "redux";
import configureStore from "./redux/store";
import { RootState } from "./redux/rootReducer";
import LoginContainer from "./сontainers/loginContainer";
import HomeContainer from "./сontainers/homeContainer";
import RegistrationContainer from "./сontainers/registrationContainer";
import HeaderContainer from "./сontainers/headerContainer";
import UsersContainer from "./сontainers/usersContainer";
import ProductsContainer from "./сontainers/productsContainer";
import ProductsDescription from "./сomponents/products/productsDescription";
import "./rootStyle.css"


export const Path = {
  login: "/login",
  registration: "/registration",
  home: "/home",
  logout: "/logout",
  users: "/users",
  products: "/products",
  description: "/description/:id",
};

const store: Store<RootState> = configureStore();

export default () => (
  <Provider store={store}>
   
   <Router>
      <div className="root-class">
      <HeaderContainer />
        <Route path={Path.login} component={LoginContainer} />
        <Route path={Path.registration} component={RegistrationContainer} />
        <Route path={Path.home} component={HomeContainer} />
        <Route path={Path.users} component={UsersContainer} />
        <Route path={Path.products} component={ProductsContainer} />
        <Route path={Path.description} component={ProductsDescription} />
     </div>

  </Router>
        
  </Provider>
);