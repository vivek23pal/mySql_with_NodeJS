module.exports = {
    getConnection : () =>{
        return require("./imports").mysql.createConnection(require("./db_propertie"));
    }
};