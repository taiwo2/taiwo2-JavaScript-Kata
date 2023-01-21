const products = {
  A: 50,
  B: 30,
  C: 20,
  D: 15,
};

export const getTotalItems = (sku, quantity) => {
  const result = {
    totalItemOffer: 0,
    unMatchedItems: quantity,
  };

  const skuOffer = offers[sku];

  if (skuOffer && quantity >= skuOffer.quantity) {
    const numOfMatchOffers = Math.floor(quantity / skuOffer.quantity);
    result.unMatchedItems = quantity % skuOffer.quantity;
    result.totalItemOffer = skuOffer.price * numOfMatchOffers;
  }

  return result;
};

const offers = {};

export const addSpecialOffer = (sku, quantity, price) => {
  offers[sku] = {
    quantity: quantity,
    price: price,
  };
};

export const calculate = (sku, quantity) => {
  let totalItem = 0;
  let offerCalculationResult = getTotalItems(sku, quantity);
  totalItem += products[sku] * offerCalculationResult.unMatchedItems;
  totalItem += offerCalculationResult.totalItemOffer;
  return totalItem;
};
