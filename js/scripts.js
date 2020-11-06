// Business Logic for Pizza
function Order() {
  this.pizza = [];
  this.currentId = 0;
}

//Order.prototype.pizzaCost = function() {
  //return size + toppings;
//}

function pizzaOrder("size, topping1, topping2, topping3",) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
}

//User Interface Logic 
$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    const inputtedSize = parseInt($("#size").val());
    const inputtedTop1 = parseInt($("#topping1").val());
    const inputttedTop2 = parseInt($("#topping2").val());
    const inputtedTop3 = parseInt($("#topping3").val());
    let newPizza = new pizzaOrder(inputtedSize, inputtedTop1,inputttedTop2,inputtedTop3);
  })
})
console.log(myPizza);
