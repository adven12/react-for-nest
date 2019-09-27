import { ErrorRequest } from "./types";

export function doError(error: ErrorRequest) {
  return { type: `@@error/DO_ERROR`, error };
}