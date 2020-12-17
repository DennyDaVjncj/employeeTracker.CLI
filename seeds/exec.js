const link=require('../connection/connect');//database connection
const dataSets=require('../dataSets/employees');//data models
const UX=require('../UX/userExperience');//user choices

dataSets=link.query(
    "INSERT INTO role SET ?",
    {
        title:UX.filledPosition.desicion2
    },
    scandal=>{
        if(scandal)throw scandal;
        console.log('successufully onboarded');        
    }
);
module.exports=dataSets;