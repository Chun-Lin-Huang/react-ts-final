import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 引入 useNavigate
import styles from './CustomerInfo.module.css';
import { FormField } from './FormField';
import { Button } from './Button';
import { useCart } from '../CartconText'; // 引入購物車上下文
import { menuItems } from '../menu/data';
import { asyncGet } from '../../utils/fetch'; // 引入 API 請求工具
import { api } from '../../enum/api'; // 引入 API 端點

const formFields = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/904d213115062545fbf487cfe2c2d51aa34efbc9cda1c6d9a34347e9b21787f5?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a", label: "姓名：", placeholder: "輸入姓名" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ad5b0627e7f2ce88e9d1a3d4d09bc506477a5a831aa0c2971a0924cf7496b7c?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a", label: "電話：", placeholder: "輸入電話" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10d017b12fdc6e4b8a7c5f93271c3aed3419c1cca34fcddc280897efcf8a3baf?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a", label: "內容：", placeholder: "" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac0e1f2bcc7ca2bae3680c94acb91d55332f43737865c483a302a888c7a91696?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a", label: "總金額", placeholder: "" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/40b94e6092a5c178c2ef9e4e504ed21b3eb38ee20e390ec52bca35ab828181a1?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a", label: "備註：", placeholder: "輸入備註" }
];

export const CustomerInfo: React.FC = () => {
  const { quantities } = useCart(); // 從上下文中獲取購物車數據
  const navigate = useNavigate(); // 初始化 useNavigate


  // 將購物車的商品數據與商品詳細資料關聯
  const itemsInCart = Object.keys(quantities).map((id) => {
    const itemId = parseInt(id);
    const item = menuItems.find((menuItem) => menuItem.id === itemId);
    return {
      id: itemId,
      name: item?.name || "未知商品",
      price: item?.price || 0,
      quantity: quantities[itemId] || 0,
    };
  });

  // 計算總金額
  const totalAmount = itemsInCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // 將購物車內容轉換為顯示文本
  const cartContent = itemsInCart
    .filter((item) => item.quantity > 0) // 只顯示有購買的商品
    .map((item) => `${item.name} x${item.quantity}`).join(", ");

  // 點擊確定按鈕時觸發跳轉
  const handleConfirm = () => {
    navigate('/order'); // 跳轉到 Order 頁面
  };

  // 點擊取消按鈕時返回到 Check 頁面
  const handleCancel = () => {
    navigate('/check'); // 返回到 Check 頁面
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Customer Info</h1>
        <form className={styles.formContainer}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/45a22368b7ce5ef8f077881b98770f92cf841392d0f50d3b9cd9c16cd38eafab?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a"
            alt=""
            className={styles.backgroundImage}
          />
          <div className={styles.formContent}>
            {formFields.map((field, index) => {
              if (field.label === "內容：") {
                return (
                  <FormField
                    key={index}
                    icon={field.icon}
                    label={field.label}
                    placeholder={field.placeholder}
                    value={cartContent} // 顯示購物車內容
                    disabled={true} // 禁用輸入框
                  />
                );
              } else if (field.label === "總金額") {
                return (
                  <FormField
                    key={index}
                    icon={field.icon}
                    label={field.label}
                    placeholder={field.placeholder}
                    value={`NT$ ${totalAmount}`} // 顯示總金額
                    disabled={true} // 禁用輸入框
                  />
                );
              } else {
                return (
                  <FormField
                    key={index}
                    icon={field.icon}
                    label={field.label}
                    placeholder={field.placeholder}
                  />
                );
              }
            })}
          </div>
          <div className={styles.buttonGroup}>
            <Button variant="primary" onClick={handleCancel}>取消</Button> {/* 取消按鈕，返回到 Check 頁面 */}
            <Button variant="secondary" onClick={handleConfirm}>確定</Button> {/* 確定按鈕，跳轉到 Order 頁面 */}
          </div>
        </form>
      </div>
    </div>
  );
};
