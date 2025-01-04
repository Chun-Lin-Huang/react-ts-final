import React from 'react';
import styles from './Orders.module.css';
import { ActionButtonProps } from './types';

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onClick,
  variant = 'search'
}) => {
  return (
    <button 
      className={styles.actionButton}
      onClick={onClick}
      type="button"
      aria-label={label}
    >
      {label}
    </button>
  );
};