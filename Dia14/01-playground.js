export function processShoppingList(list) {
  // Tu código aquí 👈
  const modifiedList = [];
  for (let i = 0; i < list.length; i++) {
    const verify = list[i].name.includes('oferta');
    // console.log(verify);
    if (!verify) {
      const productPorCantidad = list[i].price * list[i].quantity;
      modifiedList.push(productPorCantidad);
      // console.log(productPorCantidad);
    } else {
      const dcto = (list[i].price * 20) / 100;
      const finalPriceProduct = (list[i].price - dcto) * list[i].quantity;
      modifiedList.push(finalPriceProduct);
      // console.log(finalPriceProduct);
      // console.log(dcto);
    }
    delete list[i].quantity
  }
  const rta = modifiedList.reduce((a, b) => a + b, 0);
  console.log(rta);

  return rta;
}

export function processShoppingList(list) {
  list.forEach((item) => {
    if (item.name.includes("oferta")) {
      item.price = item.price - item.price * 0.2;
    }

    item.price = item.price * item.quantity;

    delete item.quantity;
  });

  const total = list.reduce((totalPrice, item) => totalPrice + item.price, 0);

  return total;
}

