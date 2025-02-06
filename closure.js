// closer

const printAferSecond = function(){
    for (var i = 1; i <= 5 ; i ++ ){
        function close(x){
            setTimeout(() => {
                console.log(x)
             }, i * 1000);  
        }
      close(i)
    }
}

// closer example 2
function outest (){
    var c = 5
    function outer (x){
        var a = 0
        function inner(){
            console.log(a,x,c)
        }
        return inner
    }
    return outer
}

//outest()("hello")()

// example 3

function Hide(){
    var value = 0
    this.increment = function (){
       value ++
       console.log(value)
    }
    this.decrement = function (){
        value --
        console.log(value)
    }
}

var counter = new Hide()

// counter.increment()
// counter.increment()
// counter.increment()
// counter.decrement()

/*

1. An inner function can be directly called using two parenthesis ()().
2. Even parameters can be passed this way (Remember that the function needs to be returned to do this)
3. Closures can also be used for data hiding and encapsulation. So other code cannot access this value.
4. Unused variables are automatically deleted in High Level Programming language by garbage collector. 
5 .Closures allocate a lot of memory which cannot be deleted so this acts as a disadvantage.
6. Some browsers now have smart garbage collectors that automatically deletes variables that are not used outside closures.


*/

