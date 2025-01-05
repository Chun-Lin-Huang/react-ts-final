export interface FormFieldProps {
  icon: string;
  label: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;  // 添加 onChange 屬性
}

export interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}