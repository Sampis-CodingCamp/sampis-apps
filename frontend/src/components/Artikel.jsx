import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { AppContext } from "../context/AppContex";
import { useNavigate } from "react-router-dom";

const Artikel = () => {
  const { artikel, formatTanggal } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <section id="artikel" className="bg-gray-50 py-16 lg:py-32">
      <div className="container">
        <div className="mb-20 text-center" data-aos = 'fade-right'>
          <div className="mb-4 inline-block rounded-md bg-green-100 p-2" >
            <p className="text-xs font-bold text-green-900">ARTIKEL</p>
          </div>
          <p className="mb-2 text-5xl font-bold text-ink">Artikel SAMPIS</p>
          <p className="text-lg font-extralight text-wolf">
            Artikel terbaru tentang SAMPIS dan lingkungan
          </p>
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {artikel.map((item, index) => (
            <div className="swiper eventsSwiper">
              <SwiperSlide key={index}
  >
                <div className="swiper-wrapper cursor-pointer">
                  <div className="zoom swiper-slide rounded-md border border-solid border-slate-200 bg-white transition duration-300 hover:shadow-sm">
                    <a
                      onClick={() => navigate(`/artikel/${item._id}`)}
                      className="block h-full"
                    >
                      <div className="pb-6">
                        <div className="relative overflow-hidden bg-cover bg-no-repeat">
                          <img
                            className="h-60 w-full rounded-t-sm align-middle transition duration-300 ease-linear sm:h-56"
                            src={item.foto}
                            alt={item.title}
                          />
                        </div>
                      </div>
                      <div className="px-6">
                        <div className="flex-1">
                          <div className="flex">
                            <div className="flex w-1/2 justify-start space-x-2">
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  className="h-4 w-4 flex-shrink-0"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"
                                  />
                                </svg>
                                <span className="ml-2 text-sm text-orange">
                                  {item.sumber}
                                </span>
                              </div>
                            </div>
                            <div className="flex w-1/2 justify-start space-x-2">
                              <div className="flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="h-4 w-4 text-ginger"
                                >
                                  <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                  <path
                                    fillRule="evenodd"
                                    d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                <time
                                  dateTime={item.date}
                                  className="ml-2 text-sm text-wolf"
                                >
                                  {formatTanggal(item.tanggal)}
                                </time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 px-6 py-6">
                        <p className="mb-3 text-lg font-medium">{item.judul}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <div className="swiper-pagination"></div>
            </div>
          ))}
        </Swiper>
        <a
          onClick={() => navigate("/artikel")}
          className="mt-4 lg:mb-0 text-orange cursor-pointer"
        >
          <p className="text-end text-ginger">Lihat semua</p>
        </a>
      </div>
    </section>
  );
};

export default Artikel;
