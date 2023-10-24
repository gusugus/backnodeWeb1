const mysql = require("mysql2/promise");
const connection = mysql.createPool({
    host: 'db4free.net',
    port: 3306, 
    database: "gang_emelec",
    user: "gang_emelec",
    password: "gang_emelec",
});
module.exports = connection