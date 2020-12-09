const inquisition=require('inquirer');//interface
const link=require('../connection/connect');

const decisionMaker=()=>{
    inquisition.prompt({
        name:'decision0',
        type:'list',
        message:'Whats the first order of action?',
        choices:[
            'Create department','Define job functions','Name your employees','Go home'
        ]
    }).then(action=>{
        switch(action.decision1){
            case 'Make department':
                configureDepartment()//undefined hoisted function
                break;
            case 'Define job functions':
                configureJobFunctions();
                break;
            case 'Name your employees':
                configureEmployees();
                break;
            case 'Go home for the day':
                theWalkHome();
                break;
        }
    });
    const configureDepartment=()=>inquisition.prompt([
        {
            name:'decision1',
            type:'input',
            message:"What's the name of your new department?"
        }
    ]).then(newDep=>{
        const newDept=new Department//follow syntax to complete logic
        //use user input to seed into database
    })};
    module.exports=decisionMaker();

//take the path of least resistance