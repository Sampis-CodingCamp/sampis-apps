import React from "react";

const Visi = () => {
  return (
    // <section className="px-6 max-w-7xl py-20 mx-auto">
    //   <div className="flex flex-col lg:flex-row lg:items-stretch gap-10">
    //     {/* Left Section - Cards */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
    //       {["Penelitian", "Edukasi", "Wisata", "Lingkungan"].map(
    //         (title, index) => (
    //           <div
    //             key={index}
    //             className="bg-[#27667B] text-white p-6 rounded-lg shadow-md"
    //           >
    //             <h3 className="text-xl font-semibold mb-2">{title}</h3>
    //             <p className="text-sm leading-relaxed">
    //               Menyajikan informasi yang lebih jelas bagi masyarakat untuk
    //               meningkatkan pengetahuan.
    //             </p>
    //           </div>
    //         )
    //       )}
    //     </div>

    //     {/* Right Section - Vertically Centered */}
    //     <div className="flex-1 flex items-center">
    //       <div>
    //         <span className="inline-flex items-center justify-center rounded-full bg-green-apple px-3 py-1 font-semibold mb-2 text-emerald-700 ">
    //           <p className="text-sm whitespace-nowrap">Tujuan</p>
    //         </span>
    //         <h2 className="text-3xl text-hitam-manja font-bold mb-4">
    //           4 tujuan Sampis
    //         </h2>
    //         <p className="text-gray-600 leading-relaxed">
    //           Sampis adalah organisasi yang berkomitmen untuk melestarikan
    //           lingkungan dan meningkatkan kesadaran tentang pentingnya
    //           pelestarian alam. Melalui berbagai inisiatif dan program, kami
    //           bertujuan untuk menciptakan perubahan positif dalam lingkungan dan
    //           masyarakat.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section id="pilar" className="py-16 lg:py-32">
      <div className="container">
        <div className="flex flex-col-reverse flex-wrap lg:flex-row">
          <div className="flex w-full justify-center self-center px-5 lg:w-1/2">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="max-w-sm rounded-lg bg-orange-50 p-6">
                <svg
                  className="mb-3 h-7 w-7 text-ginger"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 14 18"
                >
                  <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-ink">
                  Manajemen Limbah
                </h5>
                <p className="mb-3 font-medium leading-relaxed text-gray-500">
                  Memberikan informasi tentang cara penanganan dan daur ulang yang benar.
                </p>
              </div>
              <div className="max-w-sm rounded-lg bg-orange-50 p-6">
                <svg
                  className="mb-3 h-7 w-7 text-ginger"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z" />
                  <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z" />
                </svg>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-ink">
                  Tanggung Jawab
                </h5>
                <p className="mb-3 font-medium leading-relaxed text-gray-500">
                  Mendorong masyarakat untuk lebih aktif memilah dan mengelola sampah.
                </p>
              </div>
              <div className="max-w-sm rounded-lg bg-orange-50 p-6">
                <svg
                  className="mb-3 h-7 w-7 text-ginger"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.6 4.7A8 8 0 0 1 19 8h-.7c-.7 0-1.2.3-1.2 1 0 .2 0 2-2 2s-2-1.8-2-2c0-1.5-.8-1.7-1.7-2L10 6.6c-1-.5-1.3-1.2-1.5-1.9ZM6 4a10 10 0 0 0-2.8 3.3A10 10 0 0 0 12.5 22 10 10 0 1 0 6 4Zm13.4 11.1-.8-.1h-.2a3.4 3.4 0 0 0-3.4 3.4v1a8 8 0 0 0 4.4-4.3ZM12 20A8 8 0 0 1 5.1 8c1 .5 1.4 1.5 1.8 2.4l.7 1.1c.5.7 1 1 1.6 1.4.5.3 1 .6 1.6 1.3 1.4 1.8 1.4 4.3 1.3 5.8Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-ink">
                  Dukung SDGs
                </h5>
                <p className="mb-3 font-medium leading-relaxed text-gray-500">
                  Mendukung tercapainya SDGs poin 11 , 12, dan 13.
                </p>
              </div>
              <div className="max-w-sm rounded-lg bg-orange-50 p-6">
                <svg
                  className="mb-3 h-7 w-7 text-ginger"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 19V.352A3.451 3.451 0 0 0 7.5 0a3.5 3.5 0 0 0-3.261 2.238A3.5 3.5 0 0 0 2.04 6.015a3.518 3.518 0 0 0-.766 1.128c-.042.1-.064.209-.1.313a3.34 3.34 0 0 0-.106.344 3.463 3.463 0 0 0 .02 1.468A4.016 4.016 0 0 0 .3 10.5l-.015.036a3.861 3.861 0 0 0-.216.779A3.968 3.968 0 0 0 0 12a4.032 4.032 0 0 0 .107.889 4 4 0 0 0 .2.659c.006.014.015.027.021.041a3.85 3.85 0 0 0 .417.727c.105.146.219.284.342.415.072.076.148.146.225.216.1.091.205.179.315.26.11.081.2.14.308.2.02.013.039.028.059.04v.053a3.506 3.506 0 0 0 3.03 3.469 3.426 3.426 0 0 0 4.154.577A.972.972 0 0 1 9 19Zm10.934-7.68a3.956 3.956 0 0 0-.215-.779l-.017-.038a4.016 4.016 0 0 0-.79-1.235 3.417 3.417 0 0 0 .017-1.468 3.387 3.387 0 0 0-.1-.333c-.034-.108-.057-.22-.1-.324a3.517 3.517 0 0 0-.766-1.128 3.5 3.5 0 0 0-2.202-3.777A3.5 3.5 0 0 0 12.5 0a3.451 3.451 0 0 0-1.5.352V19a.972.972 0 0 1-.184.546 3.426 3.426 0 0 0 4.154-.577A3.506 3.506 0 0 0 18 15.5v-.049c.02-.012.039-.027.059-.04.106-.064.208-.13.308-.2s.214-.169.315-.26c.077-.07.153-.14.225-.216a4.007 4.007 0 0 0 .459-.588c.115-.176.215-.361.3-.554.006-.014.015-.027.021-.041.087-.213.156-.434.205-.659.013-.057.024-.115.035-.173.046-.237.07-.478.073-.72a3.948 3.948 0 0 0-.066-.68Z" />
                </svg>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-ink">
                  Edukasi Sampah
                </h5>
                <p className="mb-3 font-medium leading-relaxed text-gray-500">
                  Membantu masyarakat memanajement sampah
                </p>
              </div>
            </div>
          </div>
          <div className="mb-10 w-full self-center px-4 text-center lg:w-1/2 lg:text-start">
            <div className="mb-4 inline-block rounded-md bg-green-100 p-2">
              <p className="text-xs font-bold text-green-900">TUJUAN</p>
            </div>
            <p className="mb-2 text-5xl font-bold text-ink">
              4 Tujuan Sampis
            </p>
            <p className="text-lg font-extralight text-gray-500">
              Sampis adalah organisasi yang berkomitmen untuk melestarikan
              lingkungan dan meningkatkan kesadaran tentang pentingnya
              pelestarian alam. Melalui berbagai inisiatif dan program, kami
              bertujuan untuk menciptakan perubahan positif dalam lingkungan dan
              masyarakat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visi;
