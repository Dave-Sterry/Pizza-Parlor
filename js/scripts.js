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
Order.prototype.pizzaCost = function add() {
  return size + topping1 + topping2 + topping3;
}


// Business Logic for Pizza
function Pizza(size, topping1, topping2, topping3) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
}

//User Interface Logic 
let newZa = new Order();

$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    const inputtedSize = parseInt($("#size").val());
    const inputtedTop1 = parseInt($("#topping1").val());
    const inputttedTop2 = parseInt($("#topping2").val());
    const inputtedTop3 = parseInt($("#topping3").val());
    let newPizza = new Pizza(inputtedSize, inputtedTop1,inputttedTop2,inputtedTop3);
    newZa.addPizza(newPizza);
    console.log(newZa.pizzas);
  })
})

