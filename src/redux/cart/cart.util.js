export const addItemQuantity = (itemlist, itemToAdd) => {
  const existingItem = itemlist.find((ele) => ele.id === itemToAdd.id);
  if (existingItem) {
    return itemlist.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...itemlist, { ...itemToAdd, quantity: 1 }];
  }
};

export const removeItem = (itemlist, itemToRemove) => {
  return itemlist.filter((ele) => ele.id !== itemToRemove.id);
};

export const minusItem = (itemlist, item) => {
  if (item.quantity === 1) {
    return removeItem(itemlist, item);
  } else {
    return itemlist.map((ele) =>
      ele.id == item.id ? { ...ele, quantity: ele.quantity - 1 } : ele
    );
  }
};
