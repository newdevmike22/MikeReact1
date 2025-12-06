const Products = (props) => {
  return (
    <div>
      <h2>{props.product}</h2>
      <p>{props.price}</p>
    </div>
  );
};

export default Products;
