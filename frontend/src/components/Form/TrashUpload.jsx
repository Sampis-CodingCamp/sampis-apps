import React from "react";

const TrashUpload = ({ trashImg, setTrashImg }) => {
  return (
    <div>
      <p className="block my-1 font-medium text-gray-700">
        Masukkan foto yang mau dijual
      </p>
      <label
        htmlFor="trash-img"
        className="flex flex-col items-center rounded border border-gray-300 p-4 text-gray-900 shadow-sm sm:p-6 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
          />
        </svg>

        <span className="mt-4 font-medium">Upload your file</span>
        <span className="mt-2 inline-block rounded border border-gray-200 bg-gray-50 px-3 py-1.5 text-center text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-100">
          Browse files
        </span>

        <input
          onChange={(e) => setTrashImg(e.target.files[0])}
          type="file"
          id="trash-img"
          className="sr-only"
          required
        />

        {trashImg && (
          <div className="mt-4">
            <p className="mb-1 text-sm font-medium text-gray-700">
              Preview Gambar:
            </p>
            <img
              src={URL.createObjectURL(trashImg)}
              alt="Preview"
              className="w-40 h-auto rounded border"
            />
          </div>
        )}
      </label>
    </div>
  );
};

export default TrashUpload;
