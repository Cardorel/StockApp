import {CartToAddInterface} from '../interface/CartToAdd.ts';

export const addItemToCart = (
  cartItems: CartToAddInterface[],
  cartToAdd: CartToAddInterface,
) => {
  const existingCart = cartItems.find(cart => cart.id === cartToAdd.id);
  if (existingCart) {
    return cartItems.map(item =>
      item.id === cartToAdd.id ? {...item, quantity: item?.quantity} : item,
    );
  }
  return [...cartItems, {...cartToAdd, quantity: 1}];
};

export const handleTotalPrice = (cartItems: CartToAddInterface[]) =>
  cartItems.reduce(
    (acc, item) =>
      acc +
      item.price * (1 - (+item?.discountPercentage || 0) / 100) * item.quantity,
    0,
  );

export const handleTotalQuantity = (cartItems: CartToAddInterface[]) =>
  cartItems.reduce((acc, item) => acc + item.quantity, 0);

export const removeItemFromCart = (
  cartItems: CartToAddInterface[],
  id: number,
) => cartItems.filter(item => item.id !== id);

export const handleIncrementQuantity = (
  cartItems: CartToAddInterface[],
  id: number,
) =>
  cartItems.map(cart =>
    cart?.id === id ? {...cart, quantity: cart.quantity + 1} : cart,
  );

export const handleDecrementQuantity = (
  cartItems: CartToAddInterface[],
  id: number,
) =>
  cartItems.map(cart =>
    cart?.id === id
      ? {...cart, quantity: cart.quantity === 1 ? 1 : cart.quantity - 1}
      : cart,
  );
