console.log(soma(2, 3))// pode fazer isso com function declaration
// console.log(sub(2, 3))   //- não funciona com function expression
// console.log(mult(2, 3))  //- tbm não funciona

// function declaration
function soma(x, y){
    return x + y
}

// function expression

const sub = function (x, y){
    return x - y
}

//named function expression 
// única vantagem que talvez tenha seria para quando fosse debugar o código

const mult = function mult(x, y){
    return x*y
}
