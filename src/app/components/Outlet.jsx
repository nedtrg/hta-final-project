"use client";
import IMAGE from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "../../../public/image/graduate.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/swiper.css";

const images = [
  "/image/photo1.jpg",
  "/image/photo2.jpg",
  "/image/photo3.jpg",
  "/image/photo4.jpg",
  "/image/photo5.jpg",
  "/image/photo6.jpg",
  "/image/photo7.jpg",
  "/image/photo8.jpg",
  "/image/photo9.jpg",
];

const batches = [
  {
    id: "A",
    logo: "/image/logo1.jpg",
    details: "Batch A - The Pioneers",
    links: "/pages/Batches",
  },
  {
    id: "B",
    logo: "/image/logo4.jpg",
    details: "Batch B - The Innovators",
    links: "../pages/BatchB",
  },
  {
    id: "C",
    logo: "/image/logo2.jpg",
    details: "Batch C - The Trailblazers",
    links: "../pages/BatchC",
  },
];

const courses = [
  {
    id: 1,
    logo: "/image/por3.jpg",
    name: "Web Development",
    details: "Learn HTML, CSS, JS, and React.",
    url: "/image/bg1.jpg",
  },
  {
    id: 2,
    logo: "/image/logo2.jpg",
    name: "Data Science",
    details: "Master Python, Machine Learning, and AI.",
    url: "/image/bg2.jpg",
  },
  {
    id: 3,
    logo: "/image/por1.jpg",
    name: "Cybersecurity",
    details: "Protect digital assets and networks.",
    url: "/image/bg3.jpg",
  },
  {
    id: 4,
    logo: "/image/logo1.jpg",
    name: "Cloud Computing",
    details: "AWS, Azure, and Google Cloud training.",
    url: "/image/bg4.jpg",
  },
  {
    id: 5,
    logo: "/image/por2.jpg",
    name: "UI/UX Design",
    details: "Design user-friendly interfaces.",
    url: "/image/bg5.jpg",
  },
  {
    id: 6,
    logo: "/image/logo4.jpg",
    name: "Mobile App Development",
    details: "Build apps for iOS and Android.",
    url: "/image/bg6.jpg",
  },
];

const galleryImages = [
  "/image/g1.jpg",
  "/image/g2.jpg",
  "/image/g3.jpg",
  "/image/g4.jpg",
  "/image/g6.jpg",
  "/image/g7.jpg",
  "/image/g9.jpg",
  "/image/g10.jpg",
  "/image/g11.jpg",
  "/image/g12.jpg",
  "/image/g13.jpg",
];

