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
