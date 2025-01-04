import React from 'react';
import styles from './Menu.module.css';
import { MenuGridProps } from './types';

export const MenuGrid: React.FC<MenuGridProps> = ({ items }) => {
  return (
    <div className={styles.menuGrid}>
      {items.map((item) => (
        <div key={item.id} className={styles.menuItem}>
          <div className={styles.itemName}>{item.name}</div>
          <img 
            loading="lazy"
            src={item.image}
            alt={`${item.name} 圖片`}
            className={styles.itemImage}
          />
          <div className={styles.itemPrice}>NT${item.price}</div>
        </div>
      ))}
    </div>
  );
};