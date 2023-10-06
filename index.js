const filesystem = require('./node_modules/graceful-fs/graceful-fs')
const inquirer = require("inquirer");
const {circle}= require("./lib/shapes");
const { choices } = require('yargs');

class svg{
    constructor(){
        this.textElement=''
        this.shapeElement=''
    }
    render(){
        //return`<svg with="300" height="200">  ${this.shapeElement}${this.textElement}</svg>`
        return `svg version="1.1" xmlns= "https://www.w3.org/2000/svg" with="300" height="200"`
    }
    set svg.textElement(text,color){
        this.textElement=`<text x="150" y="125" font-size="60" text-anchor="middle" fill="Green"`
    }
    set shapeElement(shapes){
        this.shapeElement=shapes.render()
    }
}

//Array of questions for user input.
{
    type:"input",
    name:"SVG"
    message: "SVG"


}
{
    type:"input",
    name:"text-color"
    message: "White color"
}
{
    type:"input",
    name:"shape"
    message: "Green"
}
{
    type:"list",
    name:"pixle-image"
    message: "logo.svg"
    choices:["circle"],
}