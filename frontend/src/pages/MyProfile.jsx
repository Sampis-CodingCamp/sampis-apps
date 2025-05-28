import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";

const MyProfile = () => {
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
      <section id="course-part" class="py-16">
        <div class="container">
          <div class="flex flex-wrap">
            <div class="w-full pr-0 lg:w-8/12 lg:pr-5 mb-5 md:mb-0">
              <div class="rounded-lg border border-gray-200  text-gray-900">
                <div class="h-20 overflow-hidden rounded-t-lg">
                  <img
                    class="w-full object-cover object-top"
                    src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                    alt="Mountain"
                  />
                </div>
                <div class="relative -mt-14 ml-4 h-[100px] w-[100px] overflow-hidden rounded-full border-4 border-white">
                  <img
                    class="h-auto w-full"
                    src="https://img.lazcdn.com/g/ff/kf/Sd45f476644684891896081a8bd0007bcK.jpg_720x720q80.jpg"
                    alt="Woman looking front"
                  />
                </div>
                <div class="px-4 py-5">
                  <div class="rounded-md bg-blue-50 p-6">
                    <div>
                      <div>
                        <p class="text-gray-500">Name</p>
                        <p class="text-2xl font-semibold text-ink">
                          Bilaldi Pinomali
                        </p>
                      </div>
                      <hr class="my-5 h-px border-0 bg-gray-300" />
                      <div>
                        <p class="text-gray-500">Phone</p>
                        <p class="text-base font-semibold text-ink">123</p>
                      </div>
                      <hr class="my-5 h-px border-0 bg-gray-300" />
                      <div>
                        <p class="text-gray-500">Email</p>
                        <p class="text-base font-semibold text-ink">
                          Bilaldi@email.com
                        </p>
                      </div>
                    </div>
                    <hr class="my-5 h-px border-0 bg-gray-300" />
                    <div>
                      <p class="text-gray-500">Address</p>
                      <p class="text-base font-semibold text-ink">Tambun</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-4/12">
              <div class="mb-10 rounded-lg border border-gray-200 text-gray-900">
                <div class="px-4 py-5">
                  <div class="rounded-md p-4">
                    <div>
                      <p class="text-sm font-light italic text-gray-500">
                        Points
                      </p>
                      <p class="mb-4 text-2xl font-semibold text-ginger">500</p>
                      <hr class="my-5 h-px border-0 bg-gray-300" />
                      <div class="mr-2 inline-flex items-center text-center font-medium">
                        <svg
                          class="mr-2 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        Poin didapatkan dari berbagai aktivitas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
