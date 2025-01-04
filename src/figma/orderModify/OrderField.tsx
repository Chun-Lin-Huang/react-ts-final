import React from 'react';
import styles from './OrderModify.module.css';
import { OrderFieldProps } from './types';

export const OrderField: React.FC<OrderFieldProps> = ({ label, value }) => {
  return (
    <div className={styles.fieldContainer}>
      <label className={styles.fieldLabel}>{label}</label>
      <input 
        type="text"
        className={styles.fieldInput}
        value={value}
        aria-label={label}
      />
    </div>
  );
};