import $ from "jquery";
const axios = require("axios");

export const fetch_Users = (state, token) => {
  return (dispatch) => {
    // const empData =[{ id: "", name: "", nic:"" }];
    // dispatch(data_Async(empData));
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/user/get_Members", {
        pages: state.pageSize,
        page: state.page,
        sort: state.sorted,
        filtered: state.filtered,
        type: 4, //'Member'
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
  return { type: "FETCH_Members_data", data };
};

export const pageNo_Async = (pageNo) => {
  return { type: "FETCH_Member_pageNo", pageNo };
};

export const loading_Async = (loading) => {
  return { type: "FETCH_Member_loading", loading };
};

export const state_Async = (state) => {
  return { type: "FETCH_Member_state", state };
};

export const add_user = (
  email,
  name,
  lastName,
  gender,
  birthday,
  nic,
  address,
  mobile,
  phone,
  businessName,
  businessPhone,
  businessStartDate,
  businessLegalNature,
  businessRegistrationStatus,
  businessRegistrationNumber,
  businessType,
  businessAnnualTurnover,
  businessNumberOfEmployees,
  businessService,
  secondaryBusinessService,
  businessDescription,
  businessAddress,
  province,
  district,
  divisionalSecretariat,
  user,
  gramaNiladhariDivision,
  businessLocatedInIndustrialZone,
  businessZoneType,
  state,
  token
) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/user/add_Members", {
        email,
        name,
        lastName,
        gender,
        birthday,
        nic,
        address,
        mobile,
        phone,
        businessName,
        businessPhone,
        businessStartDate,
        businessLegalNature,
        businessRegistrationStatus,
        businessRegistrationNumber,
        businessType,
        businessAnnualTurnover,
        businessNumberOfEmployees,
        businessService,
        secondaryBusinessService,
        businessDescription,
        businessAddress,
        province,
        district,
        divisionalSecretariat,
        user,
        gramaNiladhariDivision,
        businessLocatedInIndustrialZone,
        businessZoneType
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(fetch_Users(state, token));
          $("#addUser").modal("toggle");
        }
      });
  };
};

export const update_user = (
  id,
  email,
  name,
  lastName,
  gender,
  birthday,
  nic,
  address,
  mobile,
  phone,
  businessName,
  businessPhone,
  businessStartDate,
  businessLegalNature,
  businessRegistrationStatus,
  businessRegistrationNumber,
  businessType,
  businessAnnualTurnover,
  businessNumberOfEmployees,
  businessService,
  secondaryBusinessService,
  businessDescription,
  businessAddress,
  province,
  district,
  divisionalSecretariat,
  user,
  gramaNiladhariDivision,
  businessLocatedInIndustrialZone,
  businessZoneType,
  state,
  token
) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/user/update_Members", {
        id,
        email,
        name,
        lastName,
        gender,
        birthday,
        nic,
        address,
        mobile,
        phone,
        businessName,
        businessPhone,
        businessStartDate,
        businessLegalNature,
        businessRegistrationStatus,
        businessRegistrationNumber,
        businessType,
        businessAnnualTurnover,
        businessNumberOfEmployees,
        businessService,
        secondaryBusinessService,
        businessDescription,
        businessAddress,
        province,
        district,
        divisionalSecretariat,
        user,
        gramaNiladhariDivision,
        businessLocatedInIndustrialZone,
        businessZoneType
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(fetch_Users(state, token));
          $("#updateUser").modal("toggle");
        }
      });
  };
};

export const delete_user = (userId, state, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios.post("/basicData/user/delete_Members", { userId }).then((res) => {
      if (res.status === 200) {
        dispatch(fetch_Users(state, token));
      }
    });
  };
};

export const update_Activity = (userId, state, token) => {
  return (dispatch) => {
    axios.defaults.headers.common["authorization"] = token;
    axios
      .post("/basicData/user/update_status", { userId})
      .then((res) => {
        if (res.status === 200) {
          dispatch(fetch_Users(state, token));
        }
      });
  };
};
