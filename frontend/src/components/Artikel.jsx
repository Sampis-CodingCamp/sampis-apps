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
        <div className="mb-20 text-center">
          <div className="mb-4 inline-block rounded-md bg-green-100 p-2">
            <p className="text-xs font-bold text-green-900">ARTIKEL</p>
          </div>
          <p className="mb-2 text-5xl font-bold text-ink">Artikel Sampis</p>
          <p className="text-lg font-extralight text-wolf">
            Artikel terbaru tentang Sampis dan lingkungan
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
              <SwiperSlide key={index}>
                <div className="swiper-wrapper">
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
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="h-4 w-4 flex-shrink-0 text-ginger"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                                    clipRule="evenodd"
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
