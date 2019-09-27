
export interface HomeState {
error: string;
isLog: boolean,
email: string,
name: string,
data: any,
}
export interface HomeLogicState  {
  email: string;
  name: string;
  changePhoto: string,
}
export interface HomeModalRequest {
  id: number;
  data: string;
}
