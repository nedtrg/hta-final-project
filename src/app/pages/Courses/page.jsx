"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import BackToTopButton from "@/app/components/Backtotop";

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

      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.h4
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="px-4 py-2 rounded-xl text-blue-950 inline-block"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Select A Course
          </motion.span>
        </motion.h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paginatedCourses.map((course, index) => (
            <motion.a
              href="/"
              key={index}
              className="
                shadow-lg
                w-full
                max-w-sm
                mx-auto
                border-2 border-blue-200
                rounded-xl
                flex flex-col
                items-center
                transition-all
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div
                className="
                  bg-stone-400
                  w-full
                  h-40
                  rounded-t-lg
                  flex
                  justify-center
                  items-center
                  hover:bg-slate-700/20
                "
                style={{
                  backgroundImage: `url(${course.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Image
                  src={course.image}
                  width={80}
                  height={80}
                  className="border-2 border-white rounded-full bg-white"
                  alt={course.title}
                />
              </div>

              <div className="bg-amber-900 px-6 py-8 text-center w-full rounded-b-lg hover:bg-slate-700/90">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-950 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-200">{course.title}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`
                px-3 py-2 sm:px-4
                border rounded
                text-sm sm:text-base
                ${
                  currentPage === i + 1
                    ? "bg-emerald-900 text-white"
                    : "bg-white text-blue-950"
                }
              `}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <Footer />
      <BackToTopButton />
    </>
  );
}
