import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { asyncPut } from '../../utils/fetch'; // 假设 asyncPut 是封装的 PUT 请求工具
import { api } from '../../enum/api'; // 引入 API 枚举
import styles from './OrderModify.module.css';
import { OrderField } from './OrderField';
import { ActionButton } from './ActionButton';

export const OrderModify: React.FC = () => {
  const navigate = useNavigate();

  const [orderData, setOrderData] = useState({
    sid: '',
    姓名: '',
    電話: '',
    備註: ''
  });

  // 更新输入框的值
  const handleInputChange = (field: string, value: string) => {
    setOrderData((prevData) => ({
      ...prevData,
      [field]: value
    }));
  };

  // 提交更新请求
  const handleSubmit = async () => {
  if (!orderData.sid) {
    alert('請輸入 SID！');
    return;
  }

  try {
    // 调用 API 更新数据
    const response = await asyncPut(api.update, {
      sid: orderData.sid,
      name: orderData.姓名,
      phoneNumber: orderData.電話,
      remark: orderData.備註
    });

    console.log('後端響應:', response);

    // 修改判断逻辑以适配后端返回的格式
    if (response && response.code === 200) {
      alert(response.message || '更新成功！'); // 使用后端返回的 message
      navigate('/order'); // 跳转到订单页面
    } else {
      alert(response.message || '更新失敗：未知錯誤');
    }
  } catch (error) {
    console.error('更新失敗:', error);
    alert('更新時發生錯誤，請稍後再試！');
  }
};


  // 取消操作
  const handleCancel = () => {
    navigate('/Order'); // 跳转到订单页面
  };

  const orderFields = [
    { label: ' SID ', value: orderData.sid, field: 'sid', placeholder: '輸入 SID' },
    { label: ' 姓名 ', value: orderData.姓名, field: '姓名', placeholder: '輸入姓名' },
    { label: ' 電話 ', value: orderData.電話, field: '電話', placeholder: '輸入電話' },
    { label: ' 備註 ', value: orderData.備註, field: '備註', placeholder: '輸入備註' }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Modify Order</h1>

        <form className={styles.orderForm}>
          {orderFields.map((field, index) => (
            <OrderField
              key={index}
              label={field.label}
              value={field.value}
              onChange={(e) => handleInputChange(field.field, e.target.value)}
              placeholder={field.placeholder}
            />
          ))}
        </form>

        <div className={styles.actionButtons}>
          <ActionButton text="取消" onClick={handleCancel} />
          <ActionButton text="修改" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};