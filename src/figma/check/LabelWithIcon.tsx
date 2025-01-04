import React from 'react';
import styles from './Check.module.css';
import { CircleIcon } from './CircleIcon';
import { LabelWithIconProps } from './types';

export const LabelWithIcon: React.FC<LabelWithIconProps> = ({ text }) => {
  return (
    <div className={styles.labelWithIcon}>
      <CircleIcon size={85} />
      <span className={styles.labelText}>{text}</span>
    </div>
  );
};