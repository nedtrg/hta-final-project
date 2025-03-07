"use client";
import Link from "next/link";
import Hamburger from "./Hamburger";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { IconBrain } from "@tabler/icons-react";
import { IconChevronDown } from "@tabler/icons-react";

export default function NavBar() {
  const [batchesOpen, setBatchesOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [yearbookOpen, setYearbookOpen] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setBatchesOpen(false);
        setCoursesOpen(false);
        setYearbookOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    <nav
      ref={containerRef}
      className="navbar z-10 p-4 text-blue-950 stroke-black bg-slate-100"
    >
      <div className="flex items-center justify-around capitalize font-extrabold h-20">
        <div className="relative">
          <Hamburger stroke={2} width={60} height={60} />
        </div>
        <div>
          <Link className="flex items-center gap-8" href="/">
            <span className="text-amber-700">
              <IconBrain stroke={2} width={80} height={80} />
            </span>

            <span className="text-2xl uppercase">
              <h1>Honey Treat Academy</h1>
            </span>
          </Link>
        </div>
        <div className="relative">
          <Link className="px-3 hover:text-emerald-900" href="#intro">
            Intro
          </Link>
          <Link className="px-3 hover:text-emerald-900" href="#about">
            About
          </Link>
          <Link
            onClick={() => setCoursesOpen(!coursesOpen)}
            className="px-3 hover:text-emerald-900 inline-flex items-center"
            href=""
          >
            Courses
            <span>
              <IconChevronDown size={20} />
            </span>
          </Link>
          <Link
            onClick={() => setBatchesOpen(!batchesOpen)}
            className="px-3 hover:text-emerald-900 inline-flex items-center"
            href=""
          >
            Batches
            <span>
              <IconChevronDown size={20} />
            </span>
          </Link>
          <Link
            onClick={() => setYearbookOpen(!yearbookOpen)}
            className="px-3 hover:text-emerald-900 inline-flex items-center"
            href=""
          >
            Yearbook
            <span>
              <IconChevronDown size={20} />
            </span>
          </Link>

          {coursesOpen && (
            <div className="absolute right-40 mt-2 z-10">
              <Link
                href="../pages/Courses"
                className="inline-block px-4 py-2 text-black text-center bg-white w-40 hover:bg-emerald-900"
              >
                Courses
              </Link>
            </div>
          )}
          {batchesOpen && (
            <div className="absolute right-16 rounded-lg mt-2 z-10">
              <ul>
                <li>
                  <Link
                    href="../pages/Batches"
                    className="inline-block px-4 py-2 text-black text-center bg-white w-40 hover:bg-emerald-800"
                  >
                    Batch A
                  </Link>
                </li>
                <li>
                  <Link
                    href="../pages/BatchB"
                    className="inline-block px-4 py-2 text-black text-center bg-white w-40 hover:bg-emerald-800"
                  >
                    Batch B
                  </Link>
                </li>
                <li>
                  <Link
                    href="../pages/BatchC"
                    className="inline-block px-4 py-2 text-black text-center bg-white w-40 hover:bg-emerald-800"
                  >
                    Batch C
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {yearbookOpen && (
            <div className="absolute right-0 mt-2 z-10">
              <ul>
                <li>
                  <Link
                    href="../pages/Yearbook"
                    className="block px-4 py-2 text-black text-center bg-white w-40 hover:bg-emerald-800"
                  >
                    Class of 2024
                  </Link>
                </li>
                <li>
                  <Link
                    href="../pages/YearbookB"
                    className="block px-4 py-2 text-black text-center bg-white w-40 hover:bg-emerald-800"
                  >
                    Class of 2025
                  </Link>
                </li>
                <li>
                  <Link
                    href="../pages/YearbookC"
                    className="block px-4 py-2 text-black text-center bg-white w-40 hover:bg-emerald-800"
                  >
                    Class of 2026
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
