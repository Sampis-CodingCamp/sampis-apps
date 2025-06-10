import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="mb-10 w-full self-center px-4 text-center lg:w-1/2 lg:text-start" data-aos="fade-right">
            <div className="mb-4 inline-block rounded-md bg-green-100 p-2">
              <p className="text-xs font-bold text-green-900">TENTANG KAMI</p>
            </div>
            <p className="mb-4 text-5xl font-bold text-ink">
              Siapa itu SAMPIS?
            </p>
            <p className="mb-4 text-lg font-extralight text-wolf text-justify ">
              SAMPIS adalah komunitas yang fokus pada pelestarian lingkungan
              dengan misi menciptakan lingkungan yang bersih dan tanpa sampah.
              Dengan sistem manajemen sampah yang kami kembangkan, masyarakat
              dapat dengan mudah memilah dan menukarkan sampah menjadi barang
              bernilai. Melalui program Sampoint, sampah yang kamu kumpulkan
              dapat ditukar dengan berbagai produk yang bermanfaat untuk
              kebutuhan sehari-hari.
            </p>
          </div>
          <div className="mt-8 flex w-full self-center px-5 lg:w-1/2" data-aos="fade-left">
            <div className="grid grid-cols-3 gap-4 rounded-md">
              <img
                className="h-full rounded-md"
                src={assets.foto1}
                alt=""
              />
              <img
                className="-mt-8 h-full rounded-md"
                src={assets.foto2}
                alt=""
              />
              <img
                className="h-full rounded-md"
                src={assets.foto3}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
