import CartItem from "../CartItem";
export default function CartList({ items }) {
  return (
    <div>
      <ul>
        <li>
          <CartItem />
        </li>
        <li>
          <CartItem />
        </li>
        <li>
          <CartItem />
        </li>
        <li>
          <CartItem />
        </li>
      </ul>
    </div>
  );
}
