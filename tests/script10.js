const pf = require('practical-functions')

const originalArray = [1, 2, 3, 2, 4, 5, 2];
const valueToDelete = 2;

const newArray = pf.deleteAllMatching(originalArray, valueToDelete);

console.log(newArray); // Output: [1, 3, 4, 5]

const originalArray2 = [1, 2, 3, 4, 5, 6, 7, 8];
const lowerBound = 3;
const upperBound = 6;

const newArray2 = pf.deleteValuesOutOfRange(originalArray2, lowerBound, upperBound);

console.log(newArray2); // Output: [3, 4, 5, 6]

const existingData = [
    { id: 1, age: 30 },
    { id: 2, age: 25 },
  ];
  
  const objects = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];
  
  const selectedKeys = ['name'];
  
  const enrichedObjects = pf.enrichObjSelData(existingData, objects, selectedKeys);
  
  console.log(enrichedObjects);


  const existingData2 = [
    { id: 1, age: 30 },
    { id: 2, age: 25 },
    { id: 3, age: 40 },
    { id: 4, age: 100},
    { id: 10, age:64}
  ];
  
  const objects2 = [
    { id: 1, name: 'Alice', title: 'Prof' },
    { id: 2, name: 'Bob', title: 'Dr' },
    { id: 3, name: 'Charlie', title: 'Colonel' },
  ];
  
  const selectedKeys2 = ['name','title'];
  
  const enrichedObjects2 = pf.enrichObjSelData(existingData2, objects2, selectedKeys2);
  
  console.log(enrichedObjects2);

  const templateObjects = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
  ];
  
  const n = 3;
  
  const populatedObjects = pf.populateListOfObj(templateObjects, n);
  
  console.log(populatedObjects);

// Example usage:
const htmlContent = '<html><body><h1>Hello, World!</h1></body></html>';
const folderName = 'screenshots'; // Specify the desired folder name
const fileName = 'screenshot.png'; // Specify the desired file name and extension
//pf.logHTMLVisual(htmlContent, folderName, fileName);

// Example usage:
const htmlContentNew = '<html><body><h1>Hello, World!</h1></body></html>';
//pf.openHTMLInBrowser(htmlContentNew);


// Example usage:
let array = [1,2,3,4,5]
console.log(pf.productArray(array))

let array2 = pf.shuffleArrayRandom(pf.getNumbers(2,10))
console.log(array2)
console.log(pf.productArray(array2))


// Example usage with multiple keys:
const arrayOfObjects = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "San Francisco" },
  { name: "Charlie", age: 25, city: "Los Angeles" },
  { name: "David", age: 35, city: "New York" },
  { name: "Eve", age: 30, city: "San Francisco" },
];

const keys = ["age"];

const result = pf.extractValuesByKeys(arrayOfObjects, keys);
console.log(result);

const keys2 = ["age","name"];

const result2 = pf.extractValuesByKeys(arrayOfObjects, keys2);
console.log(result2);


// Example usage:
const originalArrayNoise = [10, 20, 30, 40];
const noiseLevel = 10; // 10% noise level
const noisyArray = pf.addNoiseToArray(originalArrayNoise, noiseLevel);
console.log(noisyArray);

const noiseLevel2 = 100; // 10% noise level
const noisyArray2 = pf.addNoiseToArray(originalArrayNoise, noiseLevel2);
console.log(noisyArray2);

// Example usage:
const originalArrayReverse = [10, 20, 30, 40];
const noiseLevelReverse = 10; // 10% noise level
const smoothingFactor = 0.2;
const noisyArrayReverse = pf.addNoiseToArray(originalArrayReverse, noiseLevelReverse);
const smoothedAndDenoisedArray = pf.smoothAndRemoveNoise(noisyArrayReverse, smoothingFactor);
const reversedArray = pf.reverseNoiseSmooth(smoothedAndDenoisedArray, noiseLevel, smoothingFactor);

console.log('Original Array:', originalArrayReverse);
console.log('Noisy Array:', noisyArrayReverse);
console.log('Smoothed and Denoised Array:', smoothedAndDenoisedArray);
console.log('Reversed Array:', reversedArray);


