import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContex'
import { useNavigate } from 'react-router-dom';

const ArtikelList = () => {
  const { artikel, formatTanggal } = useContext(AppContext);
  const navigate = useNavigate()


  return (
    <div className="w-full max-w-6xl m-5">
      <p className="mb-3 text-lg font-medium text-gray-800">
        Semua Artikel
      </p>

      <section className="pb-8 pt-16">
        <div className="container">
          <p className="mb-4 text-2xl font-bold text-ink">Artikel</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {artikel.map((item, index) => (
              <div
                onClick={()=> navigate(`/artikel-admin/${item._id}`)}
                href=""
                key={index}
                className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.foto}
                    alt={item.judul}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="mb-1 text-sm font-medium text-wolf flex justify-between">
                    <span className="text-orange">{item.sumber}</span>
                    <span className="text-gray-500">
                      {formatTanggal(item.tanggal)}
                    </span>
                  </p>
                  <p className="text-lg font-bold text-ink line-clamp-2">
                    {item.judul}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArtikelList

