const Registration = () => {
  return (
    <div className="p-8 absolute inset-0 z-20">
      <form className="bg-white shadow-lg rounded-lg p-6 w-80 grid grid-cols-1 gap-3">
        <h2 className="text-xl font-bold text-gray-700 mb-6">
          Course Registration
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2">
            Course Title
          </label>
          <select
            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-900"
            defaultValue=""
          >
            <option value="" disabled>
              Select Course Here
            </option>
            <option value="software-engineering">Software Engineering</option>
            <option value="data-analytics">Data Analytics</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="photography">Photography</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2">
            Course Image
          </label>
          <div className="flex items-center">
            <input type="file" id="course-image" className="hidden" />
            <label
              htmlFor="course-image"
              className="cursor-pointer capitalize bg-emerald-900 hover:bg-emerald-950 text-white font-bold py-2 px-4 rounded"
            >
              Upload Image
            </label>
            <span className="ml-4 text-gray-500">Upload Course Image</span>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2">
            Date Commenced
          </label>
          <input
            type="date"
            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-900"
            placeholder="DD/MM/YY"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2">
            Why Choose this Course?
          </label>
          <textarea
            className="border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-950 capitalize"
            rows="4"
            placeholder="Please Give a brief summary of your Course selection"
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-emerald-900 hover:bg-emerald-950 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-emerald-950"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
