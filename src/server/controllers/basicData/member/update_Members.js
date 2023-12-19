var { con } = require("../../../database/config/transac");

exports.update_Members = (req, res, next) => {
  let id = req.body.id;
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
  let businessLocatedInIndustrialZone =
    req.body.businessLocatedInIndustrialZone;
  let businessZoneType = req.body.businessZoneType;

  var sql = `
    UPDATE entrepreneur SET
      email = '${email}', 
      name = '${name}', 
      lastName = '${lastName}', 
      gender = '${gender}', 
      birthday = '${birthday}', 
      nic = '${nic}', 
      address = '${address}', 
      mobile = '${mobile}', 
      phone = '${phone}', 
      businessName = '${businessName}', 
      businessPhone = '${businessPhone}', 
      businessStartDate = '${businessStartDate}', 
      businessLegalNature = '${businessLegalNature}', 
      businessRegistrationStatus = '${businessRegistrationStatus}', 
      businessRegistrationNumber = '${businessRegistrationNumber}', 
      businessType = '${businessType}', 
      businessAnnualTurnover = '${businessAnnualTurnover}', 
      businessNumberOfEmployees = '${businessNumberOfEmployees}', 
      businessService = '${businessService}', 
      secondaryBusinessService = '${secondaryBusinessService}', 
      businessDescription = '${businessDescription}', 
      businessAddress = '${businessAddress}', 
      province = '${province}', 
      district = '${district}', 
      divisionalSecretariat = '${divisionalSecretariat}', 
      user = '${user}', 
      gramaNiladhariDivision = '${gramaNiladhariDivision}', 
      businessLocatedInIndustrialZone = '${businessLocatedInIndustrialZone}', 
      businessZoneType = '${businessZoneType}'
    WHERE id = ${id};`;

  con(sql, (err, result) => {
    res.json("success");
  });
};
