import React from 'react'

const PendingPenukaran = () => {
     const pendingHomeworkData = [
      {
        id: 1,
        name: 'Alex Johnson',
        grade: '8th Grade',
        subject: 'Algebra',
        topic: 'Fractional Indices',
        score: '92%',
        type: 'Test',
        img: 'https://storage.googleapis.com/a1aa/image/f8ab2e8f-7569-450d-66e1-f96d27762839.jpg',
        alt: 'Profile picture of Alex Johnson, a man with light skin tone and short hair',
      },
      {
        id: 2,
        name: 'Monika Doki',
        grade: '5th Grade',
        subject: 'Geometry',
        topic: 'Graphical Method',
        score: '75%',
        type: 'Quiz',
        img: 'https://storage.googleapis.com/a1aa/image/b507ba67-9176-4aca-5a0d-ffac79eecc01.jpg',
        alt: 'Profile picture of Monika Doki, a woman with medium skin tone and long hair',
      },
      {
        id: 3,
        name: 'Olivia Williams',
        grade: '6th Grade',
        subject: 'Algebra',
        topic: 'Square roots',
        score: '65%',
        type: 'Quiz',
        img: 'https://storage.googleapis.com/a1aa/image/d811f35a-1f63-4b97-bd2f-2a1daaf724ba.jpg',
        alt: 'Profile picture of Olivia Williams, a woman with light skin tone and medium length hair',
      },
      {
        id: 4,
        name: 'James Davis',
        grade: '9th Grade',
        subject: 'Pre-Algebra',
        topic: 'Signed Integers',
        score: '83%',
        type: 'Project',
        img: 'https://storage.googleapis.com/a1aa/image/a743c50e-a0a4-4a1f-640e-7ef0068bb980.jpg',
        alt: 'Profile picture of James Davis, a man with medium skin tone and short hair',
      },
      {
        id: 5,
        name: 'James Davis',
        grade: '9th Grade',
        subject: 'Pre-Algebra',
        topic: 'Signed Integers',
        score: '83%',
        type: 'Project',
        img: 'https://storage.googleapis.com/a1aa/image/a743c50e-a0a4-4a1f-640e-7ef0068bb980.jpg',
        alt: 'Profile picture of James Davis, a man with medium skin tone and short hair',
      },
    ];
  return (
    <div>
      <section className="bg-[#f9f9fc] rounded-lg p-4 text-gray-700 text-xs">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-sm">Pending homework</h2>
            <button className="text-indigo-600 font-semibold hover:underline focus:outline-none">
              View all
            </button>
          </div>
          <ul className="flex flex-col gap-3">
            {pendingHomeworkData.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm select-none"
              >
                <img
                  alt={item.alt}
                  className="w-8 h-8 rounded-full object-cover"
                  height="32"
                  src={item.img}
                  width="32"
                />
                <div className="flex-1 grid grid-cols-[110px_110px_1fr_50px_50px] gap-2 items-center">
                  <span className="font-semibold text-gray-900 truncate">
                    {item.name}
                  </span>
                  <span>{item.grade}</span>
                  <span>{item.subject}</span>
                  <span>{item.topic}</span>
                  <span className="text-right font-semibold">{item.score}</span>
                  <button className="text-xs text-indigo-600 font-semibold border border-indigo-600 rounded px-2 py-0.5 hover:bg-indigo-50">
                    {item.type}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
    </div>
  )
}

export default PendingPenukaran
