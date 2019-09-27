import { RootState } from "../rootReducer";
import { ErrorState } from "./types";

export const initialState:ErrorState = {
  error: ""
};

export function errorReducer(state:ErrorState = initialState, action: any) {
  switch (action.type) {
    case `@@error/DO_ERROR`: {
      return state;
    }
    case `@@error/SHOW_ERROR`: {
       const { error } = action.payload;
       console.log(error);
            return { ...state , 
              error: error
            };
    }
    case `@@error/HIDE_ERROR`: {
      return {
        error: ""
      };
    }
    default:
      return state;
  }
}

export const error = (state: RootState) => state.error;