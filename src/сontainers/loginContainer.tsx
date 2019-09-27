import { connect } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { LoginComponent } from "../сomponents/login/loginComponent";
import { doLogin } from "../redux/login/actions";

const mapStateToProps = (state: RootState) => ({
  isLog: state.login.isLog,
  data: state.login.data,
});
 
export default connect(
  mapStateToProps,
  { doLogin }
)(LoginComponent);