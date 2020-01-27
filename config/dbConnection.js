var mysql = require('mysql');
var connDB = function(){
    console.log('Conexão');
   return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'portal_noticias',
        port: '3306'
    }); 
}
module.exports = function (){
    console.log('Módulo');
    return connDB;  
};