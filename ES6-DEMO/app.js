//the older version of the Javascript
const triangle = function(length,width){
    return length*width;
}
console.log(triangle(4,5));

//The new version using the ES6

const square= length=>length*length;

console.log(square(5));

//Arrow function to add two numbers
add=(number1,number2)=>number1+number2;
const sum= add(5,6);
console.log(sum);

//Arrow function  with no parameter
hello=()=>'Hello World'
console.log(hello());

//Arrow function with one parameter
area=length=>length*length;
const result=area(6);
console.log(result);

