const validated = products.filter((product) => product.category === category );
console.log(validated);
response.push(validated[0].name);
response.push(validated[1].name);

export function groupProducts(products, category) {
  // Tu código aquí
  const names = [];
  const prices = [];

  const validated = products.filter((product) => product.category === category);
  // console.log(validated);

  for (let i = 0; i < validated.length; i++){
    const name = validated[i].name;
    // console.log(name);
    names.push(name);
    const price = validated[i].price;
    // console.log(price);
    prices.push(price);
  }

  const stringNames = names.join(', ');
  // console.log(stringNames);

  const sumPrices = prices.reduce((a, b) => a + b, 0);
  // console.log(sumPrices);

  // console.log(names);
  // console.log(prices);
  
  const rta = {
    products: stringNames,
    totalPrice: sumPrices,
  }
  console.log(rta);

  return rta;
  
}
