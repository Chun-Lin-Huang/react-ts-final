import React from 'react';
import styles from './OrderModify.module.css';
import { CircleIconLabelProps } from './types';

export const CircleIconLabel: React.FC<CircleIconLabelProps> = ({ label }) => {
  return (
    <div className={styles.iconLabelContainer}>
      <div className={styles.circleIcon} />
      <div className={styles.iconLabel}>{label}</div>
    </div>
  );
};