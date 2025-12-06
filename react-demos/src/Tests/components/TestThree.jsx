/*
React Test 3
Create a component with props and export it to App.jsx

As a refresher, create an array of objects, map over it, and add an id as a key.
*/

const TestThree = ({ img, name, race, allegiance, transformation, age }) => {
  const Transformer = [
    { id: 1, robot: "Optimus Prime", weapon: "Ion Blaster", rank: "Autobot Leader", strength: 10 },
    { id: 2, robot: "Starscream", weapon: "Null Ray", rank: "Decepticon Flight Commander", strength: 7 },
    { id: 3, robot: "Ultra Magnus", weapon: "Magnus Hammer", rank: "Autobot Commander", strength: 9 },
  ];
  return (
    <>
      <div>
        <img src={img} alt={name} width="100%" />
        <h1>{name}</h1>
        <h2>{race}</h2>
        <h2>{allegiance}</h2>
        <h2>{transformation}</h2>
        <h2>{age}</h2>
      </div>

      <div>
        {Transformer.map(({ id, robot, weapon, rank, strength }) => (
          <div key={id}>
            <h1>Name: {robot}</h1>
            <h2>Weapon: {weapon}</h2>
            <h2>Rank: {rank}</h2>
            <h2>Strength Level: {strength}</h2>
          </div>
        ))}
      </div>
    </>
  );
};
export default TestThree;
