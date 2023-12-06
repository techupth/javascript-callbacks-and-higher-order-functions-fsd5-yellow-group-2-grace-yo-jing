const productPrices = [1000, 3500, 3300, 49000, 500];

function calculatePrice(prices, callback) {
  for (let i = 0; i < prices.length; i++) {
    callback(prices[i]);
  }
}

function discount5Percent(price) {
  const newPrice = price - price * 0.05;
  console.log(newPrice);
}

calculatePrice(productPrices, discount5Percent);
