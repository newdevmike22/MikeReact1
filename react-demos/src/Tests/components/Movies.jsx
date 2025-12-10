import Avatar from "./images/Avatar.jpg";
import Endgame from "./images/Endgame.jpg";
import Avatar2 from "./images/Avatar2.jpg";
import Titanic from "./images/Titanic.jpeg";
import StarWars from "./images/StarWars.jpg";
import Avengers from "./images/Infinity.jpg";
import SpiderMan from "./images/SpiderMan-NWH.jpg";
import Nezha from "./images/ne-zha.jpg";
import InsideOut from "./images/InsideOut.jpeg";

const Movies = () => {
  const movie = [
    { id: 1, title: "Avatar", image: Avatar, year: 2009, boxOffice: "US$ 2.92 billion" },
    { id: 2, title: "Avengers: Endgame", image: Endgame, year: 2009, boxOffice: "US$ 2.92 billion" },
    { id: 3, title: "Avatar: The Way of Water", image: Avatar2, year: 2022, boxOffice: "US$ 2.34 billion" },
    { id: 4, title: "Titanic", image: Titanic, year: 1997, boxOffice: "US$ 2.26 billion" },
    { id: 5, title: "Star Wars: Episode VII", image: StarWars, year: 2015, boxOffice: "US$ 2.07 billion" },
    { id: 6, title: "Avengers: Infinity War", image: Avengers, year: 2018, boxOffice: "US$ 2.05 billion" },
    { id: 7, title: "Spider-Man: No Way Home", image: SpiderMan, year: 2021, boxOffice: "US$ 1.92 billion" },
    { id: 8, title: "Ne Zha 2", image: Nezha, year: 2025, boxOffice: "US$ 2.15 billion" },
    { id: 9, title: "Inside Out 2", image: InsideOut, year: 2024, boxOffice: "US$ 1.70 billion" },
  ];
  return (
    <>
      <section className="px-4 py-8">
        <h1 className="text-center text-[2.25rem] font-bold mb-6">9 Highest Grossing Movies of all Time</h1>
        <div
          className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6
        "
        >
          {movie.map(({ id, title, image, year, boxOffice }) => (
            <div key={id} className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-3">
              <h1 className="text-[1.75rem] font-bold">{title}</h1>
              <img src={image} alt={title} className="w-full aspect-video object-cover rounded-md" />
              <h2 className="text-[1.25rem] font-medium">Year: {year}</h2>
              <h2 className="text-[1.25rem] font-medium">Box Office: {boxOffice}</h2>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Movies;
