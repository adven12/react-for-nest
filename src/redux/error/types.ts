    
export enum ErrorActions {
  DO_ERROR = "DO_ERROR",
  SHOW_ERROR = "SHOW_ERROR",
  HIDE_ERROR = "HIDE_ERROR"
}
export interface ErrorState  {
  error: string;
}
export interface ErrorRequest {
  error: string;
}