
// function expresion


let squre= function(num){

    return num*num;
}


console.log(squre(6))     



//arrow function


let square = (num)=>{
    return num*num
}


console.log(square(6))


// anonymous function


let cube=function(num){

    return num*num*num
}

console.log(cube(2));


//iife

(function(name){


    console.log(`wlcome ${name} to the function`);

})
("abin")

