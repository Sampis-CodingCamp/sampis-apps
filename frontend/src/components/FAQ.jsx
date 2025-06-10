import React from "react";
import { assets } from "../assets/assets";

const FAQ = () => {
  return (
    <section id="faq" className="py-16 lg:py-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div
            className="hidden w-full px-4 lg:flex lg:w-1/2"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <img
              src={assets.artikel_3_img}
              alt=""
              className="h-96 w-[612px] rounded-md"
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="mb-10 self-center px-4 text-center lg:text-start"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <div className="mb-4 inline-block rounded-md bg-green-100 p-2">
                <p className="text-xs font-bold text-green-900">PERTANYAAN</p>
              </div>
              <p className="mb-4 text-5xl font-bold text-ink">
                Pertanyaan yang Sering Diajukan
              </p>
              <p className="mb-4 text-lg font-extralight text-wolf">
                Berikut adalah beberapa pertanyaan yang sering diajukan tentang
                SAMPIS
              </p>
            </div>
            <div className="px-4">
              <div className="mt-8 grid max-w-xl divide-y divide-neutral-200">
                <div
                  className="py-5"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  data-aos-delay="100"
                >
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-ink">
                      <span>Apa keuntungan mengikuti SAMPIS?</span>
                      <span className="text-sea transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                      Menjaga lingkungan, mendapatkan pengetahuan baru tentang
                      pengelolaan sampah, dan mendapatkan sampoint.
                    </p>
                  </details>
                </div>
                <div
                  className="py-5"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-ink">
                      <span>
                        Sistem penukaran sampah seperti apa yang digunakan?
                      </span>
                      <span className="text-sea transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                      Penggunaan sistem penukaran sampah yang berbasis pada
                      teknologi, di mana pengguna dapat menukar sampah yang
                      telah disetujui dengan Sampoint yang bisa ditukarkan.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
