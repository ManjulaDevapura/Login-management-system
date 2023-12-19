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
        console.log(res.data);
        // this.props.history.push('/tvLine')
        dispatch(loginAsync(res.data));
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
