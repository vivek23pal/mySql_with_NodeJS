module.exports = require("../config//imports").express
                .Router()
                .post("/", (req, res)=>{
                    var obj = require("../config/db_connections");
                    var Connection = obj.getConnection();
                    Connection.connect();
                    require("../config/queries").update(Connection, req, res);
                });