// ActionButton.tsx
import React from 'react';
import styles from './DeleteOrder.module.css';
import { ButtonProps } from './types';

export const ActionButton: React.FC<ButtonProps> = ({ 
  onClick, 
  variant = 'primary', 
  children, 
  disabled = false   // 添加默认值
}) => {
  return (
    <button 
      onClick={onClick}
      className={`${styles.actionButton} ${styles[variant]}`}
      type="button"
      disabled={disabled}  // 将 disabled 属性传递给 button 元素
    >
      {children}
    </button>
  );
};