// Example usage:
const inputArray = [2, 6, 12, 25, 30];
const minValue = 0;
const maxValue = 20;
const adjustedArrayRandom = pf.fillArrayToRange(inputArray, minValue, maxValue);

console.log(adjustedArrayRandom);
const adjustedArray = pf.adjustArrayToRange(inputArray, minValue, maxValue);

console.log(adjustedArray);


// Example usage:
const keysCountObject = { name: 3, age: 2, id: 1 };
const newArrayCount = pf.createArrFromObjCount(keysCountObject);

console.log(newArrayCount);


// Example website data with additional elements
const websiteData = {
  totalVisitors: 10000,
  uniqueVisitors: 8000,
  pageViews: 30000,
  bounceRate: 1500,
  conversionRate: 500,
  revenue: 5000,
  averageSessionDuration: 2, // in minutes
};

// Calculate KPIs and ratios for the example data
const KPIs = pf.calculateWebsiteKPIs(websiteData);

// Output the KPIs and ratios to the console
console.log(KPIs);

// Sample website data
const websiteDataMore = {
  totalVisitors: 10000,
  uniqueVisitors: 8000,
  pageViews: 30000,
  bounceRate: 1500,
  conversionRate: 500,
  revenue: 5000,
  averageSessionDuration: 2, // in minutes
  marketingCost: 2000,
  conversions: 300,
  productViews: 2000,
  cartViews: 1000,
  initialCustomers: 1000,
  lostCustomers: 200,
  organicTraffic: 4000,
  paidTraffic: 2000,
  referralTraffic: 1500,
  directTraffic: 2500,
};

// Calculate Customer Acquisition Cost (CAC)
const CAC = pf.calculateCAC(websiteDataMore, websiteDataMore.marketingCost);
console.log('Customer Acquisition Cost (CAC): $' + CAC.toFixed(2));

// Calculate Customer Lifetime Value (CLV)
const CLV = pf.calculateCLV(websiteDataMore.revenue / websiteDataMore.conversions, 0.1); // Assuming a churn rate of 10%
console.log('Customer Lifetime Value (CLV): $' + CLV.toFixed(2));

// Calculate Conversion Funnel Metrics
const funnelMetrics = pf.calculateConversionFunnelMetrics(websiteDataMore);
console.log('Conversion Rate to Cart: ' + funnelMetrics.ConversionRateToCart.toFixed(2) + '%');
console.log('Conversion Rate to Conversion: ' + funnelMetrics.ConversionRateToConversion.toFixed(2) + '%');
console.log('Abandonment Rate: ' + funnelMetrics.AbandonmentRate.toFixed(2) + '%');

// Calculate Return on Investment (ROI)
const ROI = pf.calculateROI(websiteDataMore.revenue, websiteDataMore.marketingCost);
console.log('Return on Investment (ROI): ' + ROI.toFixed(2) + '%');

// Calculate Churn Rate
const churnRate = pf.calculateChurnRate(websiteDataMore);
console.log('Churn Rate: ' + churnRate.toFixed(2) + '%');

// Calculate Traffic Sources Breakdown
const trafficSourcesBreakdown = pf.calculateTrafficSourcesBreakdown(websiteDataMore);
console.log('Organic Traffic Percentage: ' + trafficSourcesBreakdown.OrganicTrafficPercentage.toFixed(2) + '%');
console.log('Paid Traffic Percentage: ' + trafficSourcesBreakdown.PaidTrafficPercentage.toFixed(2) + '%');
console.log('Referral Traffic Percentage: ' + trafficSourcesBreakdown.ReferralTrafficPercentage.toFixed(2) + '%');
console.log('Direct Traffic Percentage: ' + trafficSourcesBreakdown.DirectTrafficPercentage.toFixed(2) + '%');


// Example usage

// Define the list of products
const products = [
  { name: "Product A", quality: 80, price: 50 },
  { name: "Product B", quality: 90, price: 70 },
  { name: "Product C", quality: 85, price: 60 },
  // Add more products here
];

const desiredQuality = 85;
const maxBudget = 150;
const minQuality = 80;
const maxQuality = 90;

const purchasedProducts = pf.buyProducts(products, desiredQuality, maxBudget, minQuality, maxQuality);

console.log("Purchased Products:");
console.log(purchasedProducts);




