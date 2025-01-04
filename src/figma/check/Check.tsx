import React from 'react';
import styles from './Check.module.css';
import { ActionButton } from './ActionButton';
import { LabelWithIcon } from './LabelWithIcon';

export const Check: React.FC = () => {
  const handleCancel = () => {
    // Handle cancel action
  };

  const handleConfirm = () => {
    // Handle confirm action
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
          <LabelWithIcon text="總金額：" />
        </div>
        <div className={styles.actionButtons}>
          <ActionButton
            label="取消"
            variant="primary"
            onClick={handleCancel}
          />
          <ActionButton
            label="確定"
            variant="secondary"
            onClick={handleConfirm}
          />
        </div>
      </div>
    </div>
  );
};