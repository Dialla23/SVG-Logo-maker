const { default: inquirer } = require('inquirer')
const filesystem = require('./node_modules/graceful-fs/graceful-fs')
const inquirer= require("inquirer");
const {circle}= require(.lib/shapes);

class svg{
    constructor(){
        
        this.textElement=''
        this.shapeElement=''
    }
    render(){
        new DOMParser()

        const parser = new DOMParser();

const xmlString = "<warning>Beware of the tiger</warning>";
const doc1 = parser.parseFromString(xmlString, "application/xml");
// XMLDocument

const svgString = '<circle cx="50" cy="50" r="50"/>';
const doc2 = parser.parseFromString(svgString, "image/svg+xml");
// XMLDocument

const htmlString = "<strong>Beware of the leopard</strong>";
const doc3 = parser.parseFromString(htmlString, "text/html");
// HTMLDocument

console.log(doc1.documentElement.textContent);
// "Beware of the tiger"

console.log(doc2.firstChild.tagName);
// "circle"

console.log(doc3.body.firstChild.textContent);
// "Beware of the leopard"



    }
}