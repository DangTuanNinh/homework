const boughtCandy = [];
const amountToSpend = Math.random() * 100;
function addCandy(candyType, weight) {
  const candyPrices = {
    Sweet: 0.5,
    Chocolate: 0.7,
    Toffee: 1.1,
    Chewing_gum: 0.03,
  };
  const priceGram = candyPrices[candyType];
  const totalPrice = priceGram * weight;
  boughtCandy.push(totalPrice);
  return boughtCandy;
}

addCandy("Sweet", 20);

function canBuyMoreCandy() {
  let total = 0;
  for (let i = 0; i < boughtCandy.length; i++) {
    total += boughtCandy[i];
  }
  return total < amountToSpend;
}

if (canBuyMoreCandy()) {
  console.log("You can buy more, so please do!");
} else {
  console.log();
}
