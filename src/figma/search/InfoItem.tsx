import React from 'react';
import styles from './Search.module.css';
import { InfoItemProps } from './types';

export const InfoItem: React.FC<InfoItemProps> = ({ label, className }) => {
  return (
    <div className={`${styles.infoRow} ${className || ''}`}>
      <div className={styles.circleIcon} />
      <div className={styles.infoLabel}>{label}</div>
    </div>
  );
};