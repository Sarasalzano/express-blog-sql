//import mysql
const mysql = require("mysql2");

//connessione al database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sarasalzano0",
    database: "blog_db"
});

//gestione errore connessione
connection.connect((err)=>{
if(err) throw err;
console.log("Connected to Mysql")
});