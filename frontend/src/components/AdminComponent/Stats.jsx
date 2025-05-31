import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContex';

const Stats = () => {
  const { token, dashData, getDashData } = useContext(AppContext);

  useEffect(() => {
    if (token) {
      getDashData();
    }
  }, [token]);

  return (
    <div>
      <section className="flex flex-wrap gap-4 md:gap-6 text-gray-700 text-xs font-semibold">
        <div className="flex items-center gap-2 bg-[#f9f9fc] rounded-lg px-4 py-3 min-w-[90px]">
          <i className="fas fa-recycle text-green-600 text-base"></i>
          <div>
            <div className="text-gray-900 text-sm font-semibold leading-none">
              {dashData?.sampah ?? 0}
            </div>
            <div>Penukaran</div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-[#f9f9fc] rounded-lg px-4 py-3 min-w-[90px]">
          <i className="fas fa-users text-yellow-500 text-base"></i>
          <div>
            <div className="text-gray-900 text-sm font-semibold leading-none">
              {dashData?.user ?? 0}
            </div>
            <div>Pengguna</div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-[#f9f9fc] rounded-lg px-4 py-3 min-w-[90px]">
          <i className="fas fa-newspaper text-purple-600 text-base"></i>
          <div>
            <div className="text-gray-900 text-sm font-semibold leading-none">
              {dashData?.artikel ?? 0}
            </div>
            <div>Artikel</div>
          </div>
        </div>
        <button
          className="flex items-center gap-2 bg-[#f9f9fc] rounded-lg px-4 py-3 min-w-[90px] text-gray-400 cursor-not-allowed"
          disabled
        >
          <i className="fas fa-plus text-sm"></i>
          <span>Add widget</span>
        </button>
      </section>
    </div>
  );
};

export default Stats;
