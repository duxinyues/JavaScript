for (var index = 1; index <= 5; index++) {
  (function(key){
    setTimeout(function(){
        console.log(key)
    },0)
  })(index)
}