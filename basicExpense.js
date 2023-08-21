function calculateFinancialSummary(spendings, earnings, data) {
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
  }

  
module.exports = {
    calculateFinancialSummary:calculateFinancialSummary
}