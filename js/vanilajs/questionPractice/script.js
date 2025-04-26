// SORTING

// var arr = [3, 1, 4, 3, 1, 4, 2, 5] //array

// console.log([...new Set(arr)].sort(function(a, b){
//   return b-a;
// })[1]);

// let arr = [1,2,3,2,6,7,2,4,2,3,1];
// var obj = {};

// arr.forEach(function(val){
//   obj[val] === undefined ? (obj[val] = 1) : obj[val]++;
// });




// function fnlimiter(fn, limit){
//   let total = 0;
//   return function(){
//     if( total < limit){
//       total++;
//       fn();
//     }
//   }
// }

// var t = fnlimiter(function(){
//   console.log('hey');
// },3);

// t();
// t();
// t();
// t();



// function repete(fn, time){
//   setInterval(fn, time);
// }

// repete(function(){
//   console.log('helo');
// }, 2000);



// function greetinFn(greet){
//   return function(name){
//     console.log(`${greet} ${name}`);
//   }
// }

// var gg = greetinFn("Namaste");
// gg('tashi');



// function onceCaller(fn){
//   let executed = false;
//   return function(){
//     if(!executed){
//       executed = true;
//       fn();
//     }
//     else{
//       console.warn('already executed');
//     }
//   }
// }

// var newfn = onceCaller(function(){
//   console.log("This should run once.")
// })

// newfn();
// newfn();



