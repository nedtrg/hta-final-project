"use client";

import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import Image from "next/image";
import { motion } from "framer-motion";
import BackToTopButton from "@/app/components/Backtotop";

const testimonials = [
  {
    name: "Batch Governor",
    role: "Governor",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel lorem hendrerit, convallis massa id, imperdiet augue.",
  },
  {
    name: "Student Representative",
    role: "Student",
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer quis velit nec justo pretium.",
  },
  {
    name: "Batch Member",
    role: "Member",
    text: "Suspendisse potenti. Phasellus scelerisque orci eget ligula suscipit, a euismod augue bibendum.",
  },
  // remaining items unchanged
];

const images = [
  "/image/por1.jpg",
  "/image/por1.jpg",
  "/image/por1.jpg",
  "/image/por1.jpg",
  "/image/por1.jpg",
  "/image/por1.jpg",
  "/image/por1.jpg",
  "/image/por1.jpg",
  "/image/por1.jpg",
  "/image/por1.jpg",
  "/image/por1.jpg",
  "/image/por1.jpg",
  "/image/por1.jpg",
  "/image/por1.jpg",
  "/image/por1.jpg",
  "/image/por1.jpg",
  "/image/por1.jpg",
  "/image/por1.jpg",
  "/image/por1.jpg",
];

export default function MyBatchPage() {
  return (
    <>
      <NavBar />

      <div id="mybatch" className="max-w-6xl mx-auto px-4 py-6 grid gap-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-amber-900 p-4 sm:p-6 rounded-lg border border-black/60"
        >
          <h1 className="text-center text-slate-300 text-lg sm:text-2xl capitalize">
            Testimonials from our Various Batches
          </h1>
          <h2 className="text-center text-xl sm:text-3xl uppercase font-semibold text-blue-950 underline underline-offset-4 mt-2">
            Batch C
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="
                flex flex-col sm:flex-row
                items-center sm:items-start
                gap-4
                p-4
                shadow-md
                rounded-lg
                border border-blue-200
                bg-stone-400
                hover:bg-stone-600
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {images[index] ? (
                <Image
                  src={images[index]}
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                  alt="Random"
                />
              ) : (
                <div className="w-24 h-24 bg-gray-300 rounded-full" />
              )}

              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-950">
                  {testimonial.name}
                </h3>
                <p className="text-base sm:text-lg font-bold text-emerald-900">
                  {testimonial.role}
                </p>
                <p className="mt-2 text-sm sm:text-base text-black">
                  {testimonial.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
      <BackToTopButton />
    </>
  );
}
