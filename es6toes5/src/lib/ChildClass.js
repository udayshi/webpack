import ParentClass from "./ParentClass";
const API_URL='http://www.usforweb.com/api';

class ChildClass extends ParentClass{
    constructor(name,age){
        super(name);
        this.age=age;
    }
    static staticMethod(){
        return 'I am static Method'
    }
    hello(){
        return 'Hello '+this.name+' and you are '+this.age;
    }
    toString(){
        return this.name+' '+this.age;
    }
}


let priFunc=()=>{
    return 'Private Content';
}



let myFunc=()=>{
        console.log(priFunc());
}

let config = require("./conf.json");


export default ChildClass;
export {myFunc,API_URL,config}