let students = [
    { name: "Alice", score: 22},
    { name: "Bob", score: 34 },
    { name: "Charlie", score: 20 },
    { name: "Diana", score: 88 },
    { name: "Evan", score: 95 }
];

console.log(students);


let names= students.map((a)=>a.name)
console.log(names);
/////////////////////////////////////////

let score=students.filter((a)=>a.score>75)


console.log(score)

/////////////////////////////////////////////////////

let avarage = students.reduce((acc,curr) =>acc+ curr.score,0)


console.log(avarage/students.length);

//////////////////////////////////////////

function grade(grade){


    if(grade>90){

        console.log("you got A")
    }
    else if(grade>80){

        console.log("you got b")
    }
     else if(grade>70){

        console.log("you got c")
    }

    else console.log("you faild");
    


}


grade(23)

/////////////////////////////////////////////////////////