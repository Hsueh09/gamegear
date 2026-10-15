"use client";

import { createContext, useContext, useState } from "react";
import { CartItem } from "@/app/cart";

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
  setCart((currentCart) => {
    const existingItem = currentCart.find(
      (cartItem) => cartItem.product.id === item.product.id
    );

    if (existingItem) {
      return currentCart.map((cartItem) =>
        cartItem.product.id === item.product.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + item.quantity,
            }
          : cartItem
      );
    }

    return [...currentCart, item];
  });
};

  const updateQuantity = (productId: number, quantity: number) => {
  setCart((currentCart) =>
    currentCart.map((item) =>
      item.product.id === productId
        ? { ...item, quantity: Math.max(1, quantity) }
        : item
    )
  );
  };
  
  const removeFromCart = (productId: number) => {
  setCart((currentCart) =>
    currentCart.filter(
      (item) => item.product.id !== productId
    )
  );
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart 必須在 CartProvider 裡使用");
  }

  return context;
}