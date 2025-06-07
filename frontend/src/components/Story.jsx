import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { AppContext } from "../context/AppContex";
// import { useNavigate } from "react-router-dom";

const Story = () => {
  const { Story } = useContext(AppContext);
  //   const navigate = useNavigate();

  return (
    <section id="Story" className="pt-16 pb-8 lg:pt-32 lg:pb-16">
      <div className="container">
        <div className="mb-20 text-center">
          <div className="mb-4 inline-block rounded-md bg-green-100 p-2">
            <p className="text-xs font-bold text-green-900">CERITA</p>
          </div>
          <p className="mb-2 text-5xl font-bold text-ink">Apa Kata Mereka?</p>
          <p className="text-lg font-extralight text-wolf">
            Apa yang mereka katakan tentang Sampis
          </p>
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          pagination={{ clickable: true }}
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
                      <p className="px-2 text-2xl font-medium italic text-gray-600 md:px-0">
                        "Saya sangat terkesan dengan dedikasi dan komitmen
                        Sampis dalam menjaga kelestarian alam. Mereka telah
                        membawa perubahan positif yang signifikan dalam menjaga
                        lingkungan hidup kita."
                      </p>
                    </div>
                    <div className="mt-6 flex items-center justify-center space-x-3">
                      <div className="relative h-[40px] w-[40px] overflow-hidden rounded-full">
                        <img
                          className="h-auto w-full"
                          src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Linus_Sebastian_Screenshot_From_Youtube_August_5_2013.png"
                          alt="user photo"
                        />
                      </div>
                      <div className="items-center divide-x-0 divide-gray-500 pl-3 text-center sm:flex sm:divide-x-2 sm:pl-0">
                        <div className="pl-0 pr-0 font-medium text-gray-900 sm:pl-0 sm:pr-3">
                          Linus Sebastian
                        </div>
                        <div className="pl-0 text-sm text-wolf sm:pl-3">
                          Mahasiswa
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
