import "server-only";

export const movies = () =>
  import("@/data/movies-data.json").then((module) => {
    return module.default.results;
  });

export const getMovies = async () => {
  const movieList = await movies();
  return movieList.map(({ id, title, poster_path }) => ({
    id,
    title,
    poster_path,
  }));
};

export const getMovieDetails = async (movieId) => {
  const movieList = await movies();
  return movieList.find((movie) => movie.id == movieId);
};

export const getMovieIndex = async (movieId) => {
  const movieList = await movies();
  return movieList.findIndex((movie) => movie.id == movieId);
};
