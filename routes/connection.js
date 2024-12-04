var mysql = require("mysql");
var util = require("util");

var conn = mysql.createConnection({
  host:"buug9nz6gnq45y2aqxgb-mysql.services.clever-cloud.com",
  user :"ung5gljjkuqnjovz",
  password:"Cg6MvsJBh7eFXQyUWj6a",
  database:"buug9nz6gnq45y2aqxgb"
})

var exe = util.promisify(conn.query).bind(conn);

module.exports=exe;
