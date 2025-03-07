"use client";
import { useState, useEffect, useRef } from "react";
import { IconDotsVertical } from "@tabler/icons-react";
import Batches from "./Batches/Batches";
import Registration from "./Registration/Registration";
import Yearbook from "./Yearbook/Yearbook";

export default function Hamburger() {
  const [dropDownIcon, setDropDownIcon] = useState(false);
  const [showBatches, setShowBatches] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [showYearbook, setShowYearbook] = useState(false);

  const containerRef = useRef(null);

  const handleBatchesClick = () => {
    setShowBatches(true);
    setShowRegistration(false);
    setDropDownIcon(false);
    setShowYearbook(false);
  };

  const handleRegistrationClick = () => {
    setShowRegistration(true);
    setShowBatches(false);
    setDropDownIcon(false);
    setShowYearbook(false);
  };
  const handleYearbookClick = () => {
    setShowYearbook(true);
    setShowRegistration(false);
    setShowBatches(false);
    setDropDownIcon(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setDropDownIcon(false);
        setShowBatches(false);
        setShowRegistration(false);
        setShowYearbook(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);
  return (
    <div ref={containerRef} className="p-4">
      <aside className="ml-4 relative">
        <button onClick={() => setDropDownIcon(!dropDownIcon)}>
          <IconDotsVertical size={20} />
        </button>
        {dropDownIcon && (
          <ul className="z-10 w-72 absolute left-0 mt-2 h-auto bg-white shadow-md rounded-lg transition-all duration-300">
            <li
              className="mb-4 pl-5 p-3 cursor-pointer hover:bg-slate-200 m-3 rounded-lg"
              onClick={handleBatchesClick}
            >
              Batches Portal
            </li>
            <li
              className="mb-4 pl-5 p-3 cursor-pointer hover:bg-slate-200 m-3 rounded-lg"
              onClick={handleRegistrationClick}
            >
              Course Registration
            </li>
            <li
              className="mb-4 pl-5 p-3 cursor-pointer hover:bg-slate-200 m-3 rounded-lg"
              onClick={handleYearbookClick}
            >
              Yearbook Application
            </li>
          </ul>
        )}
      </aside>

      {showBatches && (
        <div className="z-10 w-full absolute left-0 mt-2 h-auto bg-white shadow-md rounded-lg transition-all duration-300">
          <Batches />
        </div>
      )}

      {showRegistration && (
        <div className="z-10 w-full absolute left-0 mt-2 h-auto bg-white shadow-md rounded-lg transition-all duration-300">
          <Registration />
        </div>
      )}

      {showYearbook && (
        <div className="z-10 w-full absolute left-0 mt-2 h-auto bg-white shadow-md rounded-lg transition-all duration-300">
          <Yearbook />
        </div>
      )}
    </div>
  );
}
