import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ movie, dict }) {
  return (
    <div className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <Image
        className="w-full object-cover"
        src={movie.poster_path}
        width="400"
        height="400"
        alt=""
      />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{movie.title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
        <div className="flex items-center space-x-1 mb-5">
          <Image src="/assets/star.svg" width="14" height="14" alt="" />
          <Image src="/assets/star.svg" width="14" height="14" alt="" />
          <Image src="/assets/star.svg" width="14" height="14" alt="" />
          <Image src="/assets/star.svg" width="14" height="14" alt="" />
          <Image src="/assets/star.svg" width="14" height="14" alt="" />
        </div>
        <Link
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href={`/movies/${movie.id}`}
        >
          <Image src="/assets/tag.svg" width="14" height="14" alt="" />
          <span>{dict["details"]}</span>
        </Link>
      </figcaption>
    </div>
  );
}
