import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { AppContext } from "../context/AppContex";
import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";

const Story = () => {
  const { Story } = useContext(AppContext);
  //   const navigate = useNavigate();

  return (
    <section id="Story" className="bg-gray-50 py-16 lg:py-32">
      <div className="container">
        <div className="mb-20 text-center">
          <div className="mb-4 inline-block rounded-md bg-green-100 p-2">
            <p className="text-xs font-bold text-green-900">CERITA</p>
          </div>
          <p className="mb-2 text-3xl md:text-4xl lg:text-5xl font-bold text-ink">Apa Kata Mereka?</p>
          <p className="text-base md:text-lg font-extralight text-wolf">
            Apa yang mereka katakan tentang SAMPIS?
          </p>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          <div className="swiper eventsSwiper">
            <SwiperSlide>
              <div className="swiper-wrapper" style={{ paddingBottom: "0px" }}>
                <div className="swiper-slide" style={{ paddingBottom: "0px" }}>
                  <div className="mx-auto max-w-screen-md text-center">
                    <div>
                      <blockquote className="px-2 text-base md:text-lg lg:text-2xl font-medium italic text-gray-600 md:px-0">
                        "Dengan SAMPIS, saya jadi lebih mudah memilah sampah di
                        rumah. Program Sampoint-nya bikin saya semangat karena
                        bisa tukar sampah dengan kebutuhan sehari-hari.
                        Lingkungan juga jadi lebih bersih, senang banget!"
                      </blockquote>
                    </div>
                    <div className="mt-6 flex items-center justify-center space-x-3">
                      <div className="relative h-[40px] w-[40px] overflow-hidden rounded-full">
                        <img
                          className="h-auto w-full"
                          src={assets.foto_bila}
                          alt="user photo"
                        />
                      </div>
                      <div className="items-center divide-x-0 divide-gray-500 pl-3 text-center sm:flex sm:divide-x-2 sm:pl-0">
                        <div className="pl-0 pr-0 font-medium text-gray-900 sm:pl-0 sm:pr-3">
                          Ibu Bila
                        </div>
                        <div className="pl-0 text-sm text-wolf sm:pl-3">
                          Ibu Rumah Tangga
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-wrapper" style={{ paddingBottom: "0px" }}>
                <div className="swiper-slide" style={{ paddingBottom: "0px" }}>
                  <div className="mx-auto max-w-screen-md text-center">
                    <div>
                      <blockquote className="px-2 text-base md:text-lg lg:text-2xl font-medium italic text-gray-600 md:px-0">
                        "Awalnya saya kenalin SAMPIS ke istri, dan ternyata dia
                        semangat banget! Sekarang, sampah di rumah lebih tertata
                        karena dia rutin upload dan tukar sampah jadi Sampoint.
                        Bukan cuma rumah jadi lebih bersih, tapi juga bisa dapat
                        barang-barang yang berguna untuk keluarga. Sampis
                        benar-benar membantu kami jaga lingkungan sekaligus
                        hemat pengeluaran! Nanti saya bakal edukasi warga buat
                        pake SAMPIS!"
                      </blockquote>
                    </div>
                    <div className="mt-6 flex items-center justify-center space-x-3">
                      <div className="relative h-[40px] w-[40px] overflow-hidden rounded-full">
                        <img
                          className="h-auto w-full"
                          src={assets.foto_ferry}
                          alt="user photo"
                        />
                      </div>
                      <div className="items-center divide-x-0 divide-gray-500 pl-3 text-center sm:flex sm:divide-x-2 sm:pl-0">
                        <div className="pl-0 pr-0 font-medium text-gray-900 sm:pl-0 sm:pr-3">
                          Pak Ferry
                        </div>
                        <div className="pl-0 text-sm text-wolf sm:pl-3">
                          Pak RT
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Story;
