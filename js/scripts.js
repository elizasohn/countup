
$(document).ready(function(){
  $("form.count").submit(function(event){
    event.preventDefault();
    var x = parseInt($("input#x-input").val());
    var y = parseInt($("input#y-input").val());
    for (var i = 0; i <= x; i += y) {
      if (y > x) {
        alert("Please enter a number smaller than the number you wish to count to.");
      } else if (x == NaN || y == NaN){
        alert("Please enter a valid number.");
      }
      console.log(i);
    }

  });
});
console.log("hello");
