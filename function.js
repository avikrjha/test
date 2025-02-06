// -> funtion statement or funtion decleration
function name (){
    console.log("statement")
}

// -> funtion expression
const b = function (){
    console.log("statement")
}

//  -> funtion decleration diff funtion statement
 // is hoisting statement called before declairation

// -> anonymous funtion 
/*
function  (){
    console.log("statement")
}

here fun used as a value

*/


// -> named funtion expression
const c = function name (){
    console.log("statement")
}

// -> diff btw parameter and argument
const d = function name (param1, param2){
    console.log("statement")
}

//d("arg", "arg2")

// -> first class funtion // -> first class citizen

// fun passed anonyms fun inside fun as argument also return fun

// 

const person = {
    name: "Bob",
    greet: function(greeting, punctuation) {
      console.log(`${greeting}, ${this.name}${punctuation}`);
    }
  };
  
  const alice = { name: "Alice" };
  
  // Using call
  person.greet.call(alice, "Hello", "!"); 
  
  // Using apply
  person.greet.apply(alice, ["Hi", "!!"]); 
  
  // Using bind
  const boundGreet = person.greet.bind(alice, "Hey");
  boundGreet("...");

  