import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import i18n from "i18next";
import $ from "jquery";

import * as actionCreator from "../../actions/login_actions";

class ChangeLogin extends Component {
  handle = async (event) => {
    event.preventDefault();
    $("#error").empty();
    if (this.refs.confirmPassword.value !== "" && this.refs.password.value !== "" && this.refs.password.value===this.refs.confirmPassword.value) {
      await this.props.changePassword(
        this.props.id,
        this.refs.password.value,
        this.props.token
      );
    } else if (
      this.refs.confirmPassword.value !== this.refs.password.value
    ) {
      $("#error").addClass("alert alert-danger");
      $("<div>Password and confirm password does not matched</div>").appendTo("#error");
    }else if (
      this.refs.confirmPassword.value === "" &&
      this.refs.password.value === ""
    ) {
      $("#error").addClass("alert alert-danger");
      $("<div>Enter password and confirm password</div>").appendTo("#error");
    } else if (this.refs.confirmPassword.value === "") {
      $("<div>Enter confirm password</div>").appendTo("#error");
    } else if (this.refs.password.value === "") {
      $("<div>Enter password</div>").appendTo("#error");
    } else if (this.props.error !== null) {
      $(`<div>${this.props.error}</div>`).appendTo("#error");
    }
  };

  componentDidUpdate() {
    $("#error").empty();
    if (this.props.isLoggedIn) {
      i18n.changeLanguage(this.props.language);
      // this.props.history.push("/home");
    } else if (this.props.error !== null) {
      // error validation
      console.log(this.props.error);
      $("#error").addClass("alert alert-danger");
      $(`<div>${this.props.error}</div>`).appendTo("#error");
    } else {
      $("#error").addClass("alert alert-danger");
      $(`<div>${this.props.error}</div>`).appendTo("#error");
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="card card-login mx-auto mt-5">
            <div className="card-header">Change Login Password</div>
            <div className="card-body">
              <div id="error" className=""></div>
              <form>
                <div className="form-group">
                  <div className="form-label-group">
                    <div className="table">
                      <div className="row">
                        <div className="col-lg-4">New Password</div>
                        <div className="col-lg-8">
                          <input
                            id="inputPassword"
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            name="password"
                            autoComplete="current-password"
                            ref="password"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-label-group">
                    <div className="table">
                      <div className="row">
                        <div className="col-lg-4">Confirm Password</div>
                        <div className="col-lg-8">
                          <input
                            id="confirmPassword"
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            name="confirmPassword"
                            autoComplete="current-password"
                            ref="confirmPassword"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  className="btn btn-primary btn-block"
                  id="submit"
                  type="submit"
                  onClick={this.handle}
                  value="Change Password"
                ></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.rLogin.isLoggedIn,
    loginId: state.rLogin.id,
    language: state.rLogin.language,
    error: state.rLogin.error,
    token: state.rLogin.token,
    id: state.rLogin.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePassword: (loginId, password, token) => {
      dispatch(actionCreator.changePassword(loginId, password, token));
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChangeLogin)
);
