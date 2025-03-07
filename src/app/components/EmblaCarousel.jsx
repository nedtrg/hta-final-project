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
import { IconFriends } from "@tabler/icons-react";
import { IconVocabulary } from "@tabler/icons-react";
import { IconAward } from "@tabler/icons-react";
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
    <section id="intro" className="embla">
      <div className="embla__viewport relative" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <Image src={slide1} alt="Picture of slide 1" fit="true" />
          </div>
          <div className="embla__slide">
            <Image src={slide2} alt="Picture of slide 2" fit="true" />
          </div>
          <div className="embla__slide">
            <Image src={slide3} alt="Picture of slide 3" fit="true" />
          </div>
          <div className="embla__slide">
            <Image src={slide4} alt="Picture of slide 4" fit="true" />
          </div>
          <div className="embla__slide">
            <Image src={slide5} alt="Picture of slide 5" fit="true" />
          </div>
        </div>
      </div>

      <div className="embla__buttons">
        <div className="emblaprev">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>
        <div className="emblanext">
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
      <div className="slider-boxes w-full">
        <div className="flex gap-10 justify-around slider-box w-1/4 h-40 text-center items-center rounded-lg hover:bg-black cursor-pointer">
          <div className="relative text-amber-800 ml-5">
            <IconFriends width={60} height={60} />
          </div>
          <div className="inline-block">
            <div>
              <h1 className="text-2xl text-slate-200 uppercase font-bold text-left mb-3">
                Best Industry Leaders
              </h1>
            </div>

            <div className="text-left">
              <Link className="text-slate-200 font-bold" href="">
                View More
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-10 justify-around slider-box w-1/4 h-40 text-center items-center rounded-lg hover:bg-black cursor-pointer">
          <div className="relative text-amber-800 ml-5">
            <IconAward width={60} height={60} />
          </div>
          <div className="inline-block">
            <div>
              <h1 className="text-2xl text-slate-200 uppercase font-bold text-left mb-3">
                Learn Courses Online
              </h1>
            </div>

            <div className="text-left">
              <Link className="text-slate-200 font-bold" href="">
                View More
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-10 justify-around slider-box w-1/4 h-40 text-center items-center rounded-lg hover:bg-black cursor-pointer">
          <div className="relative text-amber-800 ml-5">
            <IconVocabulary width={60} height={60} />
          </div>
          <div className="inline-block">
            <div>
              <h1 className="text-2xl text-slate-200 uppercase font-bold text-left mb-3">
                Book Library & Store
              </h1>
            </div>

            <div className="text-left">
              <Link className="text-slate-200 font-bold" href="">
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-headerone">
        <p className="text-xl text-white font-extrabold pb-1 pl-32 uppercase">
          We welcome you to ...
        </p>
        <motion.h1
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl pl-32 pb-10 font-bold text-white text-left slider-header"
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
            className="text-white bg-amber-800 px-8 py-4 ml-32 rounded-lg font-thin hover:bg-amber-950 transition"
          >
            Learn More
          </Link>
        </motion.button>
      </div>
    </section>
  );
};

export default EmblaCarousel;
