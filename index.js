
const inquirer = require("inquirer");
const SVG = require('./lib/svg');




//Array of questions for user input.
let questions = [
    {
        type: 'input',
        message: "Enter the text for the logo",
        name: 'title',

    },
    {
        type: 'input',
        message: "Enter color for the logo",
        name: 'color',

    },
    {
        type: 'input',
        message: "Enter text color for the logo",
        name: 'textcolor',

    },




    {
        type:"list",
        name: "shape",
        message: "select the shape of the logo",
        choices:["circle", "square", "triangle"],
    },
    ]
    
    function init(){
        inquirer.prompt(questions).then(answers=>{
            const logo= new SVG(answers.title, answers.textcolor,answers.shape, answers.Color)
            console.log(logo)
        })
    }
    init()


   




