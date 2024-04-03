"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function MovieNotFound() {
  const pathname = usePathname();
  const movieId = pathname.split("/")[2];
  return (
    <>
      <div className="flex my-40 items-center align-middle justify-center">
        <Image src="/assets/not-found.webp" height={300} width={400} alt="" />
        <div className="flex items-center divide-x-2 justify-center">
          <h1 className="text-5xl font-bold pr-5">404</h1>
          <p className="text-2xl pl-5 w-96 text-nowrap">
            This movie with
            <strong className="text-green-300 text-3xl"> {movieId} </strong>id
            was not found!
          </p>
        </div>
      </div>
    </>
  );
}
