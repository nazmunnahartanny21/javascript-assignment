
// kilometerTOMeter

function kilometerToMeter(kilometer){
    var meter = 1000 * kilometer;
    return meter;
}
var result = kilometerToMeter(65);
console.log(result);


// budgetCalculator

function budgetCalculator(watch, phone, laptop){
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}

var totalBudget = budgetCalculator(15, 20, 7);
console.log(totalBudget);


// hotelCost

function hotelCost(days){
    if (days <= 10){
        totalCost = days * 100;
    }
    else if (days <= 20){
        var firstOfferCost = 10 * 100;
        var remainingDays = days - 10;
        var secondOfferCost = remainingDays * 80;
        totalCost = firstOfferCost + secondOfferCost;    
    }
    else {
        var firstOfferCost = 10 * 100;
        var secondOfferCost = 10 * 80;
        var remainingDays = days - 20;
        var thirdOfferCost = remainingDays * 50;
        totalCost = firstOfferCost + secondOfferCost + thirdOfferCost;   
    }
    return totalCost;
}
var sum = hotelCost(37);
console.log(sum);


// megaFriend

var friends = ["Tumpa", "Sumi", "Shorifa",  "NargisKhatun", "Jelly", "Olida", "Toma", "Nupur"];

function megaFriend(friends){
    var largestName = friends[0];
    for(var i = 0; i < friends.length; i++){
        var element = friends[i];
        if(element.length > largestName.length){
            largestName = element;
        }
    } 
    return largestName;
}
var longName = megaFriend(friends);
console.log(longName);



