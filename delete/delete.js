module.exports = require("../config/imports").express
                         .Router()
                         .post("/", (req, res)=>{
                             var obj = require("../config/db_connections");
                             var Connection = obj.getConnection();
                             require("../config/queries").delete(Connection, req, res);
                         });