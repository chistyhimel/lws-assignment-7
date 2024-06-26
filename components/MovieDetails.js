import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import { getMovieDetails } from "@/utils/getMovies";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export default async function MovieDetails({ movieId, lang }) {
  const movie = await getMovieDetails(movieId);
  const dict = await getDictionary(lang);

  if (!movie) {
    return notFound();
  }

  const {
    id,
    title,
    backdrop_path,
    poster_path,
    release_date,
    overview,
    vote_count,
    vote_average,
    popularity,
  } = movie;

  return (
    <main>
      <div className="">
        <section>
          <div>
            <Image
              className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
              src={backdrop_path}
              alt=""
              width={1000}
              height={1200}
            />
          </div>

          <div className="grid grid-cols-12 py-12 gap-8">
            <div className="col-span-2">
              <Image src={poster_path} alt="" width={200} height={100} />
            </div>
            <div className="col-span-8">
              <h2 className="font-bold text-slate-300 text-2xl">{title}</h2>
              <p className="my-2 text-slate-400 italic">{overview}</p>
              <ul className="text-slate-300 space-y-2 my-8">
                <li>
                  {dict["release date"]} : {release_date}
                </li>
                <li>
                  {dict["average vote"]} : {vote_average}
                </li>
                <li>
                  {dict["vote count"]} : {vote_count}
                </li>
                <li>
                  {dict["popularity"]} : {popularity}
                </li>
              </ul>
            </div>
            <div className="col-span-2 space-y-4">
              <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                {dict["stream in hd"]}
              </button>
              <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                {dict["download in hd"]}
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
