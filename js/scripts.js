// Business Logic for Pizza
function Pizza (pizzaSize, pizzaToppings, pizzaCost) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaCost = pizzaCost;
}

//Pizza.prototype.pizzaCost = function() {
  //return size + toppings;
//}

Pizza.prototype.final = function() {
  return this.pizzaSize +  "with"  + this.pizzaToppings +  "You're total cost is" + this.pizzaCost;
}


//User Interface Logic 
$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    const inputtedSize = parseInt($("#size").val());
    const inputtedTop1 = parseInt($("#topping1").val());
    const inputttedTop2 = parseInt($("#topping2").val());
    const inputtedTop3 = parseInt($("#topping3").val());
  })
})

