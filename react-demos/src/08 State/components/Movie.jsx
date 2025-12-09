import { useState } from "react";

const Movie = () => {
  const [movie, setMovie] = useState({
    title: "Equalizer 3",
    ratings: 7,
  });

  const handleClick = () => {
    setMovie({ ...movie, ratings: 5 });
  };
  return (
    <section>
      <h1>Title: {movie.title}</h1>
      <p>{movie.ratings}</p>
      <button onClick={handleClick}>Change Rating</button>
    </section>
  );
};

export default Movie;
