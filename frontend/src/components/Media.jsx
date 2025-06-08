import React from "react";
import { assets } from "../assets/assets";

const Media = () => {
  return (
    <section id="media" className="bg-gray-50 pt-4">
      <div className="container">
        <div className="w-full px-4">
          <div className="flex flex-wrap items-center justify-center text-center">
            <a
              href=""
              className="mx-4 mb-4 max-w-[130px] py-4 opacity-100 grayscale-0 transition duration-500 hover:opacity-80 hover:grayscale-[50%] lg:mx-6 xl:mx-8"
            >
              <img src={assets.dbs_logo} alt="" />
            </a>
            <a
              href=""
              className="mx-4 mb-4 max-w-[130px] py-4 opacity-100 grayscale-0 transition duration-500 hover:opacity-80 hover:grayscale-[50%] lg:mx-6 xl:mx-8"
            >
              <img src={assets.dicoding_logo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
