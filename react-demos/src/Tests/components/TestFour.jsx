/*
React Test 3
Create a component with props and export it to App.jsx

As a refresher, create an array of objects, map over it, and add an id as a key.
*/

const TestFour = ({ budget }) => {
  const budgetOne = 1500;
  const budgetTwo = 3000;

  //if (budget <= budgetOne) {
  //  return <h1>We are going on vacation in the Dominican Republic.</h1>;
  //} else if (budget > budgetOne && budget <= budgetTwo) {
  //  return <h1>We are going on vacation in Paris!</h1>;
  // }
  return <h1>{budget <= budgetOne ? "We are going on vacation in the Dominican Republic." : budget > budgetOne && budget <= budgetTwo ? "We are going on vacation in Paris!" : "We can vacation in Mexico if we want."}</h1>;
};

export default TestFour;
