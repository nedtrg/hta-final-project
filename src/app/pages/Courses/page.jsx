"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const courses = [
  {
    title: "Software Engineering",
    image: "/image/logo1.jpg",
    url: "/image/bg1.jpg",
  },
  { title: "Cyber Security", image: "/image/logo2.jpg", url: "/image/bg2.jpg" },
  {
    title: "Digital Marketing",
    image: "/image/logo4.jpg",
    url: "/image/bg3.jpg",
  },
  { title: "Data Analysis", image: "/image/por1.jpg", url: "/image/bg4.jpg" },
  {
    title: "Artificial Intelligence",
    image: "/image/por2.jpg",
    url: "/image/bg5.jpg",
  },
  { title: "UI/UX Design", image: "/image/por3.jpg", url: "/image/bg6.jpg" },
  {
    title: "Cloud Computing",
    image: "/image/logo1.jpg",
    url: "/image/bg7.jpg",
  },
  {
    title: "Blockchain Technology",
    image: "/image/logo2.jpg",
    url: "/image/bg8.jpg",
  },
  {
    title: "Machine Learning",
    image: "/image/logo4.jpg",
    url: "/image/bg9.jpg",
  },
  {
    title: "Product Management",
    image: "/image/logo1.jpg",
    url: "/image/bg1.jpg",
  },
  {
    title: "Mobile App Development",
    image: "/image/logo2.jpg",
    url: "/image/bg2.jpg",
  },
  {
    title: "Business Intelligence",
    image: "/image/logo4.jpg",
    url: "/image/bg3.jpg",
  },
  {
    title: "Game Development",
    image: "/image/por1.jpg",
    url: "/image/bg4.jpg",
  },
  { title: "DevOps", image: "/image/por2.jpg", url: "/image/bg5.jpg" },
  { title: "Big Data", image: "/image/por3.jpg", url: "/image/bg6.jpg" },
  {
    title: "Database Management",
    image: "/image/logo1.jpg",
    url: "/image/bg7.jpg",
  },
  { title: "Networking", image: "/image/logo2.jpg", url: "/image/bg8.jpg" },
  {
    title: "Front-end Development",
    image: "/image/logo4.jpg",
    url: "/image/bg9.jpg",
  },
  {
    title: "Back-end Development",
    image: "/image/por1.jpg",
    url: "/image/bg1.jpg",
  },
  {
    title: "Full-stack Development",
    image: "/image/por2.jpg",
    url: "/image/bg2.jpg",
  },
  {
    title: "Embedded Systems",
    image: "/image/por3.jpg",
    url: "/image/bg3.jpg",
  },
  {
    title: "Ethical Hacking",
    image: "/image/logo1.jpg",
    url: "/image/bg4.jpg",
  },
  {
    title: "Agile Methodologies",
    image: "/image/logo2.jpg",
    url: "/image/bg5.jpg",
  },
  {
    title: "Computer Vision",
    image: "/image/logo4.jpg",
    url: "/image/bg6.jpg",
  },
  {
    title: "IoT (Internet of Things)",
    image: "/image/por1.jpg",
    url: "/image/bg7.jpg",
  },
];

const coursesPerPage = 15;

export default function CoursesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  const paginatedCourses = courses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  return (
    <>
      <NavBar />
      <div className="container mx-auto p-6">
        <motion.h4
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="p-2 rounded-xl text-blue-950 inline-block"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Select A Course
          </motion.span>
        </motion.h4>
        <div className="grid grid-cols-3 mt-9 gap-6">
          {paginatedCourses.map((course, index) => (
            <Link
              href="/"
              key={index}
              className="shadow-lg w-80 h-96 ml-12 justify-center border-2 border-blue-200 rounded-xl flex flex-col items-center transition-all"
            >
              <div
                className="bg-stone-400 w-full h-40 place-items-center z-0 items-center rounded-t-lg rounded-b-none hover:bg-slate-700/20"
                style={{
                  backgroundImage: `url(${course.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "155px",
                }}
              >
                <Image
                  src={course.image}
                  width={200}
                  height={100}
                  className="w-20 h-20 m-28 z-10 border-2 border-white rounded-full"
                  alt={course.title}
                />
              </div>

              <div className="bg-amber-900 h-56 pt-16 px-10 text-center w-full rounded-t-none rounded-b-lg hover:bg-slate-700/90">
                <h3 className="text-2xl pb-3 font-semibold text-blue-950">
                  {course.title}
                </h3>
                <p className="text-s text-gray-200 text-center">
                  {course.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 border rounded ${
                currentPage === i + 1
                  ? "bg-emerald-900 text-white"
                  : "bg-white text-blue-950"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
