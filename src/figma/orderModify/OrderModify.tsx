import React from 'react';
import { useNavigate } from 'react-router-dom'; // 引入 useNavigate
import styles from './OrderModify.module.css';
import { OrderField } from './OrderField';
import { CircleIconLabel } from './CircleIconLabel';
import { ActionButton } from './ActionButton';

export const OrderModify: React.FC = () => {
  const navigate = useNavigate(); // 初始化 navigate

  const orderFields = [
    { label: '編號：', value: '訂單編號' },
    { label: '姓名：', value: '修改姓名' },
    { label: '電話：', value: '修改電話' },
    { label: '備註：', value: '修改備註' }
  ];

  const orderDetails = [
    '姓名：',
    '電話：',
    '內容：',
    '總金額：',
    '備註：'
  ];

  const handleCancel = () => {
    navigate('/Order'); // 跳轉到 /Order 頁面
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Modify</h1>
        
        <section className={styles.modifySection}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/571504efed67b1230a49727537e6abcbac636c9641681fe4f32c253089c752dd?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a"
            className={styles.backgroundImage}
            alt=""
          />
          
          <form className={styles.orderForm}>
            {orderFields.map((field, index) => (
              <OrderField
                key={index}
                label={field.label}
                value={field.value}
              />
            ))}
            <ActionButton text="修改" />
          </form>
        </section>

        <section className={styles.detailsSection}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c2c166c38cf15b4ef0486d7795ba1f184102ac42f8ddcca69e4ab213bf8e7bd?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a"
            className={styles.backgroundImage}
            alt=""
          />
          
          {orderDetails.map((label, index) => (
            <CircleIconLabel
              key={index}
              label={label}
            />
          ))}
        </section>

        <div className={styles.actionButtons}>
          <ActionButton text="取消" onClick={handleCancel} />
          <ActionButton text="確定" />
        </div>
      </div>
    </div>
  );
};