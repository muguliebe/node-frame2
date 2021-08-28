var DataTypes = require("sequelize").DataTypes;
var _bct_ohlcv_hst = require("./bct_ohlcv_hst");
var _bct_ohlcv_hst_bak_210718 = require("./bct_ohlcv_hst_bak_210718");
var _bct_ohlcv_hst_bak_210828 = require("./bct_ohlcv_hst_bak_210828");
var _btc_symbol_mst = require("./btc_symbol_mst");
var _btt_csv_mst = require("./btt_csv_mst");
var _btt_prmt_mst = require("./btt_prmt_mst");
var _btt_test_hst = require("./btt_test_hst");
var _com_com_cd = require("./com_com_cd");
var _com_com_grp_cd = require("./com_com_grp_cd");
var _com_prmt_mst = require("./com_prmt_mst");
var _com_user_mst = require("./com_user_mst");
var _flyway_schema_history = require("./flyway_schema_history");
var _fwk_tr_hst = require("./fwk_tr_hst");
var _fwk_transaction_hst = require("./fwk_transaction_hst");
var _log_test = require("./log_test");
var _test = require("./test");
var _tmp = require("./tmp");

function initModels(sequelize) {
  var bct_ohlcv_hst = _bct_ohlcv_hst(sequelize, DataTypes);
  var bct_ohlcv_hst_bak_210718 = _bct_ohlcv_hst_bak_210718(sequelize, DataTypes);
  var bct_ohlcv_hst_bak_210828 = _bct_ohlcv_hst_bak_210828(sequelize, DataTypes);
  var btc_symbol_mst = _btc_symbol_mst(sequelize, DataTypes);
  var btt_csv_mst = _btt_csv_mst(sequelize, DataTypes);
  var btt_prmt_mst = _btt_prmt_mst(sequelize, DataTypes);
  var btt_test_hst = _btt_test_hst(sequelize, DataTypes);
  var com_com_cd = _com_com_cd(sequelize, DataTypes);
  var com_com_grp_cd = _com_com_grp_cd(sequelize, DataTypes);
  var com_prmt_mst = _com_prmt_mst(sequelize, DataTypes);
  var com_user_mst = _com_user_mst(sequelize, DataTypes);
  var flyway_schema_history = _flyway_schema_history(sequelize, DataTypes);
  var fwk_tr_hst = _fwk_tr_hst(sequelize, DataTypes);
  var fwk_transaction_hst = _fwk_transaction_hst(sequelize, DataTypes);
  var log_test = _log_test(sequelize, DataTypes);
  var test = _test(sequelize, DataTypes);
  var tmp = _tmp(sequelize, DataTypes);


  return {
    bct_ohlcv_hst,
    bct_ohlcv_hst_bak_210718,
    bct_ohlcv_hst_bak_210828,
    btc_symbol_mst,
    btt_csv_mst,
    btt_prmt_mst,
    btt_test_hst,
    com_com_cd,
    com_com_grp_cd,
    com_prmt_mst,
    com_user_mst,
    flyway_schema_history,
    fwk_tr_hst,
    fwk_transaction_hst,
    log_test,
    test,
    tmp,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
