import React, { createContext, useContext, useState } from 'react';

interface CartContextType {
  quantities: Record<number, number>;
  setQuantities: React.Dispatch<React.SetStateAction<Record<number, number>>>;
  removeZeroQuantityItems: () => void;
  setCart: (cart: Record<number, number>) => void; // 用來清空購物車
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  // 刪除數量為 0 的商品
  const removeZeroQuantityItems = () => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = Object.entries(prevQuantities)
        .filter(([_, quantity]) => quantity > 0) // 保留數量大於 0 的商品
        .reduce((acc, [id, quantity]) => {
          acc[Number(id)] = quantity;
          return acc;
        }, {} as Record<number, number>);
      return updatedQuantities;
    });
  };

  // 用來清空購物車的函數
  const setCart = (cart: Record<number, number>) => {
    setQuantities(cart); // 清空購物車或更新為新內容
  };

  return (
    <CartContext.Provider value={{ quantities, setQuantities, removeZeroQuantityItems, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};