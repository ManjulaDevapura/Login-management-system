import $ from "jquery";
const axios = require("axios");

export const fetch_Users = (state, token, type) => {
  return (dispatch) => {
    data_Async([]);
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/user/get_Admins", {
        pages: state.pageSize,
        page: state.page,
        sort: state.sorted,
        filtered: state.filtered,
        type: type, 
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(data_Async(res.data.rows));
          dispatch(pageNo_Async(res.data.pages));
          dispatch(loading_Async(false));
          dispatch(state_Async(state));
        }
      });
  };
};

export const data_Async = (data) => {
  return { type: "FETCH_Users_data", data };
};

export const pageNo_Async = (pageNo) => {
  return { type: "FETCH_User_pageNo", pageNo };
};

export const loading_Async = (loading) => {
  return { type: "FETCH_User_loading", loading };
};

export const state_Async = (state) => {
  return { type: "FETCH_User_state", state };
};
