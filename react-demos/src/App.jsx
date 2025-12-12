import ComponentA from "./12 Prop Drilling/components/ComponentA";

const App = () => {
  const name = "Mike";
  return (
    <div>
      <ComponentA name={name} />
    </div>
  );
};

export default App;
