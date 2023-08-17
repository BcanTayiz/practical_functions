function maxProfit(prices) {
    if (prices.length < 2) {
        return 0; // Cannot make a profit with less than two prices
    }
    
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > minPrice) {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        } else {
            minPrice = prices[i];
        }
    }

    return maxProfit;
}

function maxProfitDetails(prices) {
    if (prices.length < 2) {
        return [];
    }

    const decisions = [];
    
    for (let buyIndex = 0; buyIndex < prices.length - 1; buyIndex++) {
        for (let sellIndex = buyIndex + 1; sellIndex < prices.length; sellIndex++) {
            const profit = prices[sellIndex] - prices[buyIndex];
            if (profit > 0) {
                decisions.push({
                    profit: profit,
                    buyIndex: buyIndex,
                    sellIndex: sellIndex,
                    buyPrice: prices[buyIndex],
                    sellPrice: prices[sellIndex]
                });
            }
        }
    }

    return decisions;
}

function summarizeDecisions(decisions) {
    const summary = decisions.reduce(
        (acc, decision) => {
            acc.totalProfit += decision.profit;
            acc.totalBuyPrice += decision.buyPrice;
            acc.totalSellPrice += decision.sellPrice;
            return acc;
        },
        { totalProfit: 0, totalBuyPrice: 0, totalSellPrice: 0 }
    );

    return summary;
}

module.exports = {
    maxProfit:maxProfit,
    maxProfitDetails:maxProfitDetails,
    summarizeDecisions:summarizeDecisions
}
