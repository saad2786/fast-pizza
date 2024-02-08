import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateCartQuantity from "../cart/UpdateCartQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInTheCart = currentQuantity > 0;
  function handleAddItem() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(addItem(newItem));
  }
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`w-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col py-1 ">
        <p className="font-semibold">{name}</p>
        <p className="text-xs font-semibold capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between ">
          {!soldOut ? (
            <p className="text-xs font-semibold text-stone-800">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="text-xs font-semibold uppercase text-stone-400">
              Sold out
            </p>
          )}
          <div className="flex space-x-2">
            {isInTheCart && (
              <UpdateCartQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
            )}
            {isInTheCart && <DeleteItem pizzaId={id} />}
            {!soldOut && !isInTheCart && (
              <Button type="small" onClick={handleAddItem}>
                Add to cart
              </Button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
