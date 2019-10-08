import { RootState } from "../redux/rootReducer";
import  UsersComponent  from "../сomponents/users/usersComponent";
import { connect } from "react-redux";
import { doUsers } from "../redux/users/actions";


const mapStateToProps = (state: RootState) => ({
  error: state.error,
  isLog: state.login.isLog,
  dataUsers: state.users.dataUsers,
  data: state.login.data
}); 

export default connect(
  mapStateToProps,
  { doUsers }
)(UsersComponent);