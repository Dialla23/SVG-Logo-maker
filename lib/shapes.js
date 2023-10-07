class Shape{

    constructor(color){
        this.color=color
    }
   render(){
    return "no shape definied"
   }
}

class Circle extends Shape{
    constructor(color="yellow"){
        super(color)

    }
    render(){
        return `<circle cx="50%" cy="50%" r="100%" height="100% with="100%" fill=${this.color}`
    }
};

class Triangle extends Shape{
    constructor(color="green"){
        super(color)

    }
    render(){
        return `<polygon points="200,10 250,190 160,210 " fill="${this.color}" />`
    }
};

class Square extends Shape{
    constructor(color="red"){
        super(color)

    }
    render(){
        return `<rect width="300" height="100" "fill=${this.color}" />`
    }
};


module.exports={Circle, Triangle, Square}