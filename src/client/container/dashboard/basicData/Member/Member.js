import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Translation } from "react-i18next";
import $ from "jquery";
import * as actionCreator from "../../../../actions/Basic_Data/Member/Member_action";

const Table = lazy(() => import("./Member_Table"));

class User_Member extends Component {
  constructor(props) {
    super(props);

    var start_date = new Date();
    const year = start_date.getFullYear() - 18;
    start_date.setFullYear(year);
    start_date = start_date.toISOString().split("T", 1);

    this.state = {
      id: "",
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
    };
  }

  componentDidMount() {
    $('[data-toggle="modal"]').hover(function () {
      $('[data-toggle="modal"]').tooltip();
    });

    $(function () {
      $('[data-toggle="modal"]').tooltip();
    });
  }

  render() {
    return (
      <Translation>
        {(t, { i18n }) => (
          <div>
            <div className="basicdata">
              <div className="card mb3">
                <div className="card-header">
                  <button
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#addUser"
                    title={t("Add Entrepreneur")}
                    onClick={() => {
                      var start_date = new Date();
                      const year = start_date.getFullYear() - 18;
                      start_date.setFullYear(year);
                      start_date = start_date.toISOString().split("T", 1);

                      this.setState({
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
                      });
                    }}
                  >
                    {t("Add Entrepreneur")}
                  </button>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <Suspense fallback={<div>Loading....</div>}>
                      <Table />
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
            <div id="addUser" className="modal fade" role="dialog">
              <div className="modal-dialog">
                <div
                  className="modal-content animate"
                  style={{ width: 950, }}
                >
                  <div className="modal-header">
                    <h4 className="modal-title text-uppercase">
                      {t("Add Entrepreneur")}
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
                    <div id="addData" style={{ paddingLeft: 30 }}>
                      <table>
                        <tbody>
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
                      id="add"
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        // if(this.state.email.toString().trim() !== ''){

                        this.props.add_user(
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
                        // }
                      }}
                    >
                      {t("Save")}
                    </button>
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

    name: state.rLogin.name,
    id: state.rLogin.id,

    tbl_State: state.r_Members.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add_user: (
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
        actionCreator.add_user(
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User_Member);
