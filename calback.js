// what is call back func in js

setTimeout(function(){
    console.log("here")
}, 3000)

// 
function x(y){
    console.log("x")
    y()
}

x(function y(){
    console.log("y")
})

/*
 a callback function is a function that is passed as an argument to another function,
  and is then invoked (called) inside the outer function to complete some kind of routine or action.

*/

