var obj = {number:1};
var fns = [
    function(obj,next){
        setTimeout(function(){
            obj.number = obj.number*2;
            console.log('a');
            next(obj);
        },3000);
    },
    function(obj,next){
        console.log(obj.number);
        console.log('b');
    }
]
var count = 0;
function next(obj){
  var fn = fns[count++];
  fn(obj,next);
}
next(obj);