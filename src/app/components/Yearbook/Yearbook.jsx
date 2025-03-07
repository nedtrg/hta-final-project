"use client";
import React from "react";

const Yearbook = () => {
  return (
    <div className="p-8 absolute inset-0 z-1">
      <form className="bg-white shadow-lg rounded-lg p-6 w-96 grid grid-cols-1 gap-3">
        <h2 className="text-xl font-bold text-gray-700 mb-6">
          Yearbook Application
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2">
            Trainee Name
          </label>
          <input
            type="text"
            placeholder="Enter Your Name Here"
            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-900"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2">
            Batch
          </label>
          <select
            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-900"
            defaultValue=""
          >
            <option value="" disabled>
              Select Your Batch Here
            </option>
            <option value="batch-a">Batch A</option>
            <option value="batch-b">Batch B</option>
            <option value="batch-c">Batch C</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2">
            Graduating Date
          </label>
          <input
            type="date"
            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-900"
            placeholder="DD/MM/YY"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2">
            Portfolio Link
          </label>
          <input
            type="url"
            placeholder="Paste Portfolio URL here"
            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-900"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-emerald-900 hover:bg-emerald-950 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-emerald-900"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Yearbook;
