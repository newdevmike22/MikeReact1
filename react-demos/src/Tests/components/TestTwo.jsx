/*
React Test 2
Create a component named TestTwo.jsx
Create a const with an array objects.
Map thru the array and give it a key with an id.
Export the component to App.jsx
*/

const TestTwo = () => {
  const allAboutYou = [
    { id: 1, name: "Mike Creel", gamerName: "The Crusher", age: 37, favGame: "NBA Live", favFood: "Piza" },
    { id: 2, name: "Heather Chase", gamerName: "The Gambit Queen", age: 22, favGame: "Fortnite", favFood: "Nachos" },
    { id: 3, name: "Roland Gray", gamerName: "The Black Mamba", age: 28, favGame: "Madden NFL", favFood: "Fried Chicken" },
    { id: 4, name: "Sheila Reed", gamerName: "The Black Widow", age: 25, favGame: "Tekken", favFood: "Spaghetti" },
  ];

  return (
    <div>
      {allAboutYou.map(({ id, name, gamerName, age, favGame, favFood }) => (
        <div key={id}>
          <h2>Name: {name}</h2>
          <h2>Gamer Name: {gamerName}</h2>
          <h2>Age: {age}</h2>
          <h2>Favorite Game: {favGame}</h2>
          <h2>Favorite Food: {favFood}</h2>
        </div>
      ))}
    </div>
  );
};
export default TestTwo;
