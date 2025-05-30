import React from 'react'

const Stats = () => {
  return (
    <div>
      <section className="flex flex-wrap gap-4 md:gap-6 text-gray-700 text-xs font-semibold">
          <div className="flex items-center gap-2 bg-[#f9f9fc] rounded-lg px-4 py-3 min-w-[90px]">
            <i className="fas fa-graduation-cap text-indigo-600 text-base"></i>
            <div>
              <div className="text-gray-900 text-sm font-semibold leading-none">
                55
              </div>
              <div>total students</div>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-[#f9f9fc] rounded-lg px-4 py-3 min-w-[90px]">
            <i className="fas fa-bolt text-yellow-400 text-base"></i>
            <div>
              <div className="text-gray-900 text-sm font-semibold leading-none">
                40h
              </div>
              <div>Productivity</div>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-[#f9f9fc] rounded-lg px-4 py-3 min-w-[90px]">
            <i className="fas fa-play-circle text-purple-600 text-base"></i>
            <div>
              <div className="text-gray-900 text-sm font-semibold leading-none">
                4/10
              </div>
              <div>Completed courses</div>
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
  )
}

export default Stats
