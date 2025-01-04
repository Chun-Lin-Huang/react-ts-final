export interface FormFieldProps {
  icon: string;
  label: string;
  value?: string;
  placeholder?: string;
}

export interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}