const Outlet = () => {
  return (
    <div>
      <main>
        <section id="batches" className="py-16 lg:mt-80 bg-yellow-50">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-blue-950 uppercase">
              Dive in to Get Involved
            </h2>
            <p className="capitalize text-gray-700 font-semibold">
              take a look at our alumnis, both past and present
            </p>
          </div>

          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {batches.map((batch) => (
              <motion.div
                key={batch.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-stone-400 shadow-4xl border-2 border-blue-200 rounded-xl p-6 flex flex-col items-center transition-all hover:shadow-blue-900/50"
              >
                <img
                  src={batch.logo}
                  alt={`Batch ${batch.id} Logo`}
                  className="w-24 h-24 mb-4 rounded-full"
                />
                <h1 className="text-2xl text-black/70 font-semibold">
                  {batch.details}
                </h1>
                <Link
                  href={batch.links}
                  target_blacks="true"
                  className="mt-4 text-emerald-900 font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="courses" className="py-16 bg-gray-100">
          <div className="text-center mb-8 px-4">
            <h2 className="text-3xl font-bold text-blue-950 uppercase">
              Explore Our Courses
            </h2>
            <p className="capitalize text-gray-700 font-semibold">
              Choose a path that would best suit your journey in Tech
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1, // mobile
              },
              640: {
                slidesPerView: 2, // tablet
              },
              1024: {
                slidesPerView: 3, // desktop
              },
            }}
            className="max-w-7xl mx-auto px-4"
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id} className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
            shadow-lg
            w-full max-w-sm
            h-96
            border-2 border-blue-200
            rounded-xl
            flex flex-col
            items-center
            transition-all
          "
                >
                  <div
                    className="w-full h-40 z-20 rounded-t-lg hover:bg-slate-700/20"
                    style={{
                      backgroundImage: `url(${course.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <img
                      src={course.logo}
                      alt={course.name}
                      className="w-20 h-20
                mx-auto
                mt-24
                rounded-full
                border-2 border-white
              "
                    />
                  </div>

                  <div className="bg-amber-900 h-56 z-0 pt-14 px-6 text-center w-full rounded-b-lg">
                    <h3 className="text-2xl pb-3 font-semibold text-blue-950">
                      {course.name}
                    </h3>
                    <p className="text-sm text-gray-200">{course.details}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-10">
            <Link
              href="../pages/Courses"
              target_blacks="true"
              className="bg-emerald-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-950"
            >
              View More Courses →
            </Link>
          </div>
        </section>

        <section id="yearbook" className="py-16 text-center">
          <h2 className="text-3xl font-bold text-blue-950 uppercase">
            Trainees Yearbook
          </h2>
          <p className="text-lg text-gray-700 capitalize font-bold mt-2">
            View our trainees' Portfolio and Profile Here
          </p>
          <div className="flex justify-center mt-6">
            <IMAGE
              src={Image}
              alt="Yearbook Illustration"
              width={700}
              height={700}
              className="shadow-xl rounded-3xl border border-white"
            />
          </div>
          <div className="mt-8">
            <Link
              href="../pages/YearbookGen"
              target_blacks="true"
              className="bg-emerald-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-950"
            >
              View Yearbook →
            </Link>
          </div>
        </section>

        <section id="about" className="py-16 bg-gray-100 text-center px-4">
          <h2 className="text-3xl font-bold text-blue-950 uppercase">
            The Gallery
          </h2>
          <p className="text-lg text-gray-700 capitalize font-bold mt-2">
            A glimpse into events, lectures, and activities at HTA.
          </p>

          {/* Top Slider */}
          <div className="mt-8">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={{
                0: {
                  slidesPerView: 1, // mobile
                },
                640: {
                  slidesPerView: 2, // tablet
                },
                1024: {
                  slidesPerView: 3, // desktop
                },
              }}
              className="max-w-7xl mx-auto"
            >
              {galleryImages.map((image, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <IMAGE
                    src={image}
                    alt="image"
                    width={400}
                    height={400}
                    className="rounded-xl shadow-lg w-full max-w-sm"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Gallery Section */}
          <div id="gallery" className="py-16 bg-gray-100 text-center">
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-3 gap-4 mt-6 max-w-7xl mx-auto px-4">
              {galleryImages.slice(0, 6).map((image, index) => (
                <div
                  key={index}
                  className="w-full h-60 bg-cover bg-center rounded-lg shadow-lg"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              ))}
            </div>
          </div>
        </section>

        <section id="map" className="py-16 bg-yellow-50 text-center">
          <h2 className="text-3xl font-bold text-blue-950 uppercase">
            Our Location
          </h2>
          <p className="text-lg text-gray-700 font-bold mt-2">
            Find us at HTA – visit and explore our learning environment.
          </p>

          <div className="mt-6 w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="HTA Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094133!2d144.95373631558947!3d-37.816279279751655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e4983dcd3b2a!2sHTA%20Location!5e0!3m2!1sen!2sus!4v1708712345678"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <section
          id="contact"
          className="py-16 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image/formimage.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "full",
          }}
        >
          <div>
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-blue-950 text-center uppercase">
                Would you like us to reach out?
              </h2>
              <p className="text-lg text-white text-center mt-2">
                <span className="text-black text-xl capitalize font-extrabold">
                  Please fill the form.
                </span>
              </p>

              <div className="flex flex-col md:flex-row gap-20">
                <div className="bg-stone-600/90 p-6 border-2 lg:w-1/2 border-indigo-200 rounded-lg shadow-2xl">
                  <h3 className="text-2xl font-semibold text-white">
                    Contact Information
                  </h3>
                  <p className="text-white mt-2">
                    Reach out to us through any of these channels:
                  </p>

                  <div className="mt-4">
                    <h1 className="text-lg font-medium text-white">
                      📍 Address:
                    </h1>
                    <p className="text-white">123 HTA Street, City, Country</p>
                  </div>

                  <div className="mt-4">
                    <h1 className="text-lg font-medium text-white">
                      📧 Email:
                    </h1>
                    <p className="text-white">contact@hta.com</p>
                  </div>

                  <div className="mt-4">
                    <h1 className="text-lg font-medium text-white">
                      📞 Phone:
                    </h1>
                    <p className="text-white">+123 456 7890</p>
                  </div>
                </div>

                <div className="bg-stone-800/90 text-white p-6 lg:w-1/2 rounded-lg border-2 border-indigo-200 shadow-2xl">
                  <h3 className="text-2xl font-semibold capitalize">
                    Send Us a Message
                  </h3>

                  <form className="mt-4">
                    <div className="mb-4">
                      <label className="block  font-medium mb-1">
                        <span className="text-white"> Your Name</span>
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-800"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block font-medium mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-800"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block  font-medium mb-1">
                        Your Message
                      </label>
                      <textarea
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-800"
                        placeholder="Type your message..."
                        rows={4}
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-40 ml-40 bg-emerald-900 text-white py-3 rounded-lg font-semibold hover:bg-emerald-950 transition-all"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Outlet;
