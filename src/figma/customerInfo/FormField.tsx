import React from 'react';
import styles from './CustomerInfo.module.css';
import { FormFieldProps } from './types';

export const FormField: React.FC<FormFieldProps> = ({ icon, label, value, placeholder }) => {
  const inputId = `${label.toLowerCase()}-input`;
  
  return (
    <div className={styles.formField}>
      <div className={styles.fieldLabel}>
        <img
          loading="lazy"
          src={icon}
          alt=""
          className={styles.fieldIcon}
        />
        <label htmlFor={inputId} className={styles.label}>{label}</label>
      </div>
      <input
        type="text"
        id={inputId}
        className={styles.input}
        value={value}
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
}