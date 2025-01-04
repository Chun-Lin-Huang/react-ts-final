import React from 'react';
import styles from './Check.module.css';
import { ActionButtonProps } from './types';

export const ActionButton: React.FC<ActionButtonProps> = ({ label, variant, onClick }) => {
  return (
    <button
      className={variant === 'primary' ? styles.primaryButton : styles.secondaryButton}
      onClick={onClick}
    >
      {label}
    </button>
  );
};