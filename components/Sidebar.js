import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import Image from "next/image";
import Link from "next/link";

const sidebarData = [
  { icon: "/assets/icons/trending.svg", text: "Trending" },
  { icon: "/assets/icons/newRelease.svg", text: "New Releases" },
  { icon: "/assets/icons/commingSoon.svg", text: "Coming Soon" },
  { icon: "/assets/icons/favourite.svg", text: "Favourites" },
  { icon: "/assets/icons/watchLater.svg", text: "Watch Later" },
];

export default async function Sidebar({ lang }) {
  const dict = await getDictionary(lang);
  return (
    <aside>
      <ul className="space-y-2">
        {sidebarData.map((item, idx) => (
          <li key={item.text}>
            <Link
              className={`flex items-center space-x-2 px-5 py-3.5 rounded-lg ${
                idx === 0 && "bg-primary text-black"
              }`}
              href=""
            >
              <Image src={item.icon} width="24" height="24" alt="" />
              <span>{dict[item.text.toLowerCase()]}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
