import { movies } from "@/utils/getMovies";

export async function GET() {
  const movieJSON = await movies();
  return Response.json(movieJSON);
}

export async function POST(request) {
  const data = await request.json();
  const movieJSON = await movies();
  const newData = {
    id: movieJSON.length + 1,
    name: data.name,
  };
  movieJSON.push(newData);

  return new Response(JSON.stringify(newData), {
    headers: {
      "content-type": "application/json",
    },
    status: 201,
  });
}
