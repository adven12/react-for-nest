import { RootState } from "../redux/rootReducer";
import  ErrorComponent   from "../сomponents/error/errorComponent";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState) => ({
    error: state.error.error
  });
  
  export default connect(
    mapStateToProps
    )(ErrorComponent);