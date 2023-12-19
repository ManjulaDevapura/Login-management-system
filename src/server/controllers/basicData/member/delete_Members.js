var { con } = require("../../../database/config/transac");

exports.delete_Members = (req, res, next) => {
  let userId = req.body.userId;

  var sqlUp = `DELETE FROM entrepreneur WHERE id = ${userId} ;`;
  con(sqlUp, (errUp, resultUp) => {
    if (errUp !== "") {
      res.status(400).json(errUp.code);
    } else {
      res.json("success");
    }
  });
}
