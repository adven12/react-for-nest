import * as React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { Store } from "redux";
import configureStore from "./redux/store";
import { RootState } from "./redux/rootReducer";
import LoginContainer from "./сontainers/login.container";
import HomeContainer from "./сontainers/home.container";
import RegistrationContainer from "./сontainers/registration.container";
import HeaderContainer from "./сontainers/header.container";
import UsersContainer from "./сontainers/users.container";
import BooksContainer from "./сontainers/books.container";
import BooksDescription from "./сomponents/books/booksDescription";
import OrderContainer from "./сontainers/order.container";
import "./rootStyle.css"


export const Path = {
  login: "/login",
  registration: "/registration",
  home: "/home",
  logout: "/logout",
  users: "/users",
  books: "/books",
  description: "/description/:id",
  order: "/order",
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
        <Route path={Path.books} component={BooksContainer} />
        <Route path={Path.description} component={BooksDescription} />
        <Route path={Path.order} component={OrderContainer} />
     </div>
  </Router>
        
  </Provider>
);