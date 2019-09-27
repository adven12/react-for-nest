import { RootState } from "../rootReducer";
import { UsersState } from "./types";

export const initialState: UsersState = {
  dataUsers: "",
  error: '',
};

export function usersReducer(state: UsersState = initialState, action: any) {
  switch (action.type) {
    case `@@users/DO_DATAUSERS`: {
      return {...state}; 
    }
    case `@@users/DATAUSERS_SUCCESS`: {
      const { dataUsers } = action.payload;
      return {
        ...state,
        dataUsers: dataUsers
      };
    }
    case `@@users/DATAUSERS_ERROR`: {
      const { error } = action.payload;
      return {
        ...state,
        error: error
      };
    }
    default:
      return state;
  }
}

export const users = (state: RootState) => state.users;