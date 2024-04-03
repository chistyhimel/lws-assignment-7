import Modal from "@/components/Modal";
import MovieDetails from "@/components/MovieDetails";
import React from "react";

export default function MovieDetailsModal({ params: { movieId } }) {
  return (
    <Modal>
      <MovieDetails movieId={movieId} />
    </Modal>
  );
}
