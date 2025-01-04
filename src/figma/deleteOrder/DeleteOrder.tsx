import React from 'react';
import styles from './DeleteOrder.module.css';
import { OrderDetails } from './OrderDetails';
import { ActionButton } from './ActionButton';

export const DeleteOrder: React.FC = () => {
  const orderFields = [
    { icon: <div className={styles.iconCircle} />, label: '姓名：' },
    { icon: <div className={styles.iconCircle} />, label: '電話：' },
    { icon: <div className={styles.iconCircle} />, label: '內容：' },
    { icon: <div className={styles.iconCircle} />, label: '總金額：' },
    { icon: <div className={styles.iconCircle} />, label: '備註：' }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>DELETE</h1>
        
        <form className={styles.searchForm}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4186eaf6f029894a0af29c9ec00175c8720513cbdc2f4fd7438915ed935be180?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a"
            className={styles.backgroundImage}
            alt=""
          />
          <label htmlFor="orderNumber" className={styles.searchLabel}>
            請輸入編號：
          </label>
          <input
            id="orderNumber"
            type="text"
            className={styles.searchInput}
            placeholder="訂單編號"
            aria-label="訂單編號"
          />
          <button type="submit" className={styles.submitButton}>
            確定
          </button>
        </form>

        <OrderDetails fields={orderFields} />

        <div className={styles.actionButtons}>
          <ActionButton variant="primary">取消</ActionButton>
          <ActionButton variant="danger">刪除</ActionButton>
        </div>
      </div>
    </div>
  );
};