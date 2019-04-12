//bussines logic
function Pizza(size,toppings) {
  this.size = size,
  this.toppings
}




//user interface
$(document).ready(function(){
  $("form").submit(function(evetn){
    event.preventDefault();
    var size = $("#size").val();
    var toppings = $("input:checkbox[name=topping]:checked").length;

    console.log(size);
    console.log(toppings);

  });
});
