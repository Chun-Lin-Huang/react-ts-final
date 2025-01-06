import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Orders.module.css';
import { OrderCard } from './OrderCard';
import { ActionButton } from './ActionButton';
import { asyncGet } from '../../utils/fetch';
import { api } from '../../enum/api';
import { Order } from '../../interface/Order';

export const Orders: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = () => {
    navigate('/delete'); // 跳转到 DeleteOrder 页面
  };
  
  const handleEdit = () => {
    navigate('/update');
  };
  const handleSearch = () => {
    navigate('/search');
  };

  // 返回菜單的處理函數
  const handleGoBack = () => {
    navigate('/menu'); // 導航到菜單頁面
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setIsLoading(true);
        const response = await asyncGet(api.getOrders);
        if (response.code === 200) {
          setOrders(response.body as Order[]);
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
        {/* 使用 ActionButton 實現返回菜單 */}
        <ActionButton label="返回菜單" onClick={handleGoBack} variant="back" />
      </div>
    </div>
  );
};