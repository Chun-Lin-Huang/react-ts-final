import { createHashRouter } from "react-router";
import { CartProvider } from '../figma/CartconText'; // 引入購物車的 Context Provider
import App from '../view/App';
import { Check } from '../figma/check/Check';
import { Menu } from '../figma/menu/menu';
import { CustomerInfo } from '../figma/customerInfo/CustomerInfo';
import { Orders } from '../figma/orders/Order';

export const router = createHashRouter([
    {
        path: "/",
        element: (
            <CartProvider>
                <App />
            </CartProvider>
        ),
    },
    {
        path: "/check",
        element: (
            <CartProvider>
                <Check /> {/* Check 頁面 */}
            </CartProvider>
        ),
    },
    {
        path: "/menu",
        element: (
            <CartProvider>
                <Menu /> {/* Menu 頁面 */}
            </CartProvider>
        ),
    },
    {
        path: "/customer-info",
        element: (
            <CartProvider>
                <CustomerInfo /> {/* CustomerInfo頁面 */}
            </CartProvider>
        ),
    },
    {
        path: "/order",
        element: (
            <CartProvider>
                <Orders /> {/* Order頁面 */}
            </CartProvider>
        ),
    },
]);