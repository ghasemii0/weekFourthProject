//bussines logic

//Pizza constructor
function Pizza(size,toppings) {
  this.size = size,
  this.toppings = toppings,
  this.price = 8;
  this.priceBySize();
  this.PriceByToppings();
}
Pizza.prototype.priceBySize = function() {
  if(this.size === "large"){
    this.price += 2
  }else if (this.size === "medium"){
    this.price;
  }else if(this.pizza === "small"){
    this.price -= 2
  }
}



//user interface
$(document).ready(function(){
  $("form").submit(function(evetn){
    event.preventDefault();
    var size = $("#size").val();
    var toppings = $("input:checkbox[name=topping]:checked").length;
    var newPizza = new Pizza(size,toppings);
    console.log(size);
    console.log(toppings);

  });
});
