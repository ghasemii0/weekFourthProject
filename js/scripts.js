//bussines logic
//Pizza constructor
function Pizza(size,toppings,extraCheese) {
  this.size = size,
  this.toppings = toppings,
  this.extraCheese = extraCheese,
  this.price = 8;
  this.priceBySize();
  this.priceByToppings();
  this.priceIfExtraCheese();
}
//changing the price by size
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
//changing the price by toppings
Pizza.prototype.priceByToppings = function() {
  if(this.toppings === 8){
    this.price += 16;
  }else if (this.toppings === 7){
    this.price += 14;
  }else if (this.toppings === 6){
    this.price += 12;
  }else if (this.toppings === 5){
    this.price += 10;
  }else if (this.toppings === 4){
    this.price += 8;
  }else if (this.toppings === 3){
    this.price += 6;
  }else if (this.toppings === 2){
    this.price += 4;
  }else if (this.toppings === 1){
    this.price += 2;
  }else if (this.toppings === 0){
    this.price;
  }else {
    console.log("There is an error for the topping section.");
  }
}
//changing the price if extracheese is added
Pizza.prototype.priceIfExtraCheese = function() {
  if(this.extraCheese === "Yes"){
  this.price += 2;
}else if(this.extraCheese === "No"){
  this.price;
}else {
  console.log("There is an error for the extra cheese selection.");
  }
}
//prototype to show the user what pizza they got with how many toppings and final price
Pizza.prototype.pizzaInfo = function() {
  return "-----------------You have purchased a " + this.size + " pizza with " + this.toppings + " topping(s) for " + this.price + "$.---------------";
}



//user interface
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var size = $("#size").val();
    var extraCheese = $("input:radio[name=extraCheese]:checked").val();
    var toppings = $("input:checkbox[name=topping]:checked").length;
    var newPizza = new Pizza(size,toppings,extraCheese);
    $(".result").show();
    $(".price").text(newPizza.pizzaInfo());

  });
});
