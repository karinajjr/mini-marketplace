import CartItem from "./CartItem";

export default function CartList({ items, removeItem }) {
  return (
    <div className="cart-list">
      {items.map(item => (
        <CartItem key={item.id} item={item} removeItem={removeItem} />
      ))}
    </div>
  );
}
