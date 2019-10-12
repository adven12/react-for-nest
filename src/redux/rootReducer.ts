import { Reducer, combineReducers } from "redux";
import { LoginState } from "./login/types";
import { loginReducer } from "./login/reducer";
import { homeReducer } from "./home/reducer";
import { errorReducer } from "./error/reducer";
import { HomeState } from "./home/types";
import { RegistrationState } from "../redux/registration/types";
import { registrationReducer } from "./registration/reducer";
import { UsersState } from "./users/types"
import { usersReducer } from "./users/reducer";
import { booksReducer } from "./books/reducer";
import { BooksState } from "./books/types";
import { ErrorState } from "./error/types";
import { OrdersState } from "./order/types";
import { ordersReducer } from "./order/reducer";



export interface RootState {
  error: ErrorState;
  login: LoginState;
  home: HomeState;
  registration: RegistrationState;
  users: UsersState;
  books: BooksState;
  orders: OrdersState;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  error: errorReducer,
  login: loginReducer,
  home: homeReducer,
  registration: registrationReducer,
  users: usersReducer,
  books: booksReducer,
  orders: ordersReducer,
});
export default rootReducer;
  