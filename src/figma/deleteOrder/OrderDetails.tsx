import React from 'react';
import { OrderField } from './OrderField';
import styles from './DeleteOrder.module.css';
import { OrderDetailsProps } from './types';

export const OrderDetails: React.FC<OrderDetailsProps> = ({ fields }) => {
  return (
    <div className={styles.detailsContainer}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/45a22368b7ce5ef8f077881b98770f92cf841392d0f50d3b9cd9c16cd38eafab?placeholderIfAbsent=true&apiKey=e50fb59ec52546f09fda3505e86b748a"
        className={styles.backgroundImage}
        alt=""
      />
      {fields.map((field, index) => (
        <OrderField
          key={index}
          icon={field.icon}
          label={field.label}
        />
      ))}
    </div>
  );
};