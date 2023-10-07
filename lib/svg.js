const {Circle,Triangle,Square}= require('./shapes')



class SVG{
    constructor(title,color,shape,logoColor){
       this.title=title;
       this.color=color;
       this.shape=shape;
       this.logoColor=logoColor;
    }
    render(){
        let shape;
        if (this.shape === "triangle"){
            shape= new Triangle(this.logoColor)

        } else if (this.shape=== "square"){
            shape= new Circle(this.logoColor)

        }
        else if (this.shape=== "circle"){
            shape= new Square(this.logoColor)
    }
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.color}">${this.title}</text>
    </svg>`

    }

}

module.exports= SVG