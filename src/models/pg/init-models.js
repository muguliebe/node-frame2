var DataTypes = require("sequelize").DataTypes;
var _com_com_cd = require("./com_com_cd");
var _com_com_grp_cd = require("./com_com_grp_cd");
var _com_user_mst = require("./com_user_mst");
var _flyway_schema_history = require("./flyway_schema_history");
var _log_test = require("./log_test");
var _test = require("./test");
var _tmp = require("./tmp");

function initModels(sequelize) {
  var com_com_cd = _com_com_cd(sequelize, DataTypes);
  var com_com_grp_cd = _com_com_grp_cd(sequelize, DataTypes);
  var com_user_mst = _com_user_mst(sequelize, DataTypes);
  var flyway_schema_history = _flyway_schema_history(sequelize, DataTypes);
  var log_test = _log_test(sequelize, DataTypes);
  var test = _test(sequelize, DataTypes);
  var tmp = _tmp(sequelize, DataTypes);


  return {
    com_com_cd,
    com_com_grp_cd,
    com_user_mst,
    flyway_schema_history,
    log_test,
    test,
    tmp,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
