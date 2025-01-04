import React from 'react';
import styles from './Check.module.css';
import { CircleIconProps } from './types';

export const CircleIcon: React.FC<CircleIconProps> = ({ size }) => {
  return (
    <div 
      className={styles.circleIcon}
      style={{ width: `${size}px`, height: `${size}px` }}
      role="presentation"
    />
  );
};