function calculateFinancialSummary(spendings, earnings, data, outputFormat = 'object') {
  // Calculate total spendings based on the specified spending categories
  const totalSpendings = spendings.reduce(
    (total, category) => total + data[category].reduce((acc, amount) => acc + amount, 0),
    0
  );

  // Calculate total earnings based on the specified earning categories
  const totalEarnings = earnings.reduce(
    (total, category) => total + data[category].reduce((acc, amount) => acc + amount, 0),
    0
  );

  // Calculate net income
  const netIncome = totalEarnings - totalSpendings;

  if (outputFormat === 'object') {
    // Return the financial summary as an object
    return {
      totalEarnings,
      totalSpendings,
      netIncome,
    };
  } else if (outputFormat === 'table') {
    // Create a summary table
    const table = `
      Financial Summary:
      ----------------------------------
      Total Earnings: $${totalEarnings}
      Total Spendings: $${totalSpendings}
      Net Income: $${netIncome}
      ----------------------------------
    `;
  
    return table;
  } else {
    throw new Error('Invalid outputFormat. Use "object" or "table".');
  }
}

function calculateSavingsPercentage(spendings, earnings, data) {
  const { totalEarnings, totalSpendings } = calculateFinancialSummary(spendings, earnings, data);
  const savingsPercentage = ((totalEarnings - totalSpendings) / totalEarnings) * 100;
  return savingsPercentage;
}

function findMostExpensiveCategory(spendings, data) {
  let maxCategory = null;
  let maxAmount = 0;
  spendings.forEach((category) => {
    const categoryTotal = data[category].reduce((acc, amount) => acc + amount, 0);
    if (categoryTotal > maxAmount) {
      maxAmount = categoryTotal;
      maxCategory = category;
    }
  });
  return maxCategory;
}

function calculateMonthlyAverageEarnings(earnings, data) {
  const { totalEarnings } = calculateFinancialSummary([], earnings, data);
  const numberOfMonths = Object.values(data)[0].length; // Assumes all categories have the same number of data points
  const monthlyAverage = totalEarnings / numberOfMonths;
  return monthlyAverage;
}

function determineProfitOrLoss(spendings, earnings, data) {
  const { netIncome } = calculateFinancialSummary(spendings, earnings, data);
  return netIncome >= 0 ? 'Profit' : 'Loss';
}


function calculateMonthlyCashFlow(spendings, earnings, data) {
  const monthlyCashFlow = [];
  const numberOfMonths = Object.values(data)[0].length; // Assumes all categories have the same number of data points
  for (let i = 0; i < numberOfMonths; i++) {
    const monthlySummary = calculateFinancialSummary(
      spendings,
      earnings,
      Object.keys(data).reduce((acc, category) => {
        acc[category] = [data[category][i]];
        return acc;
      }, {})
    );
    monthlyCashFlow.push(monthlySummary);
  }
  return monthlyCashFlow;
}


// Function to buy products based on quality and budget constraints
function buyProducts(productList, desiredQuality, maxBudget, minQuality, maxQuality) {
  // Filter products by quality criteria
  const filteredProducts = productList.filter((product) => {
    return product.quality >= minQuality && product.quality <= maxQuality;
  });

  // Sort filtered products by price in ascending order
  filteredProducts.sort((a, b) => a.price - b.price);

  // Initialize variables for tracking purchased products and remaining budget
  const purchasedProducts = [];
  let remainingBudget = maxBudget;

  // Iterate through the sorted list and buy products until the budget is exhausted
  for (const product of filteredProducts) {
    if (product.price <= remainingBudget) {
      purchasedProducts.push(product);
      remainingBudget -= product.price;
    }
  }

  return purchasedProducts;
}


  
module.exports = {
    calculateFinancialSummary:calculateFinancialSummary,
    calculateSavingsPercentage:calculateSavingsPercentage,
    findMostExpensiveCategory:findMostExpensiveCategory,
    calculateMonthlyAverageEarnings:calculateMonthlyAverageEarnings,
    determineProfitOrLoss:determineProfitOrLoss,
    calculateMonthlyCashFlow:calculateMonthlyCashFlow,
    buyProducts:buyProducts,
}