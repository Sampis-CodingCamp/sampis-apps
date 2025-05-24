import React from "react";

const Maps = () => {
  return (
    <section id="about" className="py-16 lg:py-32">
      <div className="container">
        <div className="mb-20 text-center">
          <div className="mb-4 inline-block rounded-md bg-green-100 p-2">
            <p className="text-xs font-bold text-green-900">LOKASI</p>
          </div>
          <p className="mb-2 text-5xl font-bold text-ink">Lokasi Sampis</p>
          <p className="text-lg font-extralight text-wolf">
            Lokasi Sampis di Indonesia
          </p>
        </div>
        <div className="aspect-video h-[500px] w-full rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Lokasi Bantar Gebang"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7991001370815!2d106.9768!3d-6.329383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6992e8e2895c37%3A0x1b57c0e2c1e0a72b!2sTPST%20Bantar%20Gebang!5e1!3m2!1sid!2sid!4v1715524123456!5m2!1sid!2sid"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Maps;
