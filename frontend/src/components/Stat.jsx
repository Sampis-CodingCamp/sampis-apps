import React from "react";

const Stat = () => {
  return (
    <div className="w-full ">
      <div className="mx-auto bg-[#F9FAFB] flex justify-center py-10">
        <article class="flex items-center gap-10">
          <div>
            <p class="text-4xl  font-bold text-hitam-manja">1000</p>

            <p class="text-xs text-hitam-manja">Anggota Aktif</p>
          </div>

          <div>
            <p class="text-4xl font-bold text-hitam-manja">45 T</p>

            <p class="text-xs text-hitam-manja">Sampah Terkumpul</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Stat;
