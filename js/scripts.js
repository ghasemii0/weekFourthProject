//bussines logic





//user interface
$(document).ready(function(){
  $("form").submit(function(evetn){
    event.preventDefault();
    var size = $("#size").val();
    var top = $("input:checkbox[name=toppings]:checked").val();
    var toppings = '';
    for (i = 0; i < 3; i++) {
      toppings += checked[i] + " ";
    }
    console.log(size);
    console.log(toppings);

  });
});
