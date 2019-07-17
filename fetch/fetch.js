module.exports = require("../config/imports").express
              .Router()
              .get("/", (req, res)=>{
                  var obj = require("../config/db_connections");
                  var Connection = obj.getConnection();
                  Connection.connect();
                  require("../config/queries").fetch(Connection, res)
              });