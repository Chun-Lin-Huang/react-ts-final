export interface InfoItemProps {
  label: string;
  className?: string;
  value: string | number | null; // 顯示的資料，可以是字符串、數字或 null
}

export interface SearchFormData {
  orderNumber: string;
}