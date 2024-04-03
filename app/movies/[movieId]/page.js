import MovieDetails from "@/components/MovieDetails";
import { getMovieDetails } from "@/utils/getMovies";
import Image from "next/image";
import React from "react";

export default function MovieDetailsPage({ params: { movieId } }) {
  return (
    <>
      <MovieDetails movieId={movieId} />
    </>
  );
}
