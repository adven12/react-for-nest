import {  HomeModalRequest} from "./types";

export function doHome() {
  return { type: `@@home/DO_HOME` };
}
export function doHomeChange(data: HomeModalRequest, id:HomeModalRequest) {
  return {
     type: `@@home/DO_HOME_CHANGE`,
      data,id };
}
