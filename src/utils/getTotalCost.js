const getTotalCost = (cart) => {
  if (cart.length > 1) {
    const price = cart.reduce((acc, item) => {
      let newAcc = acc + item.price;

      newAcc = newAcc.toFixed(2);
      newAcc = Number(newAcc);

      return newAcc;
    }, 0);

    return (Math.round(price * 100) / 100).toFixed(2);
  } else if (cart.length === 1) {
    return cart[0].price;
  } else return 0;
};

export default getTotalCost;
