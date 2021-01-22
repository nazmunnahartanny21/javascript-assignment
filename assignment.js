
// kilometerTOMeter
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
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
var result = hotelCost(37);
console.log(result);


// megaFriend
var friends = ["Tumpa", "Shorifa","NargisKhatun", "Olida", "Toma"];

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
var megaFriendName = megaFriend(friends);
console.log(megaFriendName);



