import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContex';

const Stats = () => {
  const { token, dashData, getDashData } = useContext(AppContext);

  useEffect(() => {
    if (token) {
      getDashData();
    }
  }, [token]);

  const stats = [
    {
      title: 'Penukaran Sampah',
      value: dashData?.sampah ?? 0,
      icon: 'fas fa-recycle',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Pengguna',
      value: dashData?.user ?? 0,
      icon: 'fas fa-users',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      title: 'Artikel',
      value: dashData?.artikel ?? 0,
      icon: 'fas fa-newspaper',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Barang',
      value: dashData?.item ?? 0,
      icon: 'fas fa-newspaper',
      color: 'bg-red-100 text-purple-600'
    },
    {
      title: 'Penukaran Poin',
      value: dashData?.penukaranItem ?? 0,
      icon: 'fas fa-gift',
      color: 'bg-blue-100 text-blue-600'
    }
  ];

  return (
    <section className="flex sn:flex-wrap gap-5 mt-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`flex-1 min-w-[200px] shadow-lg rounded-xl p-6 flex items-center gap-4 transition-transform transform hover:scale-105 ${stat.color}`}
        >
          <div className={`text-3xl ${stat.color}`}>
            <i className={stat.icon}></i>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.title}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stats;
