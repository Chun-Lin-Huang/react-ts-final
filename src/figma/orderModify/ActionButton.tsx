import React from 'react';
import styles from './OrderModify.module.css';
import { ActionButtonProps } from './types';

export const ActionButton: React.FC<ActionButtonProps> = ({ text, onClick }) => {
  return (
    <button 
      className={styles.actionButton}
      onClick={onClick}
      aria-label={text}
    >
      {text}
    </button>
  );
};