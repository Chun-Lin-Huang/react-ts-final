import React, { useState } from 'react';
import styles from './DeleteOrder.module.css';
import { ActionButton } from './Button';
import { useNavigate } from 'react-router-dom';
import { api } from '../../enum/api';
import { OrderDetails } from './OrderDetails';  // 引入 OrderDetails 组件
import { asyncDelete, asyncGet } from '../../utils/fetch';  // 引入 asyncDelete 和 asyncGet 方法

export const DeleteOrder: React.FC = () => {
  const navigate = useNavigate();

  const [orderDetails, setOrderDetails] = useState<any | null>(null);
  const [orderNumber, setOrderNumber] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false); // 加载状态
  const [error, setError] = useState<string | null>(null); // 错误信息

  const handleCancel = () => {
    navigate('/order');
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // 使用 asyncGet 获取单个订单的详细信息
      const data = await asyncGet(`${api.findOne}?sid=${orderNumber}`);
      console.log("獲取訂單資訊：", data);  // 打印返回的数据，检查是否正确

      if (data) {
        setOrderDetails(data.body);  // 设置订单详情
      } else {
        setError('未找到訂單');
      }
    } catch (err) {
      setError('獲取訂單失敗');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!orderDetails) return;
  
    setLoading(true);
    setError(null);
  
    try {
      // 使用 asyncDelete 删除订单
      const response = await asyncDelete(`${api.delete}?sid=${orderNumber}`);
  
      if (response) {
        console.log(`訂單 ${orderNumber} 已被刪除`);
        setOrderDetails(null); // 删除订单后清除详情
        alert(`訂單 ${orderNumber} 刪除成功！`); // 弹出框显示成功信息
        navigate('/order'); // 删除成功后跳转回订单页面
      } else {
        setError('刪除訂單失敗');
        alert('刪除訂單失敗'); // 弹出框显示错误信息
      }
    } catch (err) {
      setError('刪除訂單失敗');
      alert('刪除訂單失敗'); // 弹出框显示错误信息
    } finally {
      setLoading(false);
    }
  };  

  // 将订单字段格式化为数组以供 OrderDetails 组件使用
  const formattedOrderFields = orderDetails
    ? [
        { label: '姓名', value: orderDetails.name, icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/904d213115062545fbf487cfe2c2d51aa34efbc9cda1c6d9a34347e9b21787f5?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a" },
        { label: '電話', value: orderDetails.phoneNumber, icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ad5b0627e7f2ce88e9d1a3d4d09bc506477a5a831aa0c2971a0924cf7496b7c?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a" },
        { label: '內容', value: orderDetails.content, icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10d017b12fdc6e4b8a7c5f93271c3aed3419c1cca34fcddc280897efcf8a3baf?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a" },
        { label: '總金額', value: orderDetails.total, icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac0e1f2bcc7ca2bae3680c94acb91d55332f43737865c483a302a888c7a91696?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a" },
        { label: '備註', value: orderDetails.remark, icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/40b94e6092a5c178c2ef9e4e504ed21b3eb38ee20e390ec52bca35ab828181a1?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a" },
      ]
    : [];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>DELETE</h1>

        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <label htmlFor="orderNumber" className={styles.searchLabel}>
            請輸入編號：
          </label>
          <input
            id="orderNumber"
            type="text"
            className={styles.searchInput}
            placeholder="訂單編號"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)} // 更新订单编号
            aria-label="訂單編號"
          />
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? '載入中...' : '確認'}
          </button>
        </form>

        {error && <div className={styles.error}>{error}</div>}

        {/* 显示订单详情 */}
        {orderDetails && (
          <OrderDetails fields={formattedOrderFields} />
        )}

        {/* 始终显示取消按钮 */}
        <ActionButton variant="primary" onClick={handleCancel}>取消</ActionButton>

        {/* 删除订单按钮 */}
        <div className={styles.actionButtons}>
          <ActionButton variant="danger" onClick={handleDelete} disabled={loading || !orderDetails}>
            {loading ? '刪除中...' : '刪除'}
          </ActionButton>
        </div>
      </div>
    </div>
  );
};