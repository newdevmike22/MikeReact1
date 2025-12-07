const PracticeTwo = ({ weather }) => {
  const temperature = 75;
  const temperature2 = 90;

  const hero = [{ id: 1, name: "Hulk", skin: "green", powers: "unlimited strength" }];

  return (
    <div>
      <h1>{weather < temperature ? "We are not going to the beach." : weather >= temperature && weather <= temperature2 ? "We are going to the beach." : "We are staying home today."}</h1>

      <div>
        {hero.map(({ id, name, skin, powers }) => (
          <ul key={id}>
            <li>{name}</li>
            <li>{skin}</li>
            <li>{powers}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default PracticeTwo;
