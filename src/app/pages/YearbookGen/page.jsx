import BackToTopButton from "@/app/components/Backtotop";
import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import Link from "next/link";

const yearclasses = [
  {
    id: "A",
    logo: "/image/classof2024.jpg",
    details: "Class of 2024",
    links: "/pages/Yearbook",
  },
  {
    id: "B",
    logo: "/image/classof2025.jpg",
    details: "Class of 2025",
    links: "../pages/YearbookB",
  },
  {
    id: "C",
    logo: "/image/classof2026.jpg",
    details: "Class of 2026",
    links: "../pages/YearbookC",
  },
];

export default function YearbookGen() {
  return (
    <>
      <NavBar />

      <div className="max-w-7xl mx-auto px-4 py-10 text-center">
        <div className="pb-10">
          <h1 className="mb-3">
            <span className="inline-block px-4 py-2 rounded-xl text-blue-950 text-2xl sm:text-3xl font-bold">
              Our Class Years
            </span>
          </h1>
          <p className="text-gray-700 text-sm sm:text-base">
            Explore the different classes and flip through their yearbooks!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {yearclasses.map((yearclass) => (
            <Link
              href={yearclass.links}
              key={yearclass.id}
              className="
                bg-stone-400
                rounded-xl
                shadow-md
                overflow-hidden
                border border-blue-200
                hover:bg-stone-600/90
                transition
              "
            >
              <img
                src={yearclass.logo}
                alt="Batch Logo"
                className="w-full h-56 sm:h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg sm:text-xl font-bold">
                  {yearclass.details}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
      <BackToTopButton />
    </>
  );
}
