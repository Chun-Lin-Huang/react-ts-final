import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CustomerInfo.module.css';
import { FormField } from './FormField';
import { Button } from './Button';
import { useCart } from '../CartconText'; 
import { menuItems } from '../menu/data';
import { asyncPost } from '../../utils/fetch';  // 載入 asyncPost 函數
import { api } from '../../enum/api'; 

const formFields = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/904d213115062545fbf487cfe2c2d51aa34efbc9cda1c6d9a34347e9b21787f5?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a", label: "姓名：", placeholder: "輸入姓名" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ad5b0627e7f2ce88e9d1a3d4d09bc506477a5a831aa0c2971a0924cf7496b7c?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a", label: "電話：", placeholder: "輸入電話" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10d017b12fdc6e4b8a7c5f93271c3aed3419c1cca34fcddc280897efcf8a3baf?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a", label: "內容：", placeholder: "" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac0e1f2bcc7ca2bae3680c94acb91d55332f43737865c483a302a888c7a91696?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a", label: "總金額", placeholder: "" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/40b94e6092a5c178c2ef9e4e504ed21b3eb38ee20e390ec52bca35ab828181a1?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a", label: "備註：", placeholder: "輸入備註" }
];

export const CustomerInfo: React.FC = () => {
  const { quantities } = useCart(); 
  const navigate = useNavigate(); 
  const [customerName, setName] = useState<string>(''); 
  const [phonenumber, setphoneNumber] = useState<string>(''); 
  const [remark, setRemark] = useState<string>(''); 

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

  const totalAmount = itemsInCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartContent = itemsInCart
    .filter((item) => item.quantity > 0)
    .map((item) => `${item.name} x${item.quantity}`).join(", ");

    const handleConfirm = async () => {
      if (!customerName || !phonenumber) { // 校验表单字段
        console.error('姓名或電話為必填項');
        return;
      }
    
      const orderData = {
        name: customerName,            // 姓名
        phoneNumber: phonenumber,      // 電話號碼
        content: cartContent,          // 購物車內容
        total: totalAmount.toString(), // 總金額 (後端需要字串)
        remark,                        // 備註
      };      
    
      try {
        const response = await asyncPost(api.submitOrder, orderData);
        console.log('API 回應：', response); // 確認 API 回應內容
        if (response.code === 200) {
          console.log('準備跳轉到 /order');
          navigate('/order');
        } else {
          console.error('提交訂單失敗:', response.message);
        }
      } catch (err) {
        console.error('提交訂單時發生錯誤:', err);
      }      
    };    

  const handleCancel = () => {
    navigate('/check'); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Customer Info</h1>
        <form className={styles.formContainer}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/45a22368b7ce5ef8f077881b98770f92cf841392d0f50d3b9cd9c16cd38eafab?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a"
            alt="Background"
            className={styles.backgroundImage}
          />
          <div className={styles.formContent}>
            {formFields.map((field, index) => {
              if (field.label === "姓名：") {
                return(
                  <FormField
                    key={index}
                    icon={field.icon}
                    label={field.label}
                    placeholder={field.placeholder}
                    value={customerName}
                    onChange={(e) => setName(e.target.value)}
                  />
                );
              } else if (field.label === "電話：") {
                return(
                  <FormField
                    key={index}
                    icon={field.icon}
                    label={field.label}
                    placeholder={field.placeholder}
                    value={phonenumber}
                    onChange={(e) => setphoneNumber(e.target.value)}
                  />
                );
              } else if (field.label === "內容：") {
                return (
                  <FormField
                    key={index}
                    icon={field.icon}
                    label={field.label}
                    placeholder={field.placeholder}
                    value={cartContent} 
                    disabled={true} 
                  />
                );
              } else if (field.label === "總金額") {
                return (
                  <FormField
                    key={index}
                    icon={field.icon}
                    label={field.label}
                    placeholder={field.placeholder}
                    value={`NT$ ${totalAmount}`} 
                    disabled={true} 
                  />
                );
              } else if (field.label === "備註：") {
                return (
                  <FormField
                    key={index}
                    icon={field.icon}
                    label={field.label}
                    placeholder={field.placeholder}
                    value={remark} 
                    onChange={(e) => setRemark(e.target.value)} 
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
            <Button variant="primary" onClick={handleCancel}>取消</Button>
            <Button variant="secondary" onClick={handleConfirm}>確定</Button>
          </div>
        </form>
      </div>
    </div>
  );
};