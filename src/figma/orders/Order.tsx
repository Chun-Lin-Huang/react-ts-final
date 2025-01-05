import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // 引入 useLocation
import styles from './Orders.module.css';
import { OrderCard } from './OrderCard';
import { ActionButton } from './ActionButton';
import { asyncGet } from '../../utils/fetch';
import { api } from '../../enum/api';
import { Order } from '../../interface/Order'; // 匯入 Order 介面

export const Orders: React.FC = () => {
  const location = useLocation(); // 獲取路由狀態
  const [orders, setOrders] = useState<Order[]>([]); // 儲存從 API 獲取的訂單資料
  const [isLoading, setIsLoading] = useState<boolean>(true); // 加載狀態
  const [error, setError] = useState<string | null>(null); // 錯誤處理

  const handleDelete = () => {};
  const handleEdit = () => {};
  const handleSearch = () => {};

  useEffect(() => {
    // 使用 async 函式呼叫 API
    const fetchOrders = async () => {
      try {
        setIsLoading(true);
        const response = await asyncGet(api.getOrders); // 確保這個 API 路徑正確
        if (response.code === 200) {
          setOrders(response.body as Order[]); // 明確轉型為 Order[]
        } else {
          setError('無法取得訂單資料，請稍後再試。');
        }
      } catch (err) {
        setError('發生錯誤，請確認網路連線。');
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className={styles.ordersContainer}>
      <h1 className={styles.orderTitle}>Order</h1>

      {location.state && (
        <div>
          <h2>訂單資料</h2>
          <p>姓名：{location.state.formData.name}</p>
          <p>電話：{location.state.formData.phone}</p>
          <p>備註：{location.state.formData.note}</p>
          <p>總金額：{`NT$ ${location.state.totalAmount}`}</p>
          <p>內容：</p>
          <pre>{location.state.cartContent}</pre>
        </div>
      )}

      {isLoading ? (
        <p>載入中...</p>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : (
        <div className={styles.orderGrid}>
          {orders.map((order) => (
            <OrderCard key={order.sid} {...order} />
          ))}
        </div>
      )}

      <div className={styles.actionButtons}>
        <ActionButton label="刪除" onClick={handleDelete} variant="delete" />
        <ActionButton label="修改" onClick={handleEdit} variant="edit" />
        <ActionButton label="查詢" onClick={handleSearch} variant="search" />
      </div>
    </div>
  );
};