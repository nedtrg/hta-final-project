"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import BackToTopButton from "@/app/components/Backtotop";

const staticStudents = [
  {
    name: "Jane Doe",
    avatar: "/image/gravatar.jpg",
    course: "Software Engineering",
    graduationDate: "June 12, 2024",
    portfolio: "/portfolios/jane_portfolio.pdf",
  },
  {
    name: "John Smith",
    avatar: "/image/gravatar.jpg",
    course: "Digital Marketing",
    graduationDate: "July 5, 2024",
    portfolio: "/portfolios/john_portfolio.pdf",
  },
  {
    name: "Alice Johnson",
    avatar: "/image/gravatar.jpg",
    course: "Data Analytics",
    graduationDate: "May 20, 2024",
    portfolio: "/portfolios/alice_portfolio.pdf",
  },
];

export default function YearbookPage() {
  const [students, setStudents] = useState(staticStudents);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 15;
  const totalPages = Math.ceil(students.length / studentsPerPage);

  useEffect(() => {
    const availableAvatars = [
      "/image/gravatar.jpg",
      "/image/gravatar.jpg",
      "/image/gravatar.jpg",
    ];

    const generatedStudents = Array.from({ length: 97 }, (_, i) => ({
      name: `Student ${i + 4}`,
      avatar: availableAvatars[i % availableAvatars.length],
      course: ["Software Engineering", "Digital Marketing", "Data Analytics"][
        i % 3
      ],
      graduationDate: new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(2024, 4, Math.floor(Math.random() * 28) + 1)),
      portfolio: `/portfolios/student${i + 4}_portfolio.pdf`,
    }));

    setStudents((prev) => [...prev, ...generatedStudents]);
  }, []);

  const paginatedStudents = students.slice(
    (currentPage - 1) * studentsPerPage,
    currentPage * studentsPerPage
  );

  return (
    <>
      <NavBar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-2 rounded-xl text-blue-950">
            Class of 2026
          </span>
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {paginatedStudents.map((student, index) => (
            <motion.div
              key={index}
              className="
                bg-stone-400
                text-white
                shadow-md
                rounded-lg
                p-4
                text-center
                border border-gray-300
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Image
                src={student.avatar}
                width={96}
                height={96}
                className="rounded-full mx-auto mb-4"
                alt={student.name}
                onError={(e) => (e.target.src = "/image/default.jpg")}
              />

              <h3 className="text-lg sm:text-xl text-blue-950 font-semibold">
                {student.name}
              </h3>
              <p className="text-sm sm:text-base font-bold">{student.course}</p>
              <p className="text-sm text-gray-700 font-bold">
                Graduated: {student.graduationDate}
              </p>

              <Link
                href={student.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-4 inline-block
                  bg-emerald-900
                  text-white
                  px-4 py-2
                  rounded-lg
                  hover:bg-emerald-950
                  transition
                  text-sm sm:text-base
                "
              >
                Download Portfolio
              </Link>
            </motion.div>
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
