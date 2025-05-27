import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";

const Berita = () => {
  return (
    <div>
      <div
        className="relative w-full h-28S bg-cover bg-top"
        style={{ backgroundImage: `url(${assets.header_img})` }}
      >
        <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
        <div className="relative z- container pt-16 lg:pt-24">
          <Navbar />
        </div>
      </div>

      <section class="pb-8 pt-16">
        <div class="container">
          <p class="mb-4 text-2xl font-bold text-ink">Artikel</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <a href="">
              <div class="zoom mb-4">
                <div class="mr-4">
                  <div class="relative overflow-hidden rounded-md bg-cover bg-no-repeat">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Sumatran_Tiger_Berlin_Tierpark.jpg"
                      alt=""
                      class="h-auto w-full transition duration-300 ease-linear"
                    />
                  </div>
                </div>
                <div class="my-3">
                  <p class="text-sm font-medium text-wolf">
                    <span class="text-orange">Admin</span>・1 hari lalu
                  </p>
                </div>
                <p class="text-lg font-bold text-ink lg:text-xl">
                  Warga Lampung Barat Diminta Pakai Topi Terbalik Hindari
                  Serangan Harimau
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Berita;
