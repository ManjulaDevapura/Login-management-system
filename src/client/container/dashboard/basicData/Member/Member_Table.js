import React, { Component } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import i18n from "i18next";
import $ from "jquery";
import ReactTable from "react-table";
import "react-table/react-table.css";
import _ from "lodash";

import * as actionCreator from "../../../../actions/Basic_Data/Member/Member_action";
const axios = require("axios");

class Member_Table extends Component {
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

      id: "",
      status: "",
      email: "",
      name: "",
      lastName: "",
      gender: "",
      birthday: "",
      nic: "",
      address: "",
      mobile: "",
      phone: "",
      businessName: "",
      businessPhone: "",
      businessStartDate: "",
      businessLegalNature: "",
      businessRegistrationStatus: "",
      businessRegistrationNumber: "",
      businessType: "",
      businessAnnualTurnover: "",
      businessNumberOfEmployees: "",
      businessService: "",
      secondaryBusinessService: "",
      businessDescription: "",
      businessAddress: "",
      province: "",
      district: "",
      divisionalSecretariat: "",
      user: "",
      gramaNiladhariDivision: "",
      businessLocatedInIndustrialZone: "",
      businessZoneType: "",

      columns: [
        {
          Header: "Id",
          accessor: "id",
        },
        {
          Header: "Status",
          accessor: "status",
        },
        {
          Header: "Email",
          accessor: "email",
        },
        {
          Header: "Name",
          accessor: "name",
        },
        {
          Header: "Last Name",
          accessor: "lastName",
        },
        {
          Header: "Gender",
          accessor: "gender",
        },
        {
          Header: "Birthday",
          accessor: "birthday",
          Cell: (row) => {
            if (row.original.birthday) {
              let yourDate = new Date(row.original.birthday);
              const year = yourDate.getFullYear();
              const month = String(yourDate.getMonth() + 1).padStart(2, "0");
              const date = String(yourDate.getDate()).padStart(2, "0");
              const formattedDate = `${year}-${month}-${date}`;
              return <span>{formattedDate}</span>;
            } else {
              return <span>{"-"}</span>;
            }
          },
        },
        {
          Header: "Nic",
          accessor: "nic",
        },
        {
          Header: "Address",
          accessor: "address",
        },
        {
          Header: "Mobile",
          accessor: "mobile",
        },
        {
          Header: "Phone",
          accessor: "phone",
        },
        {
          Header: "Business Name",
          accessor: "businessName",
        },
        {
          Header: "Business Phone",
          accessor: "businessPhone",
        },
        {
          Header: "Business Start Date",
          accessor: "businessStartDate",
          Cell: (row) => {
            if (row.original.businessStartDate) {
              let yourDate = new Date(row.original.businessStartDate);
              const year = yourDate.getFullYear();
              const month = String(yourDate.getMonth() + 1).padStart(2, "0");
              const date = String(yourDate.getDate()).padStart(2, "0");
              const formattedDate = `${year}-${month}-${date}`;
              return <span>{formattedDate}</span>;
            } else {
              return <span>{"-"}</span>;
            }
          },
        },
        {
          Header: "Business Legal Nature",
          accessor: "businessLegalNature",
        },
        {
          Header: "Business Registration Status",
          accessor: "businessRegistrationStatus",
        },
        {
          Header: "Business Registration Number",
          accessor: "businessRegistrationNumber",
        },
        {
          Header: "Business Type",
          accessor: "businessType",
        },
        {
          Header: "Business Annual Turnover",
          accessor: "businessAnnualTurnover",
        },
        {
          Header: "Business Number Of Employees",
          accessor: "businessNumberOfEmployees",
        },
        {
          Header: "Business Service",
          accessor: "businessService",
        },
        {
          Header: "Secondary Business Service",
          accessor: "secondaryBusinessService",
        },
        {
          Header: "Business Description",
          accessor: "businessDescription",
        },
        {
          Header: "Business Address",
          accessor: "businessAddress",
        },
        {
          Header: "Province",
          accessor: "province",
        },
        {
          Header: "District",
          accessor: "district",
        },
        {
          Header: "Divisional Secretariat",
          accessor: "divisionalSecretariat",
        },
        {
          Header: "User",
          accessor: "user",
        },
        {
          Header: "Grama Niladhari Division",
          accessor: "gramaNiladhariDivision",
        },
        {
          Header: "Business Located In Industrial Zone",
          accessor: "businessLocatedInIndustrialZone",
        },
        {
          Header: "Business Zone Type",
          accessor: "businessZoneType",
        },
        {
          Header: `${i18n.t("Actions")}`,
          accessor: "id",
          sortable: false,
          filterable: false,
          width: 150,
          maxWidth: 150,
          minWidth: 100,
          Cell: (row) => {
            return (
              <div>
                <button
                  id="update"
                  data-toggle="modal"
                  title={i18n.t("Update")}
                  data-target="#updateUser"
                  data-trigger="hover"
                  className="btn btn-sm"
                  onClick={() => {
                    let dateObjBS = new Date(row.original.businessStartDate);
                    const yearBS = dateObjBS.getFullYear();
                    const monthBS = String(dateObjBS.getMonth() + 1).padStart(
                      2,
                      "0"
                    );
                    const dateBS = String(dateObjBS.getDate()).padStart(2, "0");
                    const formattedBS = `${yearBS}-${monthBS}-${dateBS}`;

                    let dateObjBD = new Date(row.original.birthday);
                    const yearBD = dateObjBD.getFullYear();
                    const monthBD = String(dateObjBD.getMonth() + 1).padStart(
                      2,
                      "0"
                    );
                    const dateBD = String(dateObjBD.getDate()).padStart(2, "0");
                    const formattedBD = `${yearBD}-${monthBD}-${dateBD}`;

                    this.setState({
                      id: row.original.id,
                      status: row.original.status,
                      email: row.original.email,
                      name: row.original.name,
                      lastName: row.original.lastName,
                      gender: row.original.gender,
                      birthday: formattedBD,
                      nic: row.original.nic,
                      address: row.original.address,
                      mobile: row.original.mobile,
                      phone: row.original.phone,
                      businessName: row.original.businessName,
                      businessPhone: row.original.businessPhone,
                      businessStartDate: formattedBS,
                      businessLegalNature: row.original.businessLegalNature,
                      businessRegistrationStatus:
                        row.original.businessRegistrationStatus,
                      businessRegistrationNumber:
                        row.original.businessRegistrationNumber,
                      businessType: row.original.businessType,
                      businessAnnualTurnover:
                        row.original.businessAnnualTurnover,
                      businessNumberOfEmployees:
                        row.original.businessNumberOfEmployees,
                      businessService: row.original.businessService,
                      secondaryBusinessService:
                        row.original.secondaryBusinessService,
                      businessDescription: row.original.businessDescription,
                      businessAddress: row.original.businessAddress,
                      province: row.original.province,
                      district: row.original.district,
                      divisionalSecretariat: row.original.divisionalSecretariat,
                      user: row.original.user,
                      gramaNiladhariDivision:
                        row.original.gramaNiladhariDivision,
                      businessLocatedInIndustrialZone:
                        row.original.businessLocatedInIndustrialZone,
                      businessZoneType: row.original.businessZoneType,
                    });
                  }}
                >
                  <i className="fas fa-pencil-alt"></i>
                </button>

                <button
                  id="delete"
                  data-toggle="modal"
                  title={i18n.t("Delete")}
                  // data-target="#section"
                  className="btn btn-sm"
                  onClick={() => {
                    this.props.delete_user(
                      row.original.id,
                      this.props.tbl_State,
                      this.props.token
                    );
                  }}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            ); //,
          },
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
                  this.props.fetch_Users(state, this.props.token);
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
                // defaultFilterMethod={(filter, row) =>{
                //   String(row[filter.id]) === filter.value
                // }
                defaultFilterMethod={(filter, row) => {
                  const id = filter.pivotId || filter.id;
                  return row[id] !== undefined
                    ? String(row[id].toLowerCase()).startsWith(
                        filter.value.toLowerCase()
                      )
                    : true;
                }}
              />
            ) : (
              ""
            )}

