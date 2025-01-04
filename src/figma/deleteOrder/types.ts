export interface OrderFieldProps {
  icon: React.ReactNode;
  label: string;
}

export interface ButtonProps {
  onClick?: () => void;
  variant?: 'primary' | 'danger';
  children: React.ReactNode;
}

export interface OrderDetailsProps {
  fields: OrderFieldProps[];
}