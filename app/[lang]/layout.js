import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getDictionary } from "./dictionaries/dictionaries";

export default async function MainLayout({ children, params: { lang } }) {
  return (
    <main
      className={`dark:bg-body bg-white font-[Sora] dark:text-white text-dark`}
    >
      <Navbar />
      <main className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar lang={lang} />
        {children}
      </main>
      <Footer />
      <div id="modal-root-content" />
    </main>
  );
}
