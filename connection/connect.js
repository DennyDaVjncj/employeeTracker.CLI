const inquisition=require('inquirer');//interface
const myDolphin=require('mysql');//database link
require('dotenv').config();
const ux=require('../UX/userExperience.js');

//configured connection to sql
let link=myDolphin.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'daVjncjCorp'
});

link.connect(sin=>{
    if(sin)throw sin;
    ux();//hypothetical hoisted function
});