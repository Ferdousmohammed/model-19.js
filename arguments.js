function addNum(num1, num2) {
   
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const dam = arguments[i];
        sum = dam + sum;
    }
     return sum;
}
var result = addNum(3, 5, 8, 5, 2);
console.log(result);



