import React from 'react';
import styles from './DeleteOrder.module.css';
import { ButtonProps } from './types';

export const ActionButton: React.FC<ButtonProps> = ({ 
  onClick, 
  variant = 'primary', 
  children 
}) => {
  return (
    <button 
      onClick={onClick}
      className={`${styles.actionButton} ${styles[variant]}`}
      type="button"
    >
      {children}
    </button>
  );
};