require('dontew').config('path variaveis.env')

const mysql = require('mysql')

const connection = mysql.createConnection({
host: process.env BD_HOST,
user: process.env BD_USER,
password: process.env BD_PASSOWRD,
labschool: process.env BD_LABSCHOOL;


})