            <div id="updateUser" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content animate" style={{ width: 950 }}>
                  <div className="modal-header">
                    <h4 className="modal-title text-uppercase">
                      {t("Update")}
                    </h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </div>
                  <div className="modal-body">
                    <div id="updData" style={{ paddingLeft: 30 }}>
                      <table>
                        <tbody>
                          <tr style={{ height: 50 }}>
                            <td>{t("Id")}* :</td>
                            <td>
                              <input
                                id="id"
                                value={this.state.id}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                disabled={true}
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>{t("Status")}* :</td>
                            <td>
                              <input
                                id="status"
                                value={this.state.status}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                disabled={true}
                              />
                            </td>
                          </tr>

                          <tr style={{ height: 50 }}>
                            <td>{t("Email")}* :</td>
                            <td>
                              <input
                                id="email"
                                value={this.state.email}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ email: e.target.value })
                                }
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>{t("Name")}* :</td>
                            <td>
                              <input
                                id="name"
                                value={this.state.name}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ name: e.target.value })
                                }
                              />
                            </td>
                          </tr>

                          <tr style={{ height: 50 }}>
                            <td>{t("Last Name")}* :</td>
                            <td>
                              <input
                                id="lastName"
                                value={this.state.lastName}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ lastName: e.target.value })
                                }
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>{t("Gender")}* :</td>
                            <td>
                              <input
                                id="gender"
                                value={this.state.gender}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ gender: e.target.value })
                                }
                              />
                            </td>
                          </tr>

                          <tr style={{ height: 50 }}>
                            <td>{t("Birthday")}* :</td>
                            <td>
                              <input
                                id="birthday"
                                value={this.state.birthday}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ birthday: e.target.value })
                                }
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>{t("NIC")}* :</td>
                            <td>
                              <input
                                id="nic"
                                value={this.state.nic}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ nic: e.target.value })
                                }
                              />
                            </td>
                          </tr>

                          <tr style={{ height: 50 }}>
                            <td>{t("Address")}* :</td>
                            <td>
                              <input
                                id="address"
                                value={this.state.address}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ address: e.target.value })
                                }
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>{t("Mobile")}* :</td>
                            <td>
                              <input
                                id="mobile"
                                value={this.state.mobile}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ mobile: e.target.value })
                                }
                              />
                            </td>
                          </tr>

                          <tr style={{ height: 50 }}>
                            <td>{t("Phone")}* :</td>
                            <td>
                              <input
                                id="phone"
                                value={this.state.phone}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ phone: e.target.value })
                                }
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>{t("Business Name")}* :</td>
                            <td>
                              <input
                                id="businessName"
                                value={this.state.businessName}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({
                                    businessName: e.target.value,
                                  })
                                }
                              />
                            </td>
                          </tr>

                          <tr style={{ height: 50 }}>
                            <td>{t("Business Phone")}* :</td>
                            <td>
                              <input
                                id="businessPhone"
                                value={this.state.businessPhone}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({
                                    businessPhone: e.target.value,
                                  })
                                }
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>{t("Business Start Date")}* :</td>
                            <td>
                              <input
                                id="businessStartDate"
                                value={this.state.businessStartDate}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({
                                    businessStartDate: e.target.value,
                                  })
                                }
                              />
                            </td>
                          </tr>

                          <tr style={{ height: 50 }}>
                            <td>{t("Business Legal Nature")}* :</td>
                            <td>
                              <input
                                id="businessLegalNature"
                                value={this.state.businessLegalNature}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({
                                    businessLegalNature: e.target.value,
                                  })
                                }
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>{t("Business Registration Status")}* :</td>
                            <td>
                              <input
                                id="businessRegistrationStatus"
                                value={this.state.businessRegistrationStatus}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({
                                    businessRegistrationStatus: e.target.value,
                                  })
                                }
                              />
                            </td>
                          </tr>

                          <tr style={{ height: 50 }}>
                            <td>{t("Business Registration Number")}* :</td>
                            <td>
                              <input
                                id="businessRegistrationNumber"
                                value={this.state.businessRegistrationNumber}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({
                                    businessRegistrationNumber: e.target.value,
                                  })
                                }
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>{t("Business Type")}* :</td>
                            <td>
                              <input
                                id="businessType"
                                value={this.state.businessType}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({
                                    businessType: e.target.value,
                                  })
                                }
                              />
                            </td>
                          </tr>

                          <tr style={{ height: 50 }}>
                            <td>{t("Business Annual Turnover")}* :</td>
                            <td>
                              <input
                                id="businessAnnualTurnover"
                                value={this.state.businessAnnualTurnover}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({
                                    businessAnnualTurnover: e.target.value,
                                  })
                                }
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>{t("Business Number Of Employees")}* :</td>
                            <td>
                              <input
                                id="businessNumberOfEmployees"
                                value={this.state.businessNumberOfEmployees}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({
                                    businessNumberOfEmployees: e.target.value,
                                  })
                                }
                              />
                            </td>
                          </tr>

                          <tr style={{ height: 50 }}>
                            <td>{t("Business Service")}* :</td>
                            <td>
                              <input
                                id="businessService"
                                value={this.state.businessService}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({
                                    businessService: e.target.value,
                                  })
                                }
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>{t("Secondary Business Service")}* :</td>
                            <td>
                              <input
                                id="secondaryBusinessService"
                                value={this.state.secondaryBusinessService}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({
                                    secondaryBusinessService: e.target.value,
                                  })
                                }
                              />
                            </td>
                          </tr>

                          <tr style={{ height: 50 }}>
                            <td>{t("Business Description")}* :</td>
                            <td>
                              <input
                                id="businessDescription"
                                value={this.state.businessDescription}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({
                                    businessDescription: e.target.value,
                                  })
                                }
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>{t("Business Address")}* :</td>
                            <td>
                              <input
                                id="businessAddress"
                                value={this.state.businessAddress}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({
                                    businessAddress: e.target.value,
                                  })
                                }
                              />
                            </td>
                          </tr>

                          <tr style={{ height: 50 }}>
                            <td>{t("Province")}* :</td>
                            <td>
                              <input
                                id="province"
                                value={this.state.province}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ province: e.target.value })
                                }
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>{t("District")}* :</td>
                            <td>
                              <input
                                id="district"
                                value={this.state.district}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ district: e.target.value })
                                }
                              />
                            </td>
                          </tr>

                          <tr style={{ height: 50 }}>
                            <td>{t("Divisional Secretariat")}* :</td>
                            <td>
                              <input
                                id="divisionalSecretariat"
                                value={this.state.divisionalSecretariat}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({
                                    divisionalSecretariat: e.target.value,
                                  })
                                }
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>{t("User")}* :</td>
                            <td>
                              <input
                                id="user"
                                value={this.state.user}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({ user: e.target.value })
                                }
                              />
                            </td>
                          </tr>

                          <tr style={{ height: 50 }}>
                            <td>{t("Grama Niladhari Division")}* :</td>
                            <td>
                              <input
                                id="gramaNiladhariDivision"
                                value={this.state.gramaNiladhariDivision}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({
                                    gramaNiladhariDivision: e.target.value,
                                  })
                                }
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                            <td>
                              {t("Business Located In Industrial Zone")}* :
                            </td>
                            <td>
                              <input
                                id="businessLocatedInIndustrialZone"
                                value={
                                  this.state.businessLocatedInIndustrialZone
                                }
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({
                                    businessLocatedInIndustrialZone:
                                      e.target.value,
                                  })
                                }
                              />
                            </td>
                          </tr>

                          <tr style={{ height: 50 }}>
                            <td>{t("Business Zone Type")}* :</td>
                            <td>
                              <input
                                id="businessZoneType"
                                value={this.state.businessZoneType}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                onChange={(e) =>
                                  this.setState({
                                    businessZoneType: e.target.value,
                                  })
                                }
                              />
                            </td>
                            <td style={{ width: 20 }}></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      id="upd"
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        this.props.update_user(
                          this.state.id,
                          this.state.email,
                          this.state.name,
                          this.state.lastName,
                          this.state.gender,
                          this.state.birthday,
                          this.state.nic,
                          this.state.address,
                          this.state.mobile,
                          this.state.phone,
                          this.state.businessName,
                          this.state.businessPhone,
                          this.state.businessStartDate,
                          this.state.businessLegalNature,
                          this.state.businessRegistrationStatus,
                          this.state.businessRegistrationNumber,
                          this.state.businessType,
                          this.state.businessAnnualTurnover,
                          this.state.businessNumberOfEmployees,
                          this.state.businessService,
                          this.state.secondaryBusinessService,
                          this.state.businessDescription,
                          this.state.businessAddress,
                          this.state.province,
                          this.state.district,
                          this.state.divisionalSecretariat,
                          this.state.user,
                          this.state.gramaNiladhariDivision,
                          this.state.businessLocatedInIndustrialZone,
                          this.state.businessZoneType,
                          this.props.tbl_State,
                          this.props.token
                        );
                      }}
                    >
                      {t("Save")}
                    </button>
                    {(this.props.type_Id === 1 || this.props.type_Id === 3) &&
                      this.state.status === "Pending" && (
                        <button
                          type="button"
                          className="btn btn-warning"
                          data-dismiss="modal"
                          onClick={() => {
                            this.props.update_Activity(
                              this.state.id,
                              this.props.tbl_State,
                              this.props.token
                            );
                          }}
                        >
                          {t("Approve")}
                        </button>
                      )}
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      {t("Close")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
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

    dataSet: state.r_Members.user_data,
    pageNo: state.r_Members.pageNo,
    loading: state.r_Members.loading,
    tbl_State: state.r_Members.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_Users: (state, token) => {
      dispatch(actionCreator.fetch_Users(state, token));
    },
    delete_user: (user_Id, state, token) => {
      dispatch(actionCreator.delete_user(user_Id, state, token));
    },
    update_user: (
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
      dispatch(
        actionCreator.update_user(
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
        )
      );
    },
    update_Activity: (userId, state, token) => {
      dispatch(actionCreator.update_Activity(userId, state, token));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Member_Table);
