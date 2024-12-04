var mysql = require("mysql");
var util = require("util");

var conn = mysql.createConnection({
  host:"btalvpraw9o5opvnrprq-mysql.services.clever-cloud.com",
  user :"upvlgqtyerzjt6kr",
  password:"v4YBnHNVj07hpr4YnOl5",
  database:"btalvpraw9o5opvnrprq"
})

var exe = util.promisify(conn.query).bind(conn);

module.exports=exe;
