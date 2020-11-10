// Business Logic for Order
function Order() {
  this.pizzas = [];
  this.orderTotal=0;
  this.currentId = 0;
}

Order.prototype.addPizza = function (pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

Order.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
}


// Business Logic for Pizza
function Pizza(size, topping1, topping2) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2
  this.cost = 0
}

Pizza.prototype.sizeCost = function () {
  let size = this.size;
  if (size === "Small") {
    this.cost += 12;
  } else if (size === "Medium") {
    this.cost += 16;
  } else if (size === "Large") {
    this.cost += 20;
  }
}

Pizza.prototype.toppingCost = function () {
  let topping1 = this.topping1;
  if (topping1 === "Pepperoni") {
    this.cost += 2;
  } else if (topping1 === "Olives") {
    this.cost += 1;
  } else if (topping1 === "Onion") {
    this.cost += 2;
  }
}
Pizza.prototype.toppingCost2 = function () {
  let topping2 = this.topping2;
  if (topping2 === "Pepperoni") {
    this.cost += 2;
  } else if (topping2 === "Olives") {
    this.cost += 1;
  } else if (topping2 === "Onion") {
    this.cost += 2;
  }
}

function displayOrder(orderToDisplay) {
  let orderlist = $("ul#pizzas");
  let htmlForOrderInfo = "";
  orderToDisplay.pizzas.forEach(function(pizza) {
    htmlForOrderInfo += "<li id=" + pizza.id + ">"
 + pizza.size + " with " + pizza.topping1 + " and " + pizza.topping2 + " , Your Pizza Cost is $" + pizza.cost + "</li>";
  });
  orderlist.html(htmlForOrderInfo);
}


//User Interface Logic 
let newZa = new Order();

$(document).ready(function () {
  $("form#new-pizza").submit(function (event) {
    event.preventDefault();
    const inputtedSize = $("input:radio[name=size]:checked").val();
    const inputtedTopping1 = $("input:radio[name=topping1]:checked").val();
    const inputtedTopping2 = $("input:radio[name=topping2]:checked").val();
    let newPizza = new Pizza(inputtedSize, inputtedTopping1, inputtedTopping2);
    newPizza.sizeCost(newPizza);
    newPizza.toppingCost(newPizza);
    newPizza.toppingCost2(newPizza);
    newZa.addPizza(newPizza);
    displayOrder(newZa);
  })
})