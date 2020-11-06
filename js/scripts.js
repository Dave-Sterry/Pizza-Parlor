// Business Logic for Order
function Order() {
  this.pizzas = [];
  this.currentId = 0;
}

Order.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


// Business Logic for Pizza
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.cost = 0
}
Pizza.prototype.sizeCost = function() {
  let size = this.size;
  if (size === "Small"){
    this.cost += 12;
  } else if (size === "Medium"){
    this.cost += 16;
  } else if (size === "Large"){
    this.cost += 20;
  }
}

Pizza.prototype.toppingCost = function() {
  let topping = this.topping;
    
}

//User Interface Logic 

let newZa = new Order();

$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    const inputtedSize = $("input:radio[name=size]:checked").val();
    const inputtedTopping = $("input:radio[name=topping]:checked").val();
    let newPizza = new Pizza(inputtedSize, inputtedTopping);
    newZa.addPizza(newPizza);
    newPizza.sizeCost(newPizza);
    console.log(newPizza);
  })
})