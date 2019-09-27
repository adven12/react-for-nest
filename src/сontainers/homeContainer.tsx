import { RootState } from "../redux/rootReducer";
import  HomeComponent   from "../сomponents/home/homeComponent";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState) => ({
  error: state.error.error,
  isLog: state.login.isLog,
  dataL: state.login.data,
  dataH: state.home.data
});

export default connect(
  mapStateToProps,
)(HomeComponent);