import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";

const BeritaDetail = () => {
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

      <section className="pb-32 pt-16">
        <div className="container">
          <div>
            <p className="mb-3 text-3xl font-bold text-ink">
              1000 Bibit Pohon di Parung Panjang
            </p>
            <hr className="my-5 h-px border-0 bg-gray-300" />
            <div className="mb-5 items-center">
              <div className="flex flex-wrap">
                <div className="w-1/2">
                  <div className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="relative h-[42px] w-[42px] overflow-hidden rounded-full">
                        <img
                          className="h-auto w-full"
                          src="https://media.matamata.com/thumbs/2024/02/06/95694-potret-freya-jkt48-instagramjkt48freya/o-img-95694-potret-freya-jkt48-instagramjkt48freya.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xl font-semibold text-ink">Admin</p>
                      <p className="truncate text-sm text-gray-500">Penulis</p>
                    </div>
                  </div>
                </div>
                <div className="relative w-1/2">
                  <p className="absolute bottom-0 end-0 text-sm text-gray-500">
                    Rabu, 28 Februari 2025 14.00 WIB
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-center">
                <p className="mr-3">Bagikan</p>
                <a
                  href=""
                  target="_blank"
                  className="hover:border-ink hover:bg-ink mr-3 flex h-7 w-7 items-center justify-center rounded-full bg-ink text-white"
                >
                  <svg
                    aria-hidden="true"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.2 9.8a3.4 3.4 0 0 0-4.8 0L5 13.2A3.4 3.4 0 0 0 9.8 18l.3-.3m-.3-4.5a3.4 3.4 0 0 0 4.8 0L18 9.8A3.4 3.4 0 0 0 13.2 5l-1 1"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <img
              src="https://cdn0-production-images-kly.akamaized.net/_K0OsXRN3GY5GZQiKSLrS1HGvr0=/1200x675/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4232811/original/046945700_1668945623-close-up-picture-hand-holding-planting-sapling-plant_1_.jpg"
              className="mb-2 h-auto w-full rounded-md lg:h-[600px]"
              alt="image"
            />
            <p className="text-center text-sm italic text-gray-500">
              Ilustrasi penanaman pohon
            </p>
          </div>
          <div>
            <p className="mb-4">
              Acara ini juga melibatkan partisipasi aktif dari masyarakat
              setempat, yang turut serta dalam proses penanaman dan merawat
              bibit pohon yang ditanam. Hal ini menjadi langkah awal dalam
              menciptakan kesadaran kolektif akan pentingnya pelestarian
              lingkungan dan keberlanjutan hidup.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BeritaDetail;
