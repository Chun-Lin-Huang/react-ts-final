export interface OrderCardProps {
  sid: string;
  name: string;
  phoneNumber: string;
  content: string;
  total: string;
  remark: string;
}

export interface OrderListProps {
  orders: OrderCardProps[];
}

export interface ActionButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'delete' | 'edit' | 'search' | 'back';
}