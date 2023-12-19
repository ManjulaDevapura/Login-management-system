import React, { Component } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import i18n from "i18next";
import $ from "jquery";
import ReactTable from "react-table";
import "react-table/react-table.css";
import _ from "lodash";

import * as actionCreator from "../../../../actions/Basic_Data/User/Member_action";
const axios = require("axios");

class DO_Table extends Component {
  constructor(props) {
    super(props);

    var start_date = new Date();
    const year = start_date.getFullYear() - 18;
    start_date.setFullYear(year);
    start_date = start_date.toISOString().split("T", 1);

    this.state = {
      data: [],
      pages: null,
      loading: false,
      upd_loginId: 0,

      columns: [
        {
          Header: `${i18n.t("ID")}`,
          accessor: "id",
          width: 50,
          maxWidth: 50,
          minWidth: 50,
        },
        {
          Header: `${i18n.t("Nic")}`,
          accessor: "nic",
        },
        {
          Header: `${i18n.t("Name")}`,
          accessor: "name",
        },
        {
          Header: `${i18n.t("Username")}`,
          accessor: "username",
        },
        {
          Header: `${i18n.t("Password")}`,
          accessor: "password",
        },
        {
          Header: `${i18n.t("Status")}`,
          accessor: "status",
        },
      ],
    };
  }

  componentDidMount() {
    $('[data-toggle="modal"]').hover(function () {
      $('[data-toggle="modal"]').tooltip();
    });
  }

  render() {
    return (
      <Translation>
        {(t, { i18n }) => (
          <div>
            {this.props.dataSet ? (
              <ReactTable
                data={this.props.dataSet}
                pages={this.props.pageNo}
                loading={this.props.loading}
                defaultPageSize={5}
                className="-striped -highlight"
                manual
                onFetchData={(state, instance) => {
                  this.props.fetch_Users(state, this.props.token, 2);
                }}
                columns={this.state.columns}
                previousText={t("Previous")}
                nextText={t("Next")}
                loadingText={t("Loading") + "..."}
                noDataText={t("Oops") + "...!"}
                pageText={t("Page")}
                ofText={t("of")}
                rowsText={t("rows")}
                filterable
                defaultFilterMethod={(filter, row) =>
                  String(row[filter.id]) === filter.value
                }
              />
            ) : (
              ""
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
    token: state.rLogin.token,
    type_Id: state.rLogin.type_Id,

    dataSet: state.r_Users.user_data,
    pageNo: state.r_Users.pageNo,
    loading: state.r_Users.loading,
    tbl_State: state.r_Users.state,

    userType_data: state.r_UserTypes.userType_data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_Users: (state, token, type) => {
      dispatch(actionCreator.fetch_Users(state, token, type));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DO_Table);
