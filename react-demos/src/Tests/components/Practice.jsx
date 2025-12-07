const Practice = ({ name, occupation, zodiac, age }) => {
  const nfcEast = [
    { id: 1, team: "Cowboys", city: "Dallas", colors: "Blue and Silver" },
    { id: 2, team: "Redskins", city: "Washington, DC", colors: "Burgundy and Gold" },
    { id: 3, team: "Giants", city: "New York", colors: "Blue and White" },
    { id: 4, team: "Eagles", city: "Philadelphia", colors: "Green and Silver" },
    { id: 5, team: "Cardinals", city: "St. Louis", colors: "Red and White" },
  ];

  return (
    <>
      <div>
        <h1>{name}</h1>
        <h2>{occupation}</h2>
        <h2>{zodiac}</h2>
        <h2>{age}</h2>
      </div>

      <div>
        {nfcEast.map(({ id, team, city, colors }) => (
          <div key={id}>
            <h1>{team}</h1>
            <h2>{city}</h2>
            <h2>{colors}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Practice;
