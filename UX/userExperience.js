const inquisition=require('inquirer');//interface
const link=require('../connection/connect');//database connection weaponized
const pocketProjector=require('console.table')//used to display table data winthin terminal

// console.table([
//     {

//     }
// ])

let decisionMaker=()=>{
    inquisition.prompt({
        name:'decision0',
        type:'list',
        message:'Whats your first order of action as CEO?',
        choices:[
            'Create new department','Define job functions','Onboard employees','Go home & enjoy a sweet red'
        ]
    }).then(executiveDesicion=>{
        switch(executiveDesicion.decision0){
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
            executiveAction()//hoisted function to drive logic    
        }
    });
    //if the choice is to add a department, I need to replicate a table & seed into it
    const configureDepartment=()=>inquisition.prompt([
        {
            name:'decision1',
            type:'input',
            message:"What's the name of your new department?"            
        },
        {
            name:'decision2',
            type:'confirm',
            message:'Is there an indentifier for this department?'
        }
    ]).then(executiveDesicion=>{
        const bossMove=executiveDesicion.decision1;//weaponize user res
        link.query(
            'INSERT INTO department SET ?',
            {
                departmentName:bossMove
            },
            clog=>{
                if(clog)throw clog;
                console.log('Quality decision boss!');
                executiveAction()
            }
        )
        //use user input to seed into database
        //look into how I can create new instances of tables based on user choice
        //
    })};
    
    const executiveAction=()=>{
        inquisition.prompt({
            name:'goHome',
            type:
        })
    }
    
    decisionMaker();//app trigger(pew pew)

//take the path of least resistance