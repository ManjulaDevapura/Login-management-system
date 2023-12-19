var { con } = require("../../../database/config/transac");

exports.update_Permission = (req, res, next) => {
  let userId = req.body.userId;

  var sql = `UPDATE entrepreneur SET 
                status = 'Approved'
                    WHERE id = ${userId} ;`;

  con(sql, (err, result) => {
    res.json("success");
  });
};
