"use client";
import { useState } from "react";
import { IconUpload } from "@tabler/icons-react";

const Batches = () => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const newPreviews = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImagePreviews((prev) => [...prev, ...newPreviews]);
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = e.dataTransfer.files;
      const newPreviews = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImagePreviews((prev) => [...prev, ...newPreviews]);
    }
  };

  return (
    <div className="p-8 absolute inset-0 z-1">
      <form className="bg-white shadow-lg rounded-lg p-8 w-96 grid grid-cols-1 gap-6">
        <h2 className="text-xl font-bold text-gray-700 mb-6">Batches Portal</h2>
        <div>
          <label className="block mb-2 text-lg font-semibold text-gray-700">
            Batch Name
          </label>
          <input
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-900"
            name="name"
            placeholder="Enter Batch Name"
          />
        </div>

        <div>
          <label className="block mb-2 text-lg font-semibold text-gray-700">
            Upload Batch Images
          </label>
          <div
            className={`flex flex-col items-center justify-center border-2 border-dashed rounded-md p-6 transition-colors ${
              dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
            }`}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <label
              htmlFor="input-file"
              className="cursor-pointer flex flex-col items-center"
            >
              <IconUpload size={48} className="text-blue-500 mb-2" />
              <span className="text-gray-500">
                Click to upload or drag images here
              </span>
              <input
                type="file"
                id="input-file"
                onChange={handleFileChange}
                className="hidden"
                multiple
              />
            </label>
          </div>
          {imagePreviews.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-4">
              {imagePreviews.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Preview ${index + 1}`}
                  className="w-full rounded-md"
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <label className="block mb-2 text-lg font-semibold text-gray-700">
            Graduating Date
          </label>
          <input
            type="date"
            name="date"
            className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-900"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-3 bg-emerald-900 text-white rounded-md hover:bg-emerald-950 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Batches;
