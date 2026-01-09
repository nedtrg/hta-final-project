"use client";

import Link from "next/link";
import Hamburger from "./Hamburger";
import { useState, useEffect, useRef } from "react";
import { IconBrain, IconChevronDown, IconMenu2 } from "@tabler/icons-react";

export default function NavBar() {
  const [batchesOpen, setBatchesOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [yearbookOpen, setYearbookOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav ref={containerRef} className="w-full bg-slate-100 text-blue-950 z-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 h-16">
        {/* Left Hamburger */}
        <Hamburger stroke={2} width={36} height={36} />

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <IconBrain
            stroke={2}
            className="text-amber-700 w-8 h-8 sm:w-10 sm:h-10"
          />
          <h1 className="uppercase font-extrabold text-xs sm:text-sm md:text-lg">
            HoneyTreat Academy
          </h1>
        </Link>

        {/* Right Hamburger (Mobile Only) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden"
        >
          <IconMenu2 size={28} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 relative">
          <Link href="#intro" className="hover:text-emerald-900">
            Intro
          </Link>

          <Link href="#about" className="hover:text-emerald-900">
            About
          </Link>

          <button
            onClick={() => setCoursesOpen(!coursesOpen)}
            className="inline-flex items-center gap-1 hover:text-emerald-900"
          >
            Courses <IconChevronDown size={16} />
          </button>

          <button
            onClick={() => setBatchesOpen(!batchesOpen)}
            className="inline-flex items-center gap-1 hover:text-emerald-900"
          >
            Batches <IconChevronDown size={16} />
          </button>

          <button
            onClick={() => setYearbookOpen(!yearbookOpen)}
            className="inline-flex items-center gap-1 hover:text-emerald-900"
          >
            Yearbook <IconChevronDown size={16} />
          </button>

          {/* Desktop Dropdowns */}
          {coursesOpen && (
            <div className="z-10 absolute top-full right-48 mt-2 bg-white shadow rounded">
              <Link
                href="../pages/Courses"
                className="block px-4 py-2 hover:bg-emerald-900 hover:text-white"
              >
                Courses
              </Link>
            </div>
          )}

          {batchesOpen && (
            <div className="z-10 absolute top-full right-28 mt-2 bg-white shadow rounded">
              {["Batch A", "Batch B", "Batch C"].map((batch) => (
                <Link
                  key={batch}
                  href={`../pages/${batch.replace(" ", "")}`}
                  className="block px-4 py-2 hover:bg-emerald-800 hover:text-white"
                >
                  {batch}
                </Link>
              ))}
            </div>
          )}

          {yearbookOpen && (
            <div className="z-10 absolute top-full right-0 mt-2 bg-white shadow rounded">
              {["2024", "2025", "2026"].map((year) => (
                <Link
                  key={year}
                  href={`../pages/Yearbook${
                    year === "2024" ? "" : year.slice(-1)
                  }`}
                  className="block px-4 py-2 hover:bg-emerald-800 hover:text-white"
                >
                  Class of {year}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <div className="flex flex-col px-4 py-3 space-y-3 font-semibold">
            <Link href="#intro">Intro</Link>
            <Link href="#about">About</Link>
            <Link href="../pages/Courses">Courses</Link>
            <Link href="../pages/Batches">Batches</Link>
            <Link href="../pages/YearbookGen">Yearbook</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
