import { RootState } from "../rootReducer";
import { HomeState } from "./types";
import { saveState } from "../localStorage";


export const initialState: HomeState = {
  error: '',
  isLog: false,
  email: "",
  name:"",
  data: "",
};

export function homeReducer(state: HomeState = initialState, action: any) {
  switch (action.type) {

    case `@@home/DO_HOME`: {
      return {...state}
    };
    case `@@home/DO_HOME_CHANGE`: {
      return {...state}
    };
    case `@@home/DO_HOME_CHANGE_CALL`: {
      const { data } = action.payload;
      const local: any = localStorage.getItem('state')
      const localParce = JSON.parse(local);     
      localParce.login.data = data;

      return {
        ...state,
        data: localParce,
      };
    }
    case `@@home/DO_HOME_FAILED`: {
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

export const home = (state: RootState) => state.home;