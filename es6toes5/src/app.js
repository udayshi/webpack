import ChildClass,{API_URL,config} from "./lib/ChildClass";
console.log(API_URL);

let objChild=new ChildClass(config.name,config.age);
console.log(objChild.hello());

