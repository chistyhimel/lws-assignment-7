import MovieDetails from "@/components/MovieDetails";

export default function MovieDetailsPage({ params: { movieId, lang } }) {
  return (
    <>
      <MovieDetails lang={lang} movieId={movieId} />
    </>
  );
}
