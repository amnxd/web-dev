// function getDetails(username, cb){
//    setTimeout(function(){
//       console.log('sending data...')
//    },1000);
//    setTimeout(function(){
//       console.log('receivng data...')
//    },3000);
//    setTimeout(function(){
//       cb();
//    },6000);
// }
// getDetails('aman_gupta', function(){
//    console.log("here's the details..")
// })


function stepOne(cb){
   console.log('step one done.')
   cb();
}
function stepTwo(cb){
   console.log('step Two done.')
   cb();
}
function stepThree(cb){
   console.log('step Three done.')
   cb();
}

stepOne(()=>{
   stepTwo(()=>{
      stepThree(()=>{
         console.log('all done.')
      })
   })
})
