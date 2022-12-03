//let multiply = function (x,y){
  //  console.log(x*y);
//}

let multiply = function(x){
    return function (y){
        console.log(x*y);
    }
}


let multipleByTwo = multiply(2);
multipleByTwo(5);

let multipleByThree = multiply(2);
multipleByThree(5);