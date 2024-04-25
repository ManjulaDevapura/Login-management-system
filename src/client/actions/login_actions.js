import $ from 'jquery';
const axios = require("axios");

export const loginAsync = (data) => {
  return { type: "LOG_IN", data };
};

export const login = (userName, password) => {
  return (dispatch) => {
    axios
      .post("/userValidation", {
        userName: userName,
        password: password,
      })
      .then((res) => {
        $('#error').empty();
        if(!res.data.isLoggedIn){
          $('#error').addClass('alert alert-danger')
          $(`<div>${res.data.error}</div>`).appendTo('#error');
        }else{
          dispatch(loginAsync(res.data));
          this.props.history.push('/entrepreneur')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logout = (isLoggedIn) => {
  return (dispatch) => {
    if (isLoggedIn) {
      dispatch({ type: "LOG_OUT", isLoggedIn });
    }
  };
};

export const count_Async = (noOfMsg) => {
  return { type: "FETCH_Message_count", noOfMsg };
};

export const changePassword = (id, password, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/change_password", {
        id: id,
        password: password,
      })
      .then((res) => {
        const data = {
          password: password,
        };
        dispatch(changePasswordAsync(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const changePasswordAsync = (data) => {
  return { type: "CHANGED_PASSWORD", data };
};
