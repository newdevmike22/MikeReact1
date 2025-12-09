// Create an if/else and give it an inline style.

const Practice4 = ({ trip }) => {
  const distance = 500;
  return <h2 style={{ color: "red", backgroundColor: "black", textAlign: "center", padding: "15px", textTransform: "uppercase" }}>{trip < distance ? "We wll drive there" : "We will take a flight"}</h2>;
};

export default Practice4;
