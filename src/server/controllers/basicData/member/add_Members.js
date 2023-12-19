var { con } = require("../../../database/config/transac");
var conGet = require("../../../database/config/connection");
var md5 = require("blueimp-md5");
var nodemailer = require("nodemailer");
var Messenger = require("../../../messenger/messenger");

exports.add_Members = (req, res, next) => {
  let email = req.body.email;
  let name = req.body.name;
  let lastName = req.body.lastName;
  let gender = req.body.gender;
  let birthday = req.body.birthday;
  let nic = req.body.nic;
  let address = req.body.address;
  let mobile = req.body.mobile;
  let phone = req.body.phone;
  let businessName = req.body.businessName;
  let businessPhone = req.body.businessPhone;
  let businessStartDate = req.body.businessStartDate;
  let businessLegalNature = req.body.businessLegalNature;
  let businessRegistrationStatus = req.body.businessRegistrationStatus;
  let businessRegistrationNumber = req.body.businessRegistrationNumber;
  let businessType = req.body.businessType;
  let businessAnnualTurnover = req.body.businessAnnualTurnover;
  let businessNumberOfEmployees = req.body.businessNumberOfEmployees;
  let businessService = req.body.businessService;
  let secondaryBusinessService = req.body.secondaryBusinessService;
  let businessDescription = req.body.businessDescription;
  let businessAddress = req.body.businessAddress;
  let province = req.body.province;
  let district = req.body.district;
  let divisionalSecretariat = req.body.divisionalSecretariat;
  let user = req.body.user;
  let gramaNiladhariDivision = req.body.gramaNiladhariDivision;
  let businessLocatedInIndustrialZone = req.body.businessLocatedInIndustrialZone;
  let businessZoneType = req.body.businessZoneType;


  var sql_user = `INSERT INTO entrepreneur 
    (
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
    )
    VALUES
    (
      '${email}',
      '${name}',
      '${lastName}',
      '${gender}',
      '${birthday}',
      '${nic}',
      '${address}',
      '${mobile}',
      '${phone}',
      '${businessName}',
      '${businessPhone}',
      '${businessStartDate}',
      '${businessLegalNature}',
      '${businessRegistrationStatus}',
      '${businessRegistrationNumber}',
      '${businessType}',
      '${businessAnnualTurnover}',
      '${businessNumberOfEmployees}',
      '${businessService}',
      '${secondaryBusinessService}',
      '${businessDescription}',
      '${businessAddress}',
      '${province}',
      '${district}',
      '${divisionalSecretariat}',
      '${user}',
      '${gramaNiladhariDivision}',
      '${businessLocatedInIndustrialZone}',
      '${businessZoneType}'
    );`;

  con(sql_user, (err_user, result_user) => {
    if (err_user !== "") {
      res.status(400).json(err_user.code);
    } else {
      res.json("success");
    }
  });
};
