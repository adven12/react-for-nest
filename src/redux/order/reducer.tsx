import { RootState } from "../rootReducer";
import { OrdersState } from "./types";

export const initialState: OrdersState = {
 allOrders: []
};

export function ordersReducer(state: OrdersState = initialState, action: any) {
  switch (action.type) {
    case `@@order/LOAD_ORDERS`: {
      return  {...state};
    }
    case `@@order/LOAD_ORDERS_SUCCESS`: {
        console.log(action);  

        return {
          ...state,
          allOrders: action.allOrders,
        };
      }
    default:
      return state;
  }
}

export const orders = (state: RootState) => state.orders;