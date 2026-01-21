function getDetails(username, cb){
   setTimeout(function(){
      console.log('sending data...')
   },1000);
   setTimeout(function(){
      console.log('receivng data...')
   },3000);
   setTimeout(function(){
      cb();
   },6000);

}


getDetails('aman_gupta', function(){
   console.log("here's the details..")
})