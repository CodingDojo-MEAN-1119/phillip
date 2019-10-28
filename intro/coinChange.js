function giveChange(val){
    var q = Math.floor(val /25);
    var rem= val%25;
    var d= Math.floor(rem/10);
    rem = rem%10;
    var n =Math.floor(rem/5);
    rem= rem%5;
    var p=rem;
    return change={
        quarters: q,
        dimes:d,
        nickels:n,
        pennies:p,
    };
}
console.log(giveChange(94)); 

function coinChange(amt){
    var coins= {
        'dollars':100,
        'fifty':50,
        'quarters':25,
        'dimes':10,
        'nickels':5,
        'pennies':1
    }
    var result = {};
    for(var type in coins){
        var value = coins[type];
        var coin = Math.floor(amt/value);
        amt -= coin*value;
        result[type] = coin;
        // console.log(type, value, coin, result, amt);
    }
    return result;    
}
console.log(coinChange(312));