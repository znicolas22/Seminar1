//let sayHello = function (name) {
//    return "Hello, " + name;
//}
//
//console.log(sayHello("me"));
//poate sa fie
//
//let sayHello = (name) => {
//    return "Hello, " + name;
//}
//poate sa fie 
//
//let sayHello = (name) => "Hello, " + name;
//console.log(sayHello("me"));

let sayHello = (name) => "Hello, " + name;

console.log(sayHello(process.argv[2]));
