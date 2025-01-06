import React from 'react';
import styles from './OrderModify.module.css';
import { OrderFieldProps } from './types';

export const OrderField: React.FC<OrderFieldProps> = ({ label, value, onChange, placeholder }) => {
  return (
    <div className={styles.fieldContainer}>
      <label className={styles.fieldLabel}>{label}</label>
      <input 
        type="text"
        className={styles.fieldInput}
        value={value}
        onChange={onChange} 
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
};