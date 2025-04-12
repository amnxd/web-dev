// let str = "Hello JavaScript!";
// console.log(myFun);

// function myFun() {
//   return "Hoisting Works"
// }
function outer(){
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer ();
counter();
counter();