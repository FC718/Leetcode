/**
 * @param {number[]} prices
 * @return {number}

 prices=
 [7,1,5,3,6,4]

 buyDay=1
 buyPrice=prices[buyDay]=1


 sellDay=4
 sellPrice=prices[sellDay]=6

 buyDay<sellDay

 profit=sellPrice-buyPrice=6-1=5
 */

var maxProfit = function(prices) {
    let minBuyPrice=prices[0]
    let max=0
    for(let i=1;i<prices.length;i++){
        const sellPrice=prices[i]
        const profit=sellPrice-minBuyPrice
        max=Math.max(max,profit) 
        // When would be the best time to buy?
        // Given that we are to sell on day i
        minBuyPrice=Math.min(minBuyPrice, prices[i])}
    return max
    };