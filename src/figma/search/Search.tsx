import React from 'react';
import styles from './Search.module.css';
import { SearchForm } from './SearchForm';
import { InfoItem } from './InfoItem';

export const Search: React.FC = () => {
  const infoItems = [
    { label: '姓名：', className: styles.nameInfo },
    { label: '電話：', className: styles.phoneInfo },
    { label: '內容：', className: styles.contentInfo },
    { label: '總金額：', className: styles.amountInfo },
    { label: '備註：', className: styles.remarkInfo }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Search</h1>
        <SearchForm />
        <div className={styles.infoContainer}>
          {infoItems.map((item, index) => (
            <InfoItem key={index} {...item} />
          ))}
        </div>
        <button className={styles.cancelButton}>取消</button>
      </div>
    </div>
  );
};