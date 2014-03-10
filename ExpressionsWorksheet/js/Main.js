/**
 * Created by russayhernandez on 3/10/14.
 */

//Dog Years
var dogYears=4;
var humanYears=dogYears * 7;
console.log("sparky is "+dogYears+" human years old which is "+humanYears+" in dog years");

//Slice of Pie part I
var pizzas = 12;
var people = 16;
var slices = 10;
var slicesPerPerson = pizzas * slices / people;
console.log("each person ate "+slicesPerPerson+" slices of pizzas at the party");

//Slice of Pie part II
var leftOver = slices * pizzas % people;
console.log("sparky got "+leftOver+" slices of pizza");

var newArray = [21, 72, 163, 40, 35];
var totalAmount = newArray[0]+newArray[1]+newArray[2]+newArray[3]+newArray[4];
var average = totalAmount / newArray.length;
console.log("you have spent a total of $"+totalAmount+" on groceries over 5 weeks. that is an average of $"+average+" per week")
//Discounts
var price = 34;
var discount = 20;
var salesTax = 6;
var bike = "bike"

var discountedPrice = (discount / 100) * price;
var newNewPrice = price - discountedPrice;
var withTax = newNewPrice * (salesTax/100);
var newTax = newNewPrice + withTax

//discountedPrice is the discount amount, newNewPrice is the price after the discount was removed. withtax is the
//actual tax amount before it was added.

console.log("your "+bike+" was originally $"+price+" but after a "+discount+" % discount it is now $"+newNewPrice+" without tax, and $"+newTax+" with tax")