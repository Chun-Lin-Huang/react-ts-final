import React from 'react';
import styles from './Orders.module.css';
import { OrderCardProps } from './types';

export const OrderCard: React.FC<OrderCardProps> = ({
  sid,
  name,
  phoneNumber,
  content,
  total,
  remark
}) => {
  return (
    <div className={styles.orderCard}>
      <div className={styles.orderField}>
        <div className={styles.circleIcon} />
        <div className={styles.fieldLabel}>訂單編號：{sid}</div>
      </div>
      <div className={styles.orderField}>
        <div className={styles.circleIcon} />
        <div className={styles.fieldLabel}>姓名：{name}</div>
      </div>
      <div className={styles.orderField}>
        <div className={styles.circleIcon} />
        <div className={styles.fieldLabel}>電話：{phoneNumber}</div>
      </div>
      <div className={styles.orderField}>
        <div className={styles.circleIcon} />
        <div className={styles.fieldLabel}>內容：{content}</div>
      </div>
      <div className={styles.orderField}>
        <div className={styles.circleIcon} />
        <div className={styles.fieldLabel}>總金額：{total}</div>
      </div>
      <div className={styles.orderField}>
        <div className={styles.circleIcon} />
        <div className={styles.fieldLabel}>備註：{remark}</div>
      </div>
    </div>
  );
};