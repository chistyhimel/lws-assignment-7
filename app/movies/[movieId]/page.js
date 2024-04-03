import MovieDetails from "@/components/MovieDetails";

export default function MovieDetailsPage({ params: { movieId } }) {
  return (
    <>
      <MovieDetails movieId={movieId} />
    </>
  );
}
