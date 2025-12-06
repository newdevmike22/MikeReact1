const ProductList = () => {
  const products = [
    { id: 1, product: "Phone", price: 699 },
    { id: 2, product: "Laptop", price: 1200 },
    { id: 3, product: "Headphones", price: 199 },
  ];
  return (
    <div>
      {products.map(({ id, product, price }) => (
        <div key={id}>
          <h2>Product: {product}</h2>
          <h2>Price: ${price}</h2>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
