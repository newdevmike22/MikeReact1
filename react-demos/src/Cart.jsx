const Cart = () => {
  const items = ["Wireless Earbuds", "power Bank", "New SSD", "Hoodie"];
  return (
    <>
      <div>
        <h1>Cart</h1>
        {items.length > 0 && <h2> You have {items.length} items in your Cart.</h2>}
      </div>

      <ul>
        <h4>Products</h4>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
