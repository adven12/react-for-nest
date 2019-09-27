import React from "react";
import { ErrorState } from "../../redux/error/types";


export interface ErrorProps {
  error?: any;
}
const style = {
  color: "red"
  
};

class ErrorComponent extends React.Component<ErrorState,any> {
  render() {
     
    return (<h4 style={style}>{this.props.error}</h4>);
  }
}

export default ErrorComponent;