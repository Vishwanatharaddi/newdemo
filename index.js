const multiply  =  (x, y) => {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);



