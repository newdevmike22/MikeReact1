// Create a button, give it an onClick event handler and style it.
// Create an onMouseMove event handler.
// Create a prop for an NBA basketball team.
// Create an array of objects and map through them.

const TestFive = ({ team, location, colors, bestPlayer, image }) => {
  const onclickHandler = () => {
    console.log("Oww! You hit me!");
  };

  const onMoveHandler = () => {
    alert("Going somewhere?");
    console.log("Don't leave me!");
  };

  const wishList = [{ id: 1, item1: "MacBook Pro", item2: "iPhone 16E", item3: "PS5", item4: "52 inch TV" }];

  return (
    <>
      <button onClick={onclickHandler} style={{ backgroundColor: "#e60510", color: "#fff", padding: "15px" }}>
        HIT ME!
      </button>

      <p onMouseMove={onMoveHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, beatae.</p>

      <h1 style={{ color: "#25047a", textTransform: "uppercase" }}>{team}</h1>
      <h2>Location: {location}</h2>
      <h2>Colors: {colors}</h2>
      <h2>Best Player: {bestPlayer}</h2>
      <img src={image} alt={bestPlayer} width="100%" />

      <div>
        {wishList.map(({ id, item1, item2, item3, item4 }) => (
          <div key={id}>
            <ul>
              <li>{item1}</li>
              <li>{item2}</li>
              <li>{item3}</li>
              <li>{item4}</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default TestFive;
