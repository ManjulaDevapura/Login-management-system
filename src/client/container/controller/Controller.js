import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
// import $ from 'jquery';

import Navigation from "../navigation/Navigation";
import LogIn from "../login/LogIn";
import ChangeLogin from "../login/ChangeLogin";
import Home from "../dashboard/Home";

// language image
import en from "../Images/en.png";
import fr from "../Images/fr.png";

// Main classes content

import User_DO from "../dashboard/basicData/User/DO";
import User_EPO from "../dashboard/basicData/User/EPO";

import User_Member from "../dashboard/basicData/Member/Member";

import NoEntry from "../dashboard/basicData/NoEntry";
// loading images
import loading from "../Images/guard.gif";
import GymSIgn from "../Images/Gym1.gif";
import GymSIgn2 from "../Images/Gym2.gif";
// import i18next from 'i18next';
import Toast from "../components/Toast";
import $ from "jquery";

import * as actionCreator from "../../actions/login_actions";

export class Controller extends Component {
  componentDidUpdate() {}

  render() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <div>
        <div>
          <Route path="/user" component={User_DO} exact />
          <Route path="/user/do" component={User_DO} />
          <Route path="/user/epo" component={User_EPO} />

          <Route path="/entrepreneur" component={User_Member} exact />
        </div>
      </div>
    );

    // if(!this.props.isLoggedIn){
    //   return(<div style={{backgroundColor: "black", height: "100vh", weight: "100%"}}>
    //   <Route path="/" component={LogIn}  />
    //   </div>)
    // }else if(this.props.isLoggedIn)
    // {
    return (
      <Translation>
        {(t, { i18n }) => (
          <div>
            {/* Top nav bar */}
            <nav className="navbar navbar-expand navbar-dark bg-dark static-top">
              <NavLink
                className="navbar-brand mr-1 main-logo"
                style={{
                  height: 40,
                  alignContent: "center",
                  textAlign: "center",
                }}
                to="/home"
              >
                <span
                  style={{
                    height: 40,
                    alignContent: "center",
                    textAlign: "center",
                    alignItems: "center",
                    fontWeight: "bold",
                    fontSize: 20,
                    paddingLeft: 0,
                  }}
                >
                  {t("Login Management System")}
                </span>
              </NavLink>

              <button
                className="btn btn-link btn-sm text-white order-1 order-sm-0"
                id="sidebarToggle"
              >
                <i className="fas fa-bars"></i>
              </button>

              <div id="content-wrapper" style={{ height: 40 }}>
                <div className="container-fluid">
                  <ol className="breadcrumb" style={{ height: 40 }}>
                    <li className="breadcrumb-item" style={{ height: 30 }}>
                      <NavLink to={this.props.location.pathname.split("/")[0]}>
                        {this.props.location.pathname.slice(1).split("/")[0]}
                      </NavLink>
                    </li>
                    <li className="breadcrumb-item" style={{ height: 30 }}>
                      <NavLink to={this.props.location.pathname.split("/")[1]}>
                        {this.props.location.pathname.slice(1).split("/")[1]}
                      </NavLink>
                    </li>
                    {/* {(this.props.location.pathname).slice(1).split('/').join('/')} */}
                  </ol>
                </div>
              </div>
              {/* Nav items */}
              <ul className="navbar-nav ml-auto">
                {/* Welcome message */}
                {this.props.name === "" ? (
                  ""
                ) : (
                  <li className="nav-item dropdown no-arrow">
                    <div style={{ color: "white" }} className="nav-link">
                      {t("")}
                      {""}
                      {this.props.type}
                      {" - "}
                      <span style={{ textShadow: "2px 2px #398714" }}>
                        {this.props.name}{" "}
                      </span>

                      {/* {this.props.noOfMsg!=1?<div class="supMsg">
                      <i className="far fa-envelope"></i>
                      <sup  style={{ color: "red", fontWeight: "bold", fontSize: 20, animationName: "msgSup" }}>
                        {this.props.noOfMsg}
                      </sup>
                      </div>
                      :
                      <></>} */}
                    </div>
                  </li>
                )}

                <li className="nav-item dropdown no-arrow">
                  <div style={{ color: "white" }} className="nav-link">
                    {this.props.noOfMsg != 0 ? (
                      <div class="supMsg">
                        <i className="far fa-envelope fa-1x"></i>
                        <sup
                          class="supMsg"
                          style={{
                            color: "green",
                            fontWeight: "bold",
                            fontSize: 17,
                          }}
                        >
                          {this.props.noOfMsg}
                        </sup>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </li>

                {/* Logout */}
                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    href=" "
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user-circle fa-fw"></i>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="userDropdown"
                  >
                    <div className="dropdown-item">{this.props.name}</div>
                    <hr></hr>
                    <button
                      id="logout"
                      className="dropdown-item"
                      data-toggle="modal"
                      data-target="#logoutModal"
                      onClick={() => {
                        this.props.logout(this.props.isLoggedIn);
                      }}
                    >
                      {t("Logout")}
                    </button>
                  </div>
                </li>
              </ul>
            </nav>

            {this.props.isLoggedIn && !this.props.first_login ? (
              <div>
                {/* Sidebar + Content */}
                <div id="wrapper">
                  {/* Sidebar */}
                  <div
                    className="sidebar navbar-nav"
                    style={{
                      display: this.props.type_Id != 4 ? "block" : "none",
                    }}
                  >
                    {this.props.type_Id != 4 ? <Navigation /> : null}
                  </div>

                  {/* check user is logged in  */}
                  <div id="content-wrapper">
                    <div className="container-fluid">
                      {/* show current location */}
                      {/* <ol className='breadcrumb'>

                                        <li className='breadcrumb-item'><NavLink to={(this.props.location.pathname).split('/')[0]}>{(this.props.location.pathname).slice(1).split('/')[0]}</NavLink></li>
                                        <li className='breadcrumb-item'><NavLink to={(this.props.location.pathname).split('/')[1]}>{(this.props.location.pathname).slice(1).split('/')[1]}</NavLink></li>

                                        {/* {(this.props.location.pathname).slice(1).split('/').join('/')} */}
                      {/* </ol> */}
                      {/* {/*  */}
                      {/* <Route path="/" component={LogIn} exact />  */}
                      {/* */}

                      {/* if logged in, navigate to home page else navigate to login page*/}
                      {this.props.isLoggedIn && !this.props.first_login ? (
                        <>
                          <PrivateRoute />
                          <div id="ToastSection">
                            <div
                              id="errorToast"
                              className="toast"
                              role="alert"
                              aria-live="assertive"
                              aria-atomic="true"
                              autohide="true"
                              data-animation="true"
                              data-delay="20000"
                              style={{
                                position: "fixed",
                                bottom: "2px",
                                right: "3px",
                              }}
                            >
                              <Toast id="errT" />
                            </div>
                          </div>
                        </>
                      ) : this.props.location.pathname === "/" ? null : (
                        <div>
                          <img src={loading} alt={"loading"} />
                          <span style={{ color: "red", fontWeight: "bold" }}>
                            {t("Please")}
                          </span>{" "}
                          <NavLink to="/">{t("Login")}</NavLink>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* </div>):(<div style={{backgroundColor: 'black',backgroundImage: `url(${supunJPG})`,width:'100%', height:650,  */}
              </div>
            ) : (
              <div
                style={{
                  width: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "fixed",
                  backgroundSize: "100%",
                }}
              >
                <div className="table">
                  <div className="row">
                    <div className="col-lg-3"> </div>
                    <div className="col-lg-6">
                      {!this.props.isLoggedIn ? (
                        <Route path="/" component={LogIn} />
                      ) : (
                        <></>
                      )}
                      {this.props.isLoggedIn && this.props.first_login ? (
                        <Route path="/" component={ChangeLogin} />
                      ) : (
                        <></>
                      )}
                    </div>

                    <div className="col-lg-3"> </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      {/* <img src={GymSIgn} alt={"loading"} style={{borderStyle: "solid", borderWidth: 0, borderColor: "black"}} /> */}
                    </div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                      {/* <img src={GymSIgn} alt={"loading"} style={{borderStyle: "solid", borderWidth: 0, borderColor: "black"}} /> */}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </Translation>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.rLogin.isLoggedIn,
    first_login: state.rLogin.first_login,
    isChangedPassword: state.rLogin.isChangedPassword,
    name: state.rLogin.name,
    type: state.rLogin.type,
    type_Id: state.rLogin.type_Id,
    noOfMsg: state.r_Message.noOfMsg,
    user_Id: state.rLogin.user_Id,
    token: state.rLogin.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (isLoggedIn) => {
      dispatch(actionCreator.logout(isLoggedIn));
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Controller)
);
