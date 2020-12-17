const inquisition=require('inquirer');//interface
const link=require('../connection/connect');//database connection weaponized
const pocketProjector=require('console.table')//used to display table data winthin terminal

// console.table([
//     {
        
//     }
// ])

let decisionMaker=()=>{
    inquisition.prompt([
        {
        name:'decision0',
        type:'list',
        message:'Whats your first order of action as CEO?',
        choices:[
            'Create a new department','Define a job function','Onboard employee','Drive sType home'
        ]
    }]).then(executiveDesicion=>{
        switch(executiveDesicion.decision0){
            case 'Create a new department':
                createNewDept()//preDefined hoisted-function
                break;
            case 'Define a job function':
                defineJobFunctions();
                break;
            case 'Onboard employee':
                onboardEmployee();
                break;
            case 'Drive sType home':
                getInMyTesla()//hoisted function: for continuing logic flow             
        }
    })};

    //if the choice is to add a department, I need to replicate a table & seed into it
    const createNewDept=()=>inquisition.prompt([
        {
            name:'decision1',
            type:'input',
            message:"What's the name of daVjncjCorp's latest department?"            
        }
    ]).then(executiveDesicion=>{
        console.log("you're getting good at this are you? we love the name: "+executiveDesicion.decision1);
        link.query(
            'INSERT INTO department SET ?',
            {
                name:executiveDesicion.decision1
            },
            clog=>{
                if(clog)throw clog;
                console.log('effective logic cheif!');
                getInMyTesla()
            }
        )
    });
    
    const defineJobFunctions=()=>{
        console.log('effective logic cheif!');
        inquisition.prompt([
            {
                name:'decision2',
                type:'list',
                message:'What job function do you want to fill first?',
                choices:['Executive assistant','Marketing director','Cheif financial officer','Pause operations for the day']
            }
        ]).then(filledPosition=>{
            switch(filledPosition){
                case 'Executive assistant':
                    hireExec();//preDefined function
                case 'Marketing director':
                    hireMarketingExec()
                    break;
                case 'Cheif financial officer':
                    hireCFO();
                    break;
                case 'Pause operations for the day':
                    getInMyTesla();                    
            }
        })};
    const onboardEmployee=()=>{
        console.log('settling into your new position are you?');
        inquisition.prompt([
            {

            }
        ])
    }
    
    //use user input to seed into database
    //look into how I can create new instances of tables based on user choice
    
    //if user wants new role: ask for title of role, salary, dept.id-->user will have to choos specific dept-->provide list to choos from-->get add [whatever] working, then view [whatever] working, then move on to next
    //I need to be able to read from all departments, include a read department function before adding other tables
    //once able to view dataSet on demand, move on to next configuration-->follow this sequence to completion
    
    const getInMyTesla=()=>{
        inquisition.prompt([
        {
            name:'desicions',
            type:'list',
            message:'What would you like to do now Mr/Ms CEO?',
            choices:['Add another department','Define job functions','Onboard employees','Pause operations for the day']            
        }
    ]).then(executiveDesicion=>{
            switch(executiveDesicion.name){
                case 'Add another department':
                    configureDepartment();
                case 'Define job functions':
                    configureJobFunctions();
                case 'Onboard employees':
                    configureEmployees();
                case 'Pause operations for the day':
                    getInMyTesla();//hoisted function for concluding app
            }
        })
    }   
    decisionMaker();//app trigger(pew pew)

//take the path of least resistance