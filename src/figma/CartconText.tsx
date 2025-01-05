import React, { createContext, useContext, useState } from 'react';

interface CartContextType {
  quantities: Record<number, number>;
  setQuantities: React.Dispatch<React.SetStateAction<Record<number, number>>>;
  removeZeroQuantityItems: () => void; // 新增刪除數量為 0 的商品的方法
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

  return (
    <CartContext.Provider value={{ quantities, setQuantities, removeZeroQuantityItems }}>
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