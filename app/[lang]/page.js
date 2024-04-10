import MovieCard from "@/components/MovieCard";
import Sidebar from "@/components/Sidebar";
import { getMovies } from "@/utils/getMovies";
import { getDictionary } from "./dictionaries/dictionaries";

export default async function Home({ params: { lang } }) {
  const movies = await getMovies();
  const dict = await getDictionary(lang);

  return (
    <>
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies.map((movie) => (
            <MovieCard dict={dict} movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
}
