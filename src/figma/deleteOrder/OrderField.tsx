import React from 'react';
import styles from './DeleteOrder.module.css';
import { OrderFieldProps } from './types';

export const OrderField: React.FC<OrderFieldProps> = ({ icon, label, value }) => {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldIcon}>
        {/* 如果 icon 是图像 URL，则使用 <img> 标签渲染图标 */}
        {icon && <img src={icon} alt={label} className={styles.iconImage} />}
      </div>
      <div className={styles.fieldLabel}>
        <strong>{label}:</strong> {value} {/* 渲染字段值 */}
      </div>
    </div>
  );
};