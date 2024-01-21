const _ = require("lodash");
var { con } = require("../../../database/config/connection");

exports.get_Members = async (req, res) => {
  try {
    let sqlCount = `select count(*) AS count from entrepreneur `;
    let sql = `select * from entrepreneur `;
    let filterSql = "";
    let sortSql = "";

    const { pages, page, sort, filtered } = req.body;
    filtered.forEach((element, index) => {
      filterSql = filterSql + element.id + " = '" + element.value + "' ";
      if (index + 1 != filtered.length) {
        filterSql = filterSql + "AND ";
      }
    });

    sort.forEach((elementSort, indexSort) => {
      const order = elementSort.desc ? "DESC" : "ASC";
      sortSql = sortSql + elementSort.id + " " + order + " ";

      if (indexSort + 1 != sort.length) {
        sortSql = sortSql + ", ";
      }
    });

    if (filterSql != "") {
      sql = sql + "WHERE " + filterSql + " ";
      sqlCount = sqlCount + "WHERE " + filterSql;
    }

    sql = sql + "LIMIT " + pages * page + ", " + pages;

    con(sqlCount, (errCount, resultCount) => {
      if (!errCount) {
        con(sql, (err, result) => {
          if (!err) {
            console.log(resultCount);
            console.log(resultCount[0]);
            console.log(resultCount[0].count);
            const resData = {
              rows: result,
              pages: resultCount[0].count,
            };
            res.status(200).json(resData);
          } else {
            res.status(401).json(err);
          }
        });
      } else {
        res.status(400).json(errCount);
      }
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
