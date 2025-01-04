import React, { useState } from 'react';
import styles from './Menu.module.css';
import { MenuGrid } from './MenuGrid';
import { CartItem } from './CartItem';
import { menuItems } from './data';

export const Menu: React.FC = () => {
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const handleIncrement = (id: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const handleDecrement = (id: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0)
    }));
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuHeader}>
        <h1 className={styles.menuTitle}>Menu</h1>
        <MenuGrid items={menuItems} />
      </div>
      <div className={styles.cartSection}>
        {menuItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            quantity={quantities[item.id] || 0}  /* 確保所有商品都會顯示 */
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        ))}
      </div>
    </div>
  );
};