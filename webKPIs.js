function calculateWebsiteKPIs(websiteData) {
    // Extract relevant data from the websiteData object
    const {
      totalVisitors,
      uniqueVisitors,
      pageViews,
      bounceRate,
      conversionRate,
      revenue,
      averageSessionDuration,
    } = websiteData;
  
    // Calculate KPIs and ratios
    const averagePageViewsPerVisitor = pageViews / totalVisitors;
    const bounceRatePercentage = (bounceRate / totalVisitors) * 100;
    const conversionRatePercentage = (conversionRate / totalVisitors) * 100;
    const revenuePerVisitor = revenue / totalVisitors;
    const revenuePerConversion = revenue / conversionRate;
    const averageSessionDurationInSeconds = averageSessionDuration * 60; // Convert minutes to seconds
    const pagesPerSession = pageViews / totalVisitors;
    const sessionDurationPerVisitor = averageSessionDurationInSeconds / totalVisitors;
  
    // Create an object to store the KPIs and ratios
    const KPIs = {
      TotalVisitors: totalVisitors,
      UniqueVisitors: uniqueVisitors,
      PageViews: pageViews,
      AveragePageViewsPerVisitor: averagePageViewsPerVisitor,
      BounceRate: bounceRatePercentage,
      ConversionRate: conversionRatePercentage,
      Revenue: revenue,
      RevenuePerVisitor: revenuePerVisitor,
      RevenuePerConversion: revenuePerConversion,
      AverageSessionDuration: averageSessionDuration,
      PagesPerSession: pagesPerSession,
      SessionDurationPerVisitor: sessionDurationPerVisitor,
    };
  
    return KPIs;
  }

  function calculateCAC(websiteData, marketingCost) {
    const { totalVisitors, conversions } = websiteData;
    const CAC = marketingCost / conversions;
    return CAC;
  }

  function calculateCLV(revenuePerCustomer, churnRate) {
    const CLV = revenuePerCustomer / churnRate;
    return CLV;
  }

  function calculateConversionFunnelMetrics(websiteData) {
    const { totalVisitors, productViews, cartViews, conversions } = websiteData;
    const conversionRateToCart = (cartViews / productViews) * 100;
    const conversionRateToConversion = (conversions / cartViews) * 100;
    const abandonmentRate = ((productViews - cartViews) / productViews) * 100;
  
    return {
      ConversionRateToCart: conversionRateToCart,
      ConversionRateToConversion: conversionRateToConversion,
      AbandonmentRate: abandonmentRate,
    };
  }

  function calculateROI(revenue, marketingCost) {
    const ROI = ((revenue - marketingCost) / marketingCost) * 100;
    return ROI;
  }

  function calculateChurnRate(websiteData) {
    const { initialCustomers, lostCustomers } = websiteData;
    const churnRate = (lostCustomers / initialCustomers) * 100;
    return churnRate;
  }

  function calculateTrafficSourcesBreakdown(websiteData) {
    const { organicTraffic, paidTraffic, referralTraffic, directTraffic } = websiteData;
    const totalTraffic = organicTraffic + paidTraffic + referralTraffic + directTraffic;
    const organicTrafficPercentage = (organicTraffic / totalTraffic) * 100;
    const paidTrafficPercentage = (paidTraffic / totalTraffic) * 100;
    const referralTrafficPercentage = (referralTraffic / totalTraffic) * 100;
    const directTrafficPercentage = (directTraffic / totalTraffic) * 100;
  
    return {
      OrganicTrafficPercentage: organicTrafficPercentage,
      PaidTrafficPercentage: paidTrafficPercentage,
      ReferralTrafficPercentage: referralTrafficPercentage,
      DirectTrafficPercentage: directTrafficPercentage,
    };
  }
  
  

module.exports = {
    calculateWebsiteKPIs:calculateWebsiteKPIs,
    calculateCAC:calculateCAC,
    calculateCLV:calculateCLV,
    calculateConversionFunnelMetrics:calculateConversionFunnelMetrics,
    calculateROI:calculateROI,
    calculateChurnRate:calculateChurnRate,
    calculateTrafficSourcesBreakdown:calculateTrafficSourcesBreakdown

}