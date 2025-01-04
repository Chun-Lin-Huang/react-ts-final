import React from 'react';
import styles from './Search.module.css';
import { SearchFormData } from './types';

export const SearchForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <label htmlFor="orderNumber" className={styles.searchLabel}>
        請輸入編號：
      </label>
      <input
        id="orderNumber"
        type="text"
        className={styles.searchInput}
        placeholder="訂單編號"
        aria-label="訂單編號"
      />
      <button type="submit" className={styles.searchButton}>
        查詢
      </button>
    </form>
  );
};