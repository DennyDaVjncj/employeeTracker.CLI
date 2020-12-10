const inquisition=require('inquirer');//interface
const myDolphin=require('mysql');//database link
require('dotenv').config();//package for securing certain info
const crayons=require('chalk')

//configured connection to sql
var link=myDolphin.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'daVjncjCorp_data'
});

link.connect(console.log(link));
module.exports=link;