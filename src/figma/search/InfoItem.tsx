import React from 'react';
import styles from './Search.module.css';

interface InfoItemProps {
  label: string;
  className: string;
  value: string | number | undefined;
}

export const InfoItem: React.FC<InfoItemProps> = ({ label, className, value }) => {
  console.log('InfoItem 顯示資料:', value);  // 再次檢查資料
  return (
    <div className={`${styles.infoRow} ${className || ''}`}>
      <div className={styles.circleIcon} />
      <div className={styles.infoLabel}>{label}</div>
      <div className={styles.infoValue}>{value || '無資料'}</div> {/* 如果沒有值顯示 '無資料' */}
    </div>
  );
};
