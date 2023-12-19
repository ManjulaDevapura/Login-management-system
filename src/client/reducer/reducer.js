import { combineReducers } from "redux";

import reducerLogin from "./reducerLogin";
import reducer_Admin_UserPermission from "./basicData/reducer_Admin_UserPermission";
import reducer_UserTypes from "./basicData/reducer_UserTypes";
import reducer_Users from "./basicData/reducer_Users";
import reducer_Members from "./basicData/reducer_Members";
import reducer_Messages from "./basicData/reducer_Messages";
import reducer_Home from "./basicData/reducer_Home";

export const rootReducer = combineReducers({
  rLogin: reducerLogin,
  r_Admin_UserPermission: reducer_Admin_UserPermission,
  r_UserTypes: reducer_UserTypes,
  r_Users: reducer_Users,
  r_Members: reducer_Members,
  r_Message: reducer_Messages,
  r_Home: reducer_Home,
});
