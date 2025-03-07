import React from "react";
import EmblaCarousel from "./components/EmblaCarousel";
import "./components/css/embla.css";
import NavBar from "./components/NavBar";
import Outlet from "./components/Outlet";
import Footer from "./components/Footer";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const App = () => (
  <>
    <NavBar />
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    <Outlet />
    <Footer />
  </>
);
export default App;
