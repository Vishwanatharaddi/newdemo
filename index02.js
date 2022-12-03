let multiply = function (x,y){
    console.log(x*y);
}

let multipleByTwo = multiply.bind(this, 2);
multipleByTwo(5);