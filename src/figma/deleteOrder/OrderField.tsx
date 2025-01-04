import React from 'react';
import styles from './DeleteOrder.module.css';
import { OrderFieldProps } from './types';

export const OrderField: React.FC<OrderFieldProps> = ({ icon, label }) => {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldIcon}>
        {icon}
      </div>
      <div className={styles.fieldLabel}>{label}</div>
    </div>
  );
};