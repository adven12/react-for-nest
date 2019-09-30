import { RootState } from "../rootReducer";
import { UsersState } from "./types";

export const initialState: UsersState = {
  dataUsers: "",
  error: '',
};

export function usersReducer(state: UsersState = initialState, action: any) {
  switch (action.type) {
    case `@@users/LOAD_USERS`: {
      return {...state}; 
    }
    case `@@users/LOAD_USERS_SUCCESS`: {
      const { dataUsers } = action.payload;
      return {
        ...state,
        dataUsers: dataUsers
      };
    }
    case `@@users/LOAD_USERS_ERROR`: {
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