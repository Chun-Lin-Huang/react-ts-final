import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Check.module.css';
import { ActionButton } from './ActionButton';
import { LabelWithIcon } from './LabelWithIcon';
import { menuItems } from '../menu/data';
import { useCart } from '../CartconText';

export const Check: React.FC = () => {
  const navigate = useNavigate();
  const { quantities, removeZeroQuantityItems } = useCart();

  const itemsInCart = Object.keys(quantities).map((id) => {
    const itemId = parseInt(id);
    const item = menuItems.find((menuItem) => menuItem.id === itemId);
    return {
      id: itemId,
      name: item ? item.name : '未知商品',
      price: item ? item.price : 0,
      quantity: quantities[itemId] || 0
    };
  });

  const totalAmount = itemsInCart.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const handleConfirm = () => {
    // 在這裡只傳遞資料並跳轉到 CustomerInfo 頁面
    navigate('/customer-info', { state: { quantities, totalAmount } });
  };

  const handleCancel = () => {
    removeZeroQuantityItems(); // 刪除數量為 0 的商品
    navigate('/menu'); // 返回菜單頁面
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Check</h1>
        <div className={styles.orderSection}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/45a22368b7ce5ef8f077881b98770f92cf841392d0f50d3b9cd9c16cd38eafab?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a"
            className={styles.backgroundImage}
            alt=""
          />
          <LabelWithIcon text="訂單內容：" />
          <div className={styles.orderItems}>
            {itemsInCart
              .filter((item) => item.quantity > 0) // 過濾數量為 0 的商品
              .map((item) => (
                <div key={item.id} className={styles.orderItem}>
                  <span>{item.name}</span>
                  <span> x {item.quantity}</span>
                </div>
              ))}
          </div>
          <LabelWithIcon text={`總金額：NT$ ${totalAmount}`} />
        </div>
        <div className={styles.actionButtons}>
          <ActionButton label="取消" variant="primary" onClick={handleCancel} />
          <ActionButton label="確定" variant="secondary" onClick={handleConfirm} />
        </div>
      </div>
    </div>
  );
};