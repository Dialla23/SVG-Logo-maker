class shape{

    constructor(){
        this.color=''
    }
    setColor(color){
        this.color(color);
    }
}

class circle extends shape{
    render(){
        return `<circle cx="50%" cy="50%" r="100%" height="100% with="100%" fill=${this.color}`
    }
};
module.exports={circle}