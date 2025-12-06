/*
React Test 1
Create a component named TestOne.jsx
inside the component create a div with a h1 that says "React Test 1"
Create a const called currentTime.
Create a const called currentDate.
Create a const called months with an array of all the months.
Create a const called person that contains an object with the person's
name, age, career, favorite food, and hobby.
Output each const dynamically inside the div in h2 tags and export it to App.jsx.
*/

const TestOne = () => {
  const currentTime = new Date().toLocaleTimeString();
  const currentDate = new Date().toLocaleDateString();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const person = {
    name: "Ebony Love",
    age: 25,
    career: "Model",
    favFood: "pizza",
    hobby: "painting",
  };
  return (
    <div>
      <h1>React Test 1</h1>
      <h2>Time: {currentTime}</h2>
      <h2>Date: {currentDate}</h2>
      <h2>Months of the year: {months.join(", ")}</h2>
      <h2>Name: {person.name}</h2>
      <h2>Age: {person.age}</h2>
      <h2>Career: {person.career}</h2>
      <h2>Favorite Food: {person.favFood}</h2>
      <h2>Hobby: {person.hobby}</h2>
    </div>
  );
};

export default TestOne;
