export interface OrderFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export interface CircleIconLabelProps {
  label: string;
}

export interface ActionButtonProps {
  text: string;
  onClick?: () => void;
}