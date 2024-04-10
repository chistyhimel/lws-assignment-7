import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default async function MainLayout({ children, params: { lang } }) {
  return (
    <main>
      <Navbar />
      <main className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar lang={lang} />
        {children}
      </main>
      <Footer />
    </main>
  );
}
