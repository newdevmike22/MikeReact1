const Greeting = () => {
  const name = "Big Mike";
  const currentDate = new Date().toLocaleDateString();
  return (
    <div>
      <h1>Hello everyone. My friends call me {name}.</h1>
      <p>
        Date: <strong>{currentDate}</strong>
      </p>
    </div>
  );
};

export default Greeting;
