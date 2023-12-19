var express = require("express");
var jwt = require("jsonwebtoken");
var router = express.Router();

//Admin
const { get_UserPermission } = require("../../controllers/basicData/admin/get_UserPermission");
const { get_UserTypes_admin } = require("../../controllers/basicData/admin/get_UserTypes");
const { get_Users_admin } = require("../../controllers/basicData/admin/get_Users");
router.post("/admin/get_UserPermission", get_UserPermission);
router.post("/admin/get_UserTypes", get_UserTypes_admin);
router.post("/admin/get_Users", get_Users_admin);

//UserTypes
const { get_UserTypes } = require("../../controllers/basicData/userTypes/get_UserTypes");
router.post("/userTypes/get_UserTypes", get_UserTypes);

//Users
const { get_Admins } = require("../../controllers/basicData/user/get_Admins");
router.post("/user/get_Admins", get_Admins);

// Member
const { get_Members } = require("../../controllers/basicData/member/get_Members");
const { add_Members } = require("../../controllers/basicData/member/add_Members");
const { update_Members } = require("../../controllers/basicData/member/update_Members");
const { delete_Members } = require("../../controllers/basicData/member/delete_Members");
const { update_Permission } = require("../../controllers/basicData/member/update_UserPermission");
router.post("/user/get_Members", get_Members);
router.post("/user/add_Members", add_Members);
router.post("/user/update_Members", update_Members);
router.post("/user/delete_Members", delete_Members);
router.post("/user/update_status", update_Permission);

module.exports = router;
