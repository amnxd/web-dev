const pr = new Promise((res,rej)=>{

   console.log('is it true", yes it is')
   res();
});

pr.then(function(){
   console.log('accepted')
}).catch(()=>{
   console.log('rejected')
});
