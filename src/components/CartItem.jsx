export default function CartItem({ item, removeItem }) {
  return (
    <div className="cart-item">
      <div className="cart-image">
      <img src={item.image} alt={item.title} />
      </div>
      <div>
        <h4>{item.title}</h4>
        <p>${item.price}</p>
      </div>
      <button onClick={() => removeItem(item.id)}>Delete</button>
    </div>
  );
}