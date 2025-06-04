import React from 'react'
import { items } from '../../assets/assets'

const Banner = () => {
  return (
    <div>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((item) => (
                <li key={item._id}>
                  <a href="#" className="group block overflow-hidden">
                    <img
                      src={item.foto}
                      alt={item.nama || "Hadiah"}
                      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative bg-white pt-3">
                      <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                        {item.nama}
                      </h3>

                      <p className="mt-2">
                        <span className="sr-only"> Poin </span>
                        <span className="tracking-wider font-medium text-gray-900">
                          {item.poin} Poin
                        </span>
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
    </div>
  )
}

export default Banner
