import { RootState } from "../rootReducer";
import { RegistrationState } from "./types";

export const initialState: RegistrationState = {
  email: "",
  password: "",
  name: '',
  avatar: "",
  isLog: false,
};

export function registrationReducer(state: RegistrationState = initialState, action: any) {
  switch (action.type) {
    case `@@registration/DO_REGISTRATION`: {
      return {
        ...state,
      };
    }
    case `@@registration/REGISTRATION_FAILED`: {
      const { error } = action.payload;
      return {
        ...state,
        error: error
      };
    }

    case `@@registration/REGISTRATION_SUCCESS`: {
      return {
        ...state,
       isLog: true
      };
    }
   
    default:
      return state;
  }
}

export const registration = (state: RootState) => state.registration;