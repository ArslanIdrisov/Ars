const firstName = "Mike";
console.log('firstName:' + typeof firstName);

const valueOfPi = 3.142;
console.log('valueOfPi:' + typeof valueOfPi);

let isValid = true;
console.log('isValid:' + typeof isValid);

let jsObject = console;
console.log('jsObject:' + typeof jsObject);

let jsMethod = console.log;
console.log('jsMethod:' + typeof jsMethod);

let isSymbol = Symbol();
console.log('isSymbol:' + typeof isSymbol);
`   `
let emptyVariable = null;
console.log('emptyVariable:' + typeof emptyVsriable);

let unusedVariable;
console.log('unusedVariable:' + typeof unusedVariable);


function square ( arg ) {
    return arg * arg;
} 

function add ( argOne, argTwo = 10 ) {
    return argOne + argTwo; 
}

function squareAdd ( arg ) {
    let result = square( arg );
    return result + add( arg );
}

console.log('8*8:' + square(8));
console.log('8+20:' + add(8,20));
console.log('8+10:' + add(8));
console.log('(8*8) + (8+10):' +squareAdd(8));


console.log('Hoisted:' + add(100,200))
function add( numOne,numTwo ) {
    return numOne + numTwo
}

let addition = add
console.log('Assigned:' + addition(32,64))
let anon = function ( numOne, numTwo) {
    let result = numOne + numTwo ; return result
}

console.log('Anonymous:' + anon(9,1))

let iffy = ( function() {
    let str = 'Self Invoked Outpud' ; return str
})()
console.log(iffy);



function redNAme() {
    let myName ='External Script' ; console.log(
        Myname)}

