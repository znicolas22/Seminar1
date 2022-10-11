// let sayHello = function (name) {
//     return "Hello, " + name;
// }

// console.log(sayHello("me"));

//varianta simplificata
//let sayHello = (name) => "Hello, " + name;

//console.log(sayHello("me"));


// const elements = ['elem1', 'elem2', 'elem3'];

// console.log(elements.join());
// // expected output: "elem1,elem2,elem3"

// console.log(elements.join(' '));
// // expected output: "elem1 elem2 elem3"

// console.log(elements.join(''));
// // expected output: "elem1elem2elem3"

// console.log(elements.join('-'));
// // expected output: "elem1-elem2-elem3"


const elements = ["This", "is", "a", "test"];

let makeString = function(elements){
    return elements.join(" ")
}
console.log(makeString(elements));
console.log();

//asa arata un if
function checkDivisible (n, divisor) {
    if (n % divisor) {
        return false
    } else {
        return true
    }
}

console.log(checkDivisible(10, 2))
console.log(checkDivisible(10, 3))

console.log();

console.log(true+true+true == 3); //true = 1 true+true+true = 3
console.log(false+false == 2); // false + flase <=> 0 + 0 = 
console.log(false == 0); //false = 0
console.log(0.1+0.2 == 0.3);
console.log(0.1+0.2);


//asa arata un for
function occurences(text, character){
    let count = 0;
    for (var i = 0; i < text.length; i++) {
        if (text.charAt(i) === character) {
            count++;
        }
    }
    return count;
}

console.log(occurences("sample text", "e"));


//varianta simplificata folosind split
function occurences(text, character){
    return text.split(character).length - 1;
}

console.log(occurences("sample text", "e"));



let lista = [2,4,6,7,8];
let listaNoua = [];
index = 0;
function nrPare(lista){
    for(var i =0;i<lista.length;i++){
        if(!(lista[i] % 2)){              //rezultatul lista[i] % 2 cand lista[i] e par este 0(restul) 
            listaNoua[index] = lista[i];        //-> if este false (false = 0), deci trb negat if ul
            index++;                            // sau modificata conditia
         }
    }

    return listaNoua;
}


console.log(nrPare(lista));

//O funcție varidică este o funcție care primește un număr variabil de parametri.
function addToArray() {
    let args = arguments;
    let array = args[0];
    
    for ( var i = 1; i < args.length; i++){
        array.push(args[i]);
    }
    return array;
}

let array = ["a"];

console.log(addToArray(array, "b", "c").join(", "));

let list = [1,2,3,4];
function addEvenToArray(lista){

}

//math.sqrt(), parseInt()
const checkPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++){
        if(!(n % i)){
            return false;
        }
    }
    return true;
}

if (process.argv.lengh < 3) {
    console.log('not enough params')
} else {
    console.log(checkPrime(parseInt(process.argv[2])))
}


//iterare array
var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

for (var day in days) {
      console.log(day);
      console.log(days[day]);
}

for (var day of days) {
      console.log(day);
}

