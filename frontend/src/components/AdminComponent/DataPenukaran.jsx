import React from 'react'

const DataPenukaran = () => {
   
  return (
    <div className="flex-1 bg-[#f9f9fc] rounded-lg p-4">
          <h3 className="font-semibold text-gray-700 text-sm mb-3">Courses</h3>
          <div className="rounded-lg overflow-hidden shadow-md cursor-pointer">
            <img
              alt="Abstract gradient spheres in blue and purple colors representing Teaching Character and Creating Positive Classrooms course"
              className="w-full object-cover"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/67f7ac97-fc5c-4fa6-66bb-9714dc6db475.jpg"
              width="400"
            />
            <div className="p-3 bg-white">
              <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
                Teaching Character and Creating Positive Classrooms
              </h4>
              <div className="flex items-center gap-4 text-gray-400 text-xs select-none">
                <div className="flex items-center gap-1">
                  <i className="fas fa-clock text-xs"></i>
                  <span>4 weeks</span>
                </div>
                <div className="flex items-center gap-1">
                  <i className="fas fa-video text-xs"></i>
                  <span>30 hours</span>
                </div>
                <div className="flex items-center gap-1">
                  <i className="fas fa-tasks text-xs"></i>
                  <span>3 tasks</span>
                </div>
              </div>
            </div>
          </div>
        </div>  )
}

export default DataPenukaran
