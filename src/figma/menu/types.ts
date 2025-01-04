export interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface MenuItemProps {
  item: MenuItem;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  quantity: number;
}

export interface MenuGridProps {
  items: MenuItem[];
}

export interface CartItemProps {
  item: MenuItem;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  quantity: number;
}