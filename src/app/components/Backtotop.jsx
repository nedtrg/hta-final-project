"use client";
import { useState, useEffect } from "react";
import { IconArrowBadgeUp } from "@tabler/icons-react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScrollTop = () => {
    if (!isVisible && window.pageYOffset > 300) {
      setIsVisible(true);
    } else if (isVisible && window.pageYOffset <= 300) {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [isVisible]);

  return (
    <button
      onClick={scrollToTop}
      className="bg-emerald-800 hover:bg-emerald-950"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        color: "white",
        border: "none",
        borderRadius: "50%",
        padding: "10px",
        cursor: "pointer",
        display: isVisible ? "block" : "none",
        zIndex: 1000,
      }}
    >
      <IconArrowBadgeUp stroke={2} width={30} height={30} />
    </button>
  );
};

export default BackToTopButton;
