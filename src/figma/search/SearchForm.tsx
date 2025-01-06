import React from 'react';
import styles from './Search.module.css';

interface SearchFormProps {
  onSearch: () => void;
  setSid: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchForm: React.FC<SearchFormProps> = ({ onSearch, setSid }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(); // 調用 onSearch 來進行搜尋
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
        onChange={(e) => setSid(e.target.value)} // 更新 sid
      />
      <button type="submit" className={styles.searchButton}>
        查詢
      </button>
    </form>
  );
};
