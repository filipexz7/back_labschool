require('dontew').config('path variaveis.env')

const mysql = require('mysql')

const connection = mysql.createConnection({
host: process.env .BD_HOST,
user: process.env .BD_USER,
password: process.env .BD_PASSOWRD,
labschool: process.env .BD_LABSCHOOL


})
 conenection.conect(error=>{

    if(error)throw error
    console.log('connection to database $[process.env.DB_labschol}')    

    
 });  

 module.exports = connection
 










