var today = new Date();
var hourNow = today.getHours();
var greeting;


if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');


var showOrder = funcation();
var userOrder;
var orderImage = "";
while (showOrder != "house" && showOrder != "hotel") {
    showOrder = prompt = "please enter house or hotel";
}
var numberOfImage;
var numberOfImage = prompt = "how many imaes do you want";
for (var i = 0; i < numberOfImage; i++) {
    console.log("index is" + i);
    if (userOrder === "hotel") {
        orderImage = 'img src="imghotel"'
    } else if (userOrder === "house") {
        orderImage = 'img src="imghouse'
    }
    document.write('<h3>' + greeting + '</h3>');

}