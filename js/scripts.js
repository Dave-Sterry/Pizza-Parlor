// Business Logic for Pizza
function Pizza (pizzaSize, pizzaToppings, pizzaCost) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaCost = pizzaCost;
}

Pizza.prototype.total = function() {
  return this.pizzaSize +  "with"  + this.pizzaToppings +  "You're total cost is" + this.pizzaCost;
}


