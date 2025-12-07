const Greeting = ({ timeOfDay }) => {
  return <h2>{timeOfDay > 12 ? "Good Morning!" : "Good Afternoon"}</h2>;
};

export default Greeting;
