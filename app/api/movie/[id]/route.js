import { getMovieDetails, getMovieIndex, movies } from "@/utils/getMovies";

async function handleError(status, message) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function GET(request, { params }) {
  const movie = await getMovieDetails(params.id);
  if (!movie) {
    return handleError(404, `Movie with id ${params.id} was not found`);
  }
  return new Response(JSON.stringify(movie));
}

export async function PATCH(request, { params }) {
  const data = await request.json();
  const movieIndex = await getMovieIndex(params.id);

  if (movieIndex === -1) {
    return handleError(404, `Movie with id ${params.id} was not found`);
  }

  const moviesData = await movies();
  moviesData[movieIndex] = { ...moviesData[movieIndex], ...data };

  return new Response(JSON.stringify(moviesData[movieIndex]), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function DELETE(request, { params }) {
  const movieIndex = await getMovieIndex(params.id);

  if (movieIndex === -1) {
    return handleError(404, `Movie with id ${params.id} was not found`);
  }

  const moviesData = await movies();
  moviesData.splice(movieIndex, 1);

  return new Response(
    JSON.stringify({ message: `Movie with id ${params.id} was deleted` }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
