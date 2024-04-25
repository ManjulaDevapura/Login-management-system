var { con } = require("../../database/config/transac");

exports.change_password = (req, res, next) => {
  let id = req.body.id;
  let password = req.body.password;

  var sql = `
    UPDATE login SET
      password = '${password}',
      first_login = 0
    WHERE id = ${id};`;

  con(sql, (err, result) => {
    res.json("success");
  });
};
