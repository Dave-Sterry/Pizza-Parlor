# Old Roberto's Pizza Parlor 
<img src="https://github.com/Dave-Sterry.png" width="200px" height="auto">

### A website by David Sterry updated on 11/6/2020

## Pizza Parlor

_This is a simple website for a pizza parlor. It allows the user to select between three sizes, and three toppings. It will return the users order, and the total cost and display that information on the page. This was a Friday independent project for Epicodus to demonstrate knowledge of constructors and prototypes_

The site can be viewed [here](https://dave-sterry.github.io/Pizza-Parlor/)

## Setup Instructions
 User will need to have an up to date browser installed such as Chrome of Firefox
 # View online :
1. Using the browser navigate to the [gh-pages](https://dave-sterry.github.io/Pizza-Parlor/) for this project
## Download via Github:
1. Alternatively use the browser navigate to my GitHub page [respository](https://github.com/Dave-Sterry/Pizza-Parlor)
2. Click the Green **Code** button and select **Download Zip**
3. Unzip the downloaded folder
4. Open the _index.html_ file to view the site locally
## Clone from Github via Gitbash:
1. Clone this repo to your personal computer using "git clone (https://github.com/Dave-Sterry/Pizza-Parlor)
2. Next navigate to the directory on your computer with the same name, and open via VScode or other code editor of your choice
3. Open index.html in your browser of choice. 
## How to use site
1. Make a pizza size and topping choice
2. View your total price and order details

## Known Bugs
Pizza price would not update (fixed on 11/06/20)  
Order would not display on page (fixed on 11/06/20)  
If reset button is clicked it only clears radio buttons, not Order-not fixed    
Order total would not display on page when multiple pizzas ordered- not fixed  
No selected toppings returns "undefined"- not fixed    
## Specs
| Test | Input | Output |
|:-------------|:-------------------------| :--------------|
| Pizza Size Selection Verifictaion |||
| Should correctly return cost of pizza the user chose | Large | "Large Pizza"|
| Topping Selection Verification |||
| Should correctly return toppings user chose | Pepperoni | "Pepperoni" |
| Pricing Calculation |||
| Should correctly add size and toppings prices for total | Large Pepperoni | $20 |  


Describe: Pizza()  
Test: Should correctly return users selected pizza size  
Example: Pizza(size).toEqual("large");  

Test: Should correctly return users selected topping  
Example: Pizza(toppings).toEqual("Pepperoni)  

Test: Should correctly return size cost  
Example: sizeCost(Large).toEqual($20)  

Test: Should correctly return topping cost  
Example: toppingCost(Onion).toEqual(2)  


## Contact and Support details

_Please contact me at sterry.david@gmail.com in regards to this website_

## Techknowlogies Used

* HTML
* CSS
* Git
* Bootstrap
* Visual Studios Code
* jQuery and Javascript


# License

This project is licensed under **MIT 2.0**

Copyright (c) 2020 **David Sterry**