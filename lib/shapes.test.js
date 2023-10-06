const { describe } = require("yargs")
const {circle}= require("./shapes")
const { test } = require("node:test")

//circle shape
describe('circle',()=> {
    test('renders correctly', ()=>{
        const shape= new circle();
        var color = ('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height= "200" width="200" fill=${color}`)
    }

    );
}

);