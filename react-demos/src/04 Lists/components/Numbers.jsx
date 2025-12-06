const Number = () => {
  const numbers = [10, 11, 12, 13, 14, 15];
  return (
    <main>
      {numbers.map((num) => (
        <ul key={num}>
          <li>{num}</li>
        </ul>
      ))}
    </main>
  );
};

export default Number;
