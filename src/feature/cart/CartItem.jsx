import Button from "../../ui/Button";
import DeleteItem from "./DeleteItem";
import { formatCurrency } from "../../utils/helpers";
import UpdateCartQuantity from "./UpdateCartQuantity";
import { getCurrentQuantityById } from "./cartSlice";
import { useSelector } from "react-redux";
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <li className="py-4 font-semibold sm:flex sm:items-center sm:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-2">
        <p className="text-xs font-bold ">{formatCurrency(totalPrice)}</p>
        <UpdateCartQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
