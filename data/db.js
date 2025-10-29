//import mysql
const mysql = require("mysql2");

//connessione al database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sarasalzano0",
    database: "blog_db"
});

