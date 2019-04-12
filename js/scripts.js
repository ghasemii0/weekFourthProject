//bussines logic

//Pizza constructor
function Pizza(size,toppings) {
  this.size = size,
  this.toppings = toppings,
  this.price = 8;
  this.priceBySize();
  this.priceByToppings();
}

Pizza.prototype.priceBySize = function() {
  if(this.size === "large"){
    this.price += 2;
  }else if (this.size === "medium"){
    this.price;
  }else if(this.size === "small"){
    this.price -= 2;
  }else {
    console.log("There is an error for the pizza size selection.");
  }
}

Pizza.prototype.priceByToppings = function() {
  if(this.toppings === 5){
    this.price += 12;
  }else if (this.toppings === 4){
    this.price += 10;
  }else if (this.toppings === 3){
    this.price += 8;
  }else if (this.toppings === 2){
    this.price += 6;
  }else if (this.toppings === 1){
    this.price += 4;
  }else if (this.toppings === 0){
    this.price;
  }else {
    alert("Pease select the max 5 topings");
  }
}

Pizza.prototype.pizzaInfo = function() {
  return "-----------------You have purchased a " + this.size + " pizza with " + this.toppings + " topping(s) for " + this.price + "$.---------------";
}



//user interface
$(document).ready(function(){
  $("form").submit(function(evetn){
    event.preventDefault();
    var size = $("#size").val();
    var toppings = $("input:checkbox[name=topping]:checked").length;
    var newPizza = new Pizza(size,toppings);
    console.log(toppings);
    console.log(size);
    $(".price").text(newPizza.pizzaInfo());

  });
});
