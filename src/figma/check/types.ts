export interface CircleIconProps {
  size: number;
}

export interface ActionButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
  onClick: () => void;
}

export interface LabelWithIconProps {
  text: string;
}