export interface OrderFieldProps {
  icon: string;
  label: string;
  value: string;   // 字段的值
}

// types.ts
export interface ButtonProps {
  onClick: () => void;
  variant?: 'primary' | 'danger';  // 按钮样式的类型，可以根据需要扩展
  disabled?: boolean;  // 添加 disabled 属性
  children: React.ReactNode;  // 按钮内容
}


export interface OrderDetailsProps {
  fields: OrderFieldProps[];
}