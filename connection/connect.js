const inquisition=require('inquirer');//interface
const myDolphin=require('mysql');//database link
require('dotenv').config();

//configured connection to sql
let link=myDolphin.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    database:'daVjncjCorp_data'
});

link.connect(console.log('live link on port: '+link.port));
module.exports=link;