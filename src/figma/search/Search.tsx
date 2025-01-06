import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 引入 useNavigate
import styles from './Search.module.css';
import { SearchForm } from './SearchForm';
import { InfoItem } from './InfoItem';
import { api } from '../../enum/api';

export const Search: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any>(null); // 用來儲存搜尋結果
  const [sid, setSid] = useState<string>(''); // 儲存用戶輸入的 sid
  const navigate = useNavigate(); // 初始化 navigate

  const infoItems = [
    { label: '姓名：', className: styles.nameInfo },
    { label: '電話：', className: styles.phoneInfo },
    { label: '內容：', className: styles.contentInfo },
    { label: '總金額：', className: styles.amountInfo },
    { label: '備註：', className: styles.remarkInfo }
  ];

  // 當按下搜尋按鈕時執行此方法
  const handleSearch = async () => {
    if (!sid) {
      alert('請輸入訂單編號');
      return;
    }

    try {
      // 呼叫 API 查詢
      const response = await fetch(`${api.findOne}?sid=${sid}`);
      const data = await response.json();
      if (data.code === 200) {
        setSearchResults(data.body); // 更新搜尋結果
        console.log('API 返回資料:', data.body); // 日誌檢查
      } else {
        alert('查無資料');
      }
    } catch (error) {
      console.error('API 錯誤:', error);
      alert('搜尋過程中發生錯誤');
    }
  };

  // 取消按鈕事件處理
  const handleCancel = () => {
    navigate('/Order'); // 跳轉到 /Order 頁面
  };

  // 映射 label 到 API 的字段
  const labelToFieldMap: { [key: string]: string } = {
    '姓名：': 'name',
    '電話：': 'phoneNumber',
    '內容：': 'content',
    '總金額：': 'total',
    '備註：': 'remark'
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Search</h1>
        <SearchForm onSearch={handleSearch} setSid={setSid} />
        <div className={styles.infoContainer}>
          {searchResults ? (
            infoItems.map((item, index) => {
              const field = labelToFieldMap[item.label];  // 取得對應字段
              const value = searchResults[field];  // 從 searchResults 中獲取值
              console.log(`label: ${item.label}, field: ${field}, value: ${value}`);  // 調試輸出
              return (
                <InfoItem
                  key={index}
                  label={item.label}
                  className={item.className}
                  value={value}  // 顯示從 searchResults 中獲得的值
                />
              );
            })
          ) : (
            <p>沒有搜尋結果</p>
          )}
        </div>
        <button className={styles.cancelButton} onClick={handleCancel}>
          取消
        </button>
      </div>
    </div>
  );
}