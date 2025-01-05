import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './Menu.module.css';
import { MenuGrid } from './MenuGrid';
import { CartItem } from './CartItem';
import { menuItems } from './data';
import { useCart } from '../CartconText';

export const Menu: React.FC = () => {
  const { quantities, setQuantities } = useCart();
  const navigate = useNavigate();

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

  const totalQuantity = Object.values(quantities).reduce((total, quantity) => total + quantity, 0);

  const handleGoToCheck = () => {
    navigate("/check");
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
            quantity={quantities[item.id] || 0}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        ))}
      </div>
      <div className={styles.cartButtonContainer}>
        <button onClick={handleGoToCheck} className={styles.cartButton}>
          <FaShoppingCart className={styles.cartIcon} />
          {totalQuantity > 0 && <span className={styles.cartCount}>{totalQuantity}</span>}
        </button>
      </div>
    </div>
  );
};