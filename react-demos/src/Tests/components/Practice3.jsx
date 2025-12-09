// Create an array of objects and map thru it.
// Create some props and output them.

const Practice3 = ({ product, price }) => {
  const sec = [
    { id: 1, school: "Mizzou", name: "Tigers" },
    { id: 2, school: "Georgia", name: "Bulldogs" },
    { id: 3, school: "Alabama", name: "Crimson Tide" },
    { id: 4, school: "Auburn", name: "Tigers" },
    { id: 5, school: "South Carolina", name: "Gamecocks" },
    { id: 6, school: "Oklahoma", name: "Sooners" },
    { id: 7, school: "Texas A&M", name: "Aggies" },
    { id: 8, school: "LSU", name: "Tigers" },
    { id: 9, school: "Florida", name: "Gators" },
    { id: 10, school: "Texas", name: "Longhorns" },
    { id: 11, school: "Ole Miss", name: "Rebels" },
    { id: 12, school: "Tennessee", name: "Volunteers" },
    { id: 13, school: "Arkansas", name: "Razerbacks" },
    { id: 14, school: "Mississippi State", name: "Bulldogs" },
    { id: 15, school: "Vanderbilt", name: "Commodores" },
    { id: 16, school: "Kentucky", name: "Wildcats" },
  ];

  return (
    <>
      <div>
        {sec.map(({ id, school, name }) => {
          return (
            <div key={id}>
              <h1>{school}</h1>
              <h2>{name}</h2>
            </div>
          );
        })}
      </div>

      <div>
        <h2>{product}</h2>
        <h2>{price}</h2>
      </div>
    </>
  );
};

export default Practice3;
