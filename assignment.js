// https://github.com/Imran13Hasan/assignment.js


//Kilometer to Meter
function kilometerToMeter(num) {
    var meter = 0;

    if (num <= 0) {
        console.log("Insert positive number")
    } else {
        meter = num * 1000;
        return meter;
    }

}
var result = kilometerToMeter(15);
console.log(result);


//Budget Calculator
function budgetCalculator(num1, num2, num3) {
    var watch = 50;
    var phone = 100;
    var laptop = 500;

    watch = watch * num1;
    phone = phone * num2;
    laptop = laptop * num3;
    total = watch + phone + laptop;
    return total;
}
var totalCost = budgetCalculator(2, 3, 1);
console.log(totalCost);


//Hotel Cost
function hotelCost(day) {
    var cost = 0;

    if (day <= 0) {
        console.log("Please input a positive number")
    } else if (day <= 10) {
        cost = day * 100;
    } else if (day <= 20) {
        var firstTenDays = 10 * 100;
        var remaining = day - 10;
        var restDays = remaining * 80;
        cost = firstTenDays + restDays;
    } else {
        var firstTenDays = 10 * 100;
        var secondTwentyDays = 20 * 80;
        var remaining = day - 20;
        var restDays = remaining * 50;
        cost = firstTenDays + secondTwentyDays + restDays;
    }
    return cost;
}
var totalCost = hotelCost(20);
console.log(totalCost);


//Mega Friend
function megaFriend(arr) {
    var longestName = "";

    for (let i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (longestName.length < element.length) {
            longestName = element;
        }
    }
    return longestName;
}
var friends = ["Imran", "Mahmudul Hasan Imran", "Hasan", "Kamal Hasan", "Ahnaf"];
var result = megaFriend(friends);
console.log(result)

