// Business Logic for Order
function Order() {
  this.pizzas = [];
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
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
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
  let topping = this.topping;
  if (topping === "Pepperoni") {
    this.cost += 2;
  } else if (topping === "Olives") {
    this.cost += 1;
  } else if (topping === "Onion") {
    this.cost += 2;
  }
}

function displayOrder(orderToDisplay) {
  let orderlist = $("ul#pizzas");
  let htmlForOrderInfo = "";
  orderToDisplay.pizzas.forEach(function(pizza) {
    htmlForOrderInfo += "<li id=" + pizza.id + ">"
 + pizza.size + " with " + pizza.topping + " , Your Total Cost is $" + pizza.cost + "</li>";
  });
  orderlist.html(htmlForOrderInfo);
}


//User Interface Logic 

let newZa = new Order();

$(document).ready(function () {
  $("form#new-pizza").submit(function (event) {
    event.preventDefault();
    const inputtedSize = $("input:radio[name=size]:checked").val();
    const inputtedTopping = $("input:radio[name=topping]:checked").val();
    let newPizza = new Pizza(inputtedSize, inputtedTopping);
    newPizza.sizeCost(newPizza);
    newPizza.toppingCost(newPizza);
    newZa.addPizza(newPizza);
    displayOrder(newZa);
    console.log(newZa.pizzas);
  })
})