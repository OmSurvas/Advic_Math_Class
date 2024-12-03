var mysql = require("mysql");
var util = require("util");

var conn = mysql.createConnection({
  host:"bcw3lvve5hvpwfysuhvt-mysql.services.clever-cloud.com",
  user :"u0i6wyo4qazp1yr9",
  password:"K3atq0KumP0iinjTgeQE",
  database:"bcw3lvve5hvpwfysuhvt"
})

var exe = util.promisify(conn.query).bind(conn);

module.exports=exe;
