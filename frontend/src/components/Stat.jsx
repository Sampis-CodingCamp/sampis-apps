import React from "react";

const Stat = () => {
  return (
    <div className="w-full ">
      <div className="mx-auto bg-[#F9FAFB] flex justify-center py-10">
        <article className="flex items-center gap-10">
          <div>
            <p className="text-5xl font-bold text-ink">1000</p>

            <p className="text-base text-text-ink">Anggota Aktif</p>
          </div>

          <div>
            <p className="text-5xl font-bold text-ink">45 Ton</p>

            <p className="text-base text-text-ink">Sampah Terkumpul</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Stat;
