"use client";
import React, { useCallback } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import slide1 from "../../../public/slide1.jpg";
import slide2 from "../../../public/slide2.jpg";
import slide3 from "../../../public/slide3.jpg";
import slide4 from "../../../public/slide4.jpg";
import slide5 from "../../../public/slide5.jpg";
import { IconFriends, IconVocabulary, IconAward } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "motion/react";

const EmblaCarousel = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section id="intro" className="embla w-full">
      {/* Carousel */}
      <div
        className="embla__viewport relative w-full overflow-hidden"
        ref={emblaRef}
      >
        <div className="embla__container flex">
          {[slide1, slide2, slide3, slide4, slide5].map((slide, index) => (
            <div
              key={index}
              className="embla__slide flex-shrink-0 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 relative"
            >
              <Image
                src={slide}
                alt={`Picture of slide ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Prev/Next Buttons */}
      {/* <div className="embla__buttons absolute top-1/2 left-0 right-0 flex justify-between px-4 sm:px-8">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div> */}

      {/* Dots */}
      <div className="embla__dots flex justify-center mt-4 gap-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={
              "embla__dot" +
              (index === selectedIndex ? " embla__dot--selected" : "")
            }
          />
        ))}
      </div>

      {/* Slider Boxes */}
      <div className="slider-boxes w-full flex flex-col sm:flex-row flex-wrap gap-4 mt-8 px-4 sm:px-0 justify-center">
        <div className="flex gap-4 sm:gap-6 justify-around slider-box w-full sm:w-1/4 md:w-1/4 h-40 text-center items-center rounded-lg hover:bg-black cursor-pointer p-4">
          <div className="relative text-amber-800 ml-0 sm:ml-5">
            <IconFriends width={50} height={50} />
          </div>
          <div className="inline-block text-left">
            <h1 className="text-xl sm:text-2xl text-slate-200 uppercase font-bold mb-2 sm:mb-3">
              Best Industry Leaders
            </h1>
            <Link className="text-slate-200 font-bold" href="">
              View More
            </Link>
          </div>
        </div>

        <div className="flex gap-4 sm:gap-6 justify-around slider-box w-full sm:w-1/3 md:w-1/4 h-40 text-center items-center rounded-lg hover:bg-black cursor-pointer p-4">
          <div className="relative text-amber-800 ml-0 sm:ml-5">
            <IconAward width={50} height={50} />
          </div>
          <div className="inline-block text-left">
            <h1 className="text-xl sm:text-2xl text-slate-200 uppercase font-bold mb-2 sm:mb-3">
              Learn Courses Online
            </h1>
            <Link className="text-slate-200 font-bold" href="">
              View More
            </Link>
          </div>
        </div>

        <div className="flex gap-4 sm:gap-6 justify-around slider-box w-full sm:w-1/3 md:w-1/4 h-40 text-center items-center rounded-lg hover:bg-black cursor-pointer p-4">
          <div className="relative text-amber-800 ml-0 sm:ml-5">
            <IconVocabulary width={50} height={50} />
          </div>
          <div className="inline-block text-left">
            <h1 className="text-xl sm:text-2xl text-slate-200 uppercase font-bold mb-2 sm:mb-3">
              Book Library & Store
            </h1>
            <Link className="text-slate-200 font-bold" href="">
              View More
            </Link>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="slider-headerone mt-8 px-4 sm:px-32">
        <p className="text-lg sm:text-xl text-white font-extrabold pb-1 uppercase">
          We welcome you to ...
        </p>
        <motion.h1
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-3xl sm:text-5xl pb-10 font-bold text-white"
        >
          Honey Treat Academy
        </motion.h1>
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          whileHover={{ scale: 1.1 }}
        >
          <Link
            href="/"
            className="text-white bg-amber-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-thin hover:bg-amber-950 transition"
          >
            Learn More
          </Link>
        </motion.button>
      </div>
    </section>
  );
};

export default EmblaCarousel;
