// https://github.com/Imran13Hasan/assignment.js

//Kilometer to Meter
function kilometerToMeter(num) {
    var meter = 0;

    meter = num * 1000;
    return meter;
}
var result = kilometerToMeter(5);
// console.log(result);


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
// console.log(totalCost);


//Hotel Cost
function hotelCost(day) {
    var cost = 0;

    if (day == 0) {
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
var totalCost = hotelCost(21);
// console.log(totalCost);


//Mega Friend
    var arr = ["Imran", "Mahmudul", "Kamal", "Ahnaf", "Mahabubur"];
    var largestName = arr[0];
    
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element.length > largestName){
            largestName = element;
        }
        console.log(largestName)
    }

// var array = ["Imran", "Mahmudul", "Hasan", "Kamal", "Ahnaf"];
// var result = megaFriend(arr);
// console.log(result)