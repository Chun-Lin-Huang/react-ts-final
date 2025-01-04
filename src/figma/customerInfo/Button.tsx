import React from 'react';
import styles from './CustomerInfo.module.css';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
  return (
    <button 
      className={variant === 'primary' ? styles.primaryButton : styles.secondaryButton}
      onClick={onClick}
    >
      {children}
    </button>
  );
}