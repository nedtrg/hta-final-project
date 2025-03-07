"use client";

import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import Image from "next/image";

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
  {
    name: "Batch Member",
    role: "Member",
    text: "Suspendisse potenti. Phasellus scelerisque orci eget ligula suscipit, a euismod augue bibendum.",
  },
  {
    name: "Batch Member",
    role: "Member",
    text: "Suspendisse potenti. Phasellus scelerisque orci eget ligula suscipit, a euismod augue bibendum.",
  },
  {
    name: "Batch Member",
    role: "Member",
    text: "Suspendisse potenti. Phasellus scelerisque orci eget ligula suscipit, a euismod augue bibendum.",
  },
  {
    name: "Batch Member",
    role: "Member",
    text: "Suspendisse potenti. Phasellus scelerisque orci eget ligula suscipit, a euismod augue bibendum.",
  },
  {
    name: "Batch Member",
    role: "Member",
    text: "Suspendisse potenti. Phasellus scelerisque orci eget ligula suscipit, a euismod augue bibendum.",
  },
  {
    name: "Batch Member",
    role: "Member",
    text: "Suspendisse potenti. Phasellus scelerisque orci eget ligula suscipit, a euismod augue bibendum.",
  },
  {
    name: "Batch Member",
    role: "Member",
    text: "Suspendisse potenti. Phasellus scelerisque orci eget ligula suscipit, a euismod augue bibendum.",
  },
  {
    name: "Batch Member",
    role: "Member",
    text: "Suspendisse potenti. Phasellus scelerisque orci eget ligula suscipit, a euismod augue bibendum.",
  },
  {
    name: "Batch Member",
    role: "Member",
    text: "Suspendisse potenti. Phasellus scelerisque orci eget ligula suscipit, a euismod augue bibendum.",
  },
  {
    name: "Batch Member",
    role: "Member",
    text: "Suspendisse potenti. Phasellus scelerisque orci eget ligula suscipit, a euismod augue bibendum.",
  },
  {
    name: "Batch Member",
    role: "Member",
    text: "Suspendisse potenti. Phasellus scelerisque orci eget ligula suscipit, a euismod augue bibendum.",
  },
  {
    name: "Batch Member",
    role: "Member",
    text: "Suspendisse potenti. Phasellus scelerisque orci eget ligula suscipit, a euismod augue bibendum.",
  },
  {
    name: "Batch Member",
    role: "Member",
    text: "Suspendisse potenti. Phasellus scelerisque orci eget ligula suscipit, a euismod augue bibendum.",
  },
  {
    name: "Batch Member",
    role: "Member",
    text: "Suspendisse potenti. Phasellus scelerisque orci eget ligula suscipit, a euismod augue bibendum.",
  },
  {
    name: "Batch Member",
    role: "Member",
    text: "Suspendisse potenti. Phasellus scelerisque orci eget ligula suscipit, a euismod augue bibendum.",
  },
  {
    name: "Batch Member",
    role: "Member",
    text: "Suspendisse potenti. Phasellus scelerisque orci eget ligula suscipit, a euismod augue bibendum.",
  },
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
      <div id="mybatch" className="container mx-auto p-3 grid gap-6">
        <div className="bg-amber-900 p-6 rounded-lg border border-black/60">
          <h1 className="text-center text-slate-300 text-3xl capitalize">
            Testimonials from our Various Batches
          </h1>
          <h1 className="text-center text-3xl uppercase font-semibold text-blue-950 underline underline-offset-1">
            Batch A
          </h1>
        </div>

        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 h-56 shadow-md rounded-lg border border-blue-200 bg-stone-400 hover:bg-stone-600"
          >
            {images[index] ? (
              <Image
                src={images[index]}
                width={150}
                height={100}
                className="rounded-full p-5"
                alt="Random"
              />
            ) : (
              <div className="w-[100px] h-[100px] bg-gray-300 rounded-lg" />
            )}
            <div>
              <h3 className="text-2xl font-bold text-blue-950">
                {testimonial.name}
              </h3>
              <p className="text-lg font-bold text-emerald-900">
                {testimonial.role}
              </p>
              <p className="mt-2 text-black">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
