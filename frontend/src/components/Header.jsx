import React from "react";
import { assets } from "../assets/assets";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.header_img})` }}
    >
      
      {/* <div className="absolute inset-0 bg-gray-700 opacity-50"></div> */}
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 mx-4 sm:mx-[8%]">
        <Navbar />

        <div className="flex flex-col md:flex-row flex-wrap">
          {/* {left site} */}
          <div className="md:w-1/2 flex flex-col items-start justify-center gap-10 py-10 m-auto md:py-[5vw] md:mb-[-30px]">
            <p className="text-3xl md:text-4xl lg:text-5xl  text-primary font-semibold leading-tight md:leading-tight lg:leading-tight">
              Sampahmu Tanggung <br /> Jawabmu
            </p>
            <div className="flex flex-col md:flex-row items-center gap-3 text-primary text-sm font-light">
              <p>
                Selamat datang di Sampis! Bergabunglah bersama{" "}
                <br className="hidden sm:block" />
                kami. Deteksi Sampahmu dengan menekan tombol!
              </p>
            </div>
            <button
              className="rounded-lg hover:bg-[#BF9264] bg-orange-400 px-16 py-5 text-sm font-medium text-primary hover:scale-105 transition-all duration-300"
              onClick={() => navigate('/scanTrash')}
            >
              Deteksi <img className="w-3" alt="" />
            </button>
          </div>

          
          <div className="md:w-1/2 relative"></div>
        </div>
      </div>
    </div>

    // <section
    //   class="border-l-orange-100 bg-gray-500 bg-cover bg-center bg-no-repeat pb-32 pt-48 bg-blend-multiply"
    //   style={{ backgroundImage: `url(${assets.header_img})` }}
    // >
    //   <div class="container">
    //     <div class="mb-20 flex flex-wrap lg:mb-10">
    //       <div class="w-full px-4 lg:w-1/2">
    //         <hr class="bg-sea mb-4 h-1 w-32 border-0 md:h-2" />
    //         <p class="mb-4 text-6xl font-bold leading-none tracking-wide text-white">
    //           Lindungi Bumi Untuk Hari Esok
    //         </p>
    //       </div>
    //       <div class="w-full px-4 lg:w-1/2">
    //         <p class="mb-10 mt-7 font-medium leading-relaxed text-slate-300">
    //           Selamat datang di Bangkit Hijau! Gabunglah dalam komunitas cinta
    //           alam kami. Satu langkah kecil untuk hijaukan dunia! 🌿✨
    //           #BangkitHijau #CintaAlam
    //         </p>
    //         <button
    //           class="mb-2 mr-2 rounded-full bg-ginger px-7 py-3 text-lg font-medium text-white duration-300 ease-in-out hover:opacity-80 hover:shadow-lg"
    //           onClick={() => navigate("/scanTrash")}
    //         >
    //           Ikuti Acara
    //         </button>
    //       </div>
    //     </div>
    //     <div class="flex flex-wrap">
    //       <div class="w-full self-center px-4 lg:w-5/12">
    //         <div class="grid grid-cols-2 gap-4">
    //           <div>
    //             <p class="mb-3 text-5xl font-bold leading-none tracking-wide text-white">
    //               1250
    //             </p>
    //             <p class="text-lg font-medium text-slate-300">Anggota aktif</p>
    //           </div>
    //           <div>
    //             <p class="mb-3 text-5xl font-bold leading-none tracking-wide text-white">
    //               45
    //             </p>
    //             <p class="text-lg font-medium text-slate-300">Acara sukses</p>
    //           </div>
    //         </div>
    //         <div class="mt-8 flex items-center lg:mt-16">
    //           <a
    //             href=""
    //             target="_blank"
    //             class="hover:border-primary hover:bg-primary mr-3 flex h-9 w-9 items-center justify-center text-slate-300 hover:text-white"
    //           >
    //             <svg
    //               role="img"
    //               width="20"
    //               class="fill-current"
    //               viewBox="0 0 24 24"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <title>Instagram</title>
    //               <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
    //             </svg>
    //           </a>
    //           <a
    //             href=""
    //             target="_blank"
    //             class="hover:border-primary hover:bg-primary mr-3 flex h-9 w-9 items-center justify-center text-slate-300 hover:text-white"
    //           >
    //             <svg
    //               role="img"
    //               width="20"
    //               class="fill-current"
    //               viewBox="0 0 24 24"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <title>Facebook</title>
    //               <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    //             </svg>
    //           </a>
    //         </div>
    //       </div>
    //       <div class="hidden w-full px-4 lg:flex lg:w-7/12">
    //         <div class="grid grid-cols-2 gap-2">
    //           <img
    //             src="https://images.unsplash.com/photo-1632703272582-41359d52bfa9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //             alt=""
    //             class="h-[300px] w-[300px] rounded-xl xl:h-[350px] xl:w-[350px]"
    //           />
    //           <img
    //             src="https://images.unsplash.com/photo-1615530404952-da2c459488c1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //             alt=""
    //             class="h-[300px] w-[300px] rounded-xl xl:h-[350px] xl:w-[350px]"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Header;
