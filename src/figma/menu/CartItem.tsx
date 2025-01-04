import React from 'react';
import styles from './Menu.module.css';
import { CartItemProps } from './types';

export const CartItem: React.FC<CartItemProps> = ({ 
  item, 
  onIncrement, 
  onDecrement,
  quantity 
}) => {
  return (
    <div className={styles.cartItem}>
      <img
        loading="lazy"
        src={item.image}
        alt={`${item.name} 圖片`}
        className={styles.cartItemImage}
      />
      <div className={styles.cartItemDetails}>
        <div className={styles.cartItemName}>{item.name}</div>
        <div className={styles.quantityControls}>
          <button 
            className={styles.quantityButton}
            onClick={() => onDecrement(item.id)}
            aria-label={`減少 ${item.name} 數量`}
          >
            -
          </button>
          <div className={styles.quantityDisplay}>{quantity}</div>
          <button 
            className={styles.quantityButton}
            onClick={() => onIncrement(item.id)}
            aria-label={`增加 ${item.name} 數量`}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};