
import { RegistrationRequest } from "./types";


export function doRegistration(data: RegistrationRequest) {
  return {
     type: `@@registration/DO_REGISTRATION`,
      data };
}
