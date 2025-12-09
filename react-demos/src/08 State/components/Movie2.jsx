import { useState } from "react";

const Movie2 = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Spider Man", ratings: 3 },
    { id: 2, title: "Superman", ratings: 6 },
  ]);

  const handleClick = () => {
    setMovies(movies.map((m) => (m.id === 1 ? { ...m, title: "John Wick 4" } : m)));
  };
  return (
    <section>
      {movies.map((m) => (
        <li key={m.id}>{m.title}</li>
      ))}

      <button onClick={handleClick}>Change Name</button>
    </section>
  );
};

export default Movie2;
