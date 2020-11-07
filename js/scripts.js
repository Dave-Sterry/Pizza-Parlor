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

// Could not get the below code to work before 5
//Order.prototype.finalCost= function() {
  //let total= 0;
  //this.pizzas.forEach(function(pizza) {
    //total += pizza.cost;
  //})
  //this.orderTotal = total;
  //return;
//}

//function displayTotal(totalToDisplay) {
  //let totallist = $("ul#total");
  //let htmlForOrderTotal = "";
  //totalToDisplay.pizzas.forEach(function(order) {
    //htmlForOrderTotal += "<li id=" + order.orderTotal + ">"
    //+ "</li>";
  //});
  //totallist.html(htmlForOrderTotal);
//}


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
 + pizza.size + " with " + pizza.topping + " , Your Pizza Cost is $" + pizza.cost + "</li>";
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
    //newZa.finalCost();
    displayOrder(newZa);
    //displayTotal(newZa);
    console.log(newZa);
  })
})