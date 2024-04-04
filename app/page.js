import MovieCard from "@/components/MovieCard";
import Sidebar from "@/components/Sidebar";
import { getMovies } from "@/utils/getMovies";

export default async function Home() {
  const movies = await getMovies();

  return (
    <>
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
}
