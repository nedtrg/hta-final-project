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
      <div className="container mx-auto p-6 text-center">
        <div className="pb-10">
          <h1>
            <span className="p-4 rounded-xl text-blue-950 text-3xl font-bold">
              Our Class Years
            </span>
          </h1>
          <p>Explore the different classes and flip through their yearbooks!</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {yearclasses.map((yearclass) => (
            <Link
              href={yearclass.links}
              key={yearclass.id}
              className="bg-stone-400 rounded-xl shadow-md overflow-hidden border border-blue-200 hover:bg-stone-600/90"
            >
              <img
                src={yearclass.logo}
                alt="Batch Logo"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{yearclass.details}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
