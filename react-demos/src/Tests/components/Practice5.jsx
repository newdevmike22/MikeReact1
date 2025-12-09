// Create an if/else if/ else with booleans and give it an inline style.

const Practice5 = () => {
  const eaglesWon = false;
  const cardinalsWon = true;
  return <h2 style={{ color: "white", backgroundColor: "#16024a", textAlign: "center", padding: "15px", textTransform: "uppercase" }}>{eaglesWon ? "We wll have barbeque." : eaglesWon || cardinalsWon ? "We will have lobster." : "We wil have pizza."}</h2>;
};

export default Practice5;
