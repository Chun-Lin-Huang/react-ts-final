import React from 'react';
import styles from './CustomerInfo.module.css';
import { FormField } from './FormField';
import { Button } from './Button';

const formFields = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/904d213115062545fbf487cfe2c2d51aa34efbc9cda1c6d9a34347e9b21787f5?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a", label: "姓名：", placeholder: "輸入姓名" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5ad5b0627e7f2ce88e9d1a3d4d09bc506477a5a831aa0c2971a0924cf7496b7c?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a", label: "電話：", placeholder: "輸入電話" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/10d017b12fdc6e4b8a7c5f93271c3aed3419c1cca34fcddc280897efcf8a3baf?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a", label: "內容：", placeholder: "" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac0e1f2bcc7ca2bae3680c94acb91d55332f43737865c483a302a888c7a91696?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a", label: "總金額：", placeholder: "" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/40b94e6092a5c178c2ef9e4e504ed21b3eb38ee20e390ec52bca35ab828181a1?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a", label: "備註：", placeholder: "輸入備註" }
];

export const CustomerInfo: React.FC = () => {
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
            {formFields.map((field, index) => (
              <FormField
                key={index}
                icon={field.icon}
                label={field.label}
                placeholder={field.placeholder}
              />
            ))}
          </div>
          <div className={styles.buttonGroup}>
            <Button variant="primary">取消</Button>
            <Button variant="secondary">確定</Button>
          </div>
        </form>
      </div>
    </div>
  );
}