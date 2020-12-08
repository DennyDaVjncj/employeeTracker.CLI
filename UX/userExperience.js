const inquisition=require('inquirer');
const connectTheDots=require('../connection/connect')

const decisionMaker=()=>{
    inquisition.prompt({
        name:'decision1',
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
        }
    })
}