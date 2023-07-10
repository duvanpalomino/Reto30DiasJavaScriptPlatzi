const list = [...products];

  list.sort((a, b) => a.price - b.price);
  list.sort((a, b) => b.inStock - a.inStock);
  return list