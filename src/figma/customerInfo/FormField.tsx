import React from 'react';
import styles from './CustomerInfo.module.css';
import { FormFieldProps } from './types';

export const FormField: React.FC<FormFieldProps> = ({ icon, label, value, placeholder, disabled, onChange, type = "text" }) => {
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
        <label
          htmlFor={inputId}
          className={`${styles.label} ${disabled ? styles.labelDisabled : ''}`}
        >
          {label}
        </label>
      </div>
      <input
        type={type}
        id={inputId}
        className={styles.input}
        value={value}
        placeholder={placeholder}
        aria-label={label}
        disabled={disabled}
        aria-disabled={disabled}
        onChange={onChange} // 處理輸入事件
      />
    </div>
  );
};
