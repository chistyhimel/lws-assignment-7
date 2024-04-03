import Image from "next/image";

export default function MovieNotFound() {
  return (
    <>
      <div className="items-center flex justify-center my-28">
        <Image src="/assets/not-found.webp" height={200} width={500} alt="" />
        <div className="flex items-center divide-x-2 justify-center">
          <h1 className="text-5xl font-bold pr-5">404</h1>
          <p className="text-2xl pl-5">Page not found!</p>
        </div>
      </div>
    </>
  );
}
