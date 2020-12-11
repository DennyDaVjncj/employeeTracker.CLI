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
        }
    ]).then(executiveDesicion=>{
        executiveDesicion.decision1;//weaponize user res
        link.query(
            'INSERT INTO department SET ?',
            {
                departmentName:executiveDesicion.decision1
            },
            clog=>{
                if(clog)throw clog;
                console.log('Quality decision boss!');
                executiveAction()
            }
        )
        //use user input to seed into database
        //look into how I can create new instances of tables based on user choice
        
        //if user wants new role: ask for title of role, salary, dept.id-->user will have to choos specific dept-->provide list to choos from-->get add [whatever] working, then view [whatever] working, then move on to next
        //I need to be able to read from all departments, include a read department function before adding other tables
        //once able to view dataSet on demand, move on to next configuration-->follow this sequence to completion
    })};
    
    const executiveAction=()=>{
        inquisition.prompt({
            name:'goHome'
            // type:
        })
    }
    
    decisionMaker();//app trigger(pew pew)

//take the path of least resistance