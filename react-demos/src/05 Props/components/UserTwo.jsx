const UserTwo = ({ img, name, age, isMarried, hobbies }) => {
  return (
    <section>
      <img src={img} alt={name} />
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h3>Is Married: {isMarried}</h3>
      <h4>Hobbies: {hobbies}</h4>
    </section>
  );
};

export default UserTwo;
