import {useSelector} from "react-redux"
import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import { getUsername } from "../user/userSlice";
import CartItem from './CartItem';
import { getCart, clearCart } from "./cartSlice";
import {useDispatch} from "react-redux"
import EmptyCart from "./EmptyCart"

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector(getUsername)
  const dispatch = useDispatch()
  if(!cart.length) return <EmptyCart/>
  return (
    <div className='px-4 py-3'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className='mt-7 text-xl font-semibold'>Your cart, {username}</h2>
      <ul className='mt-3 divide-y divide-stone-300 border-b border-b-stone-300'>

        {
          cart.map( item =>{
            return <CartItem item={item} key={item.pizzaId}/>
          })
        }
      </ul>
      <div
      className='mt-6 space-x-2'>
        <Button type="primary" to="/order/new">Order pizzas</Button>
        <Button type="secondary" onClick={()=> dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
