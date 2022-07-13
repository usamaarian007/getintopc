import React from 'react'

export default function Navbar() {
  return (
    <>
      <div className=" mt-6 ml-20 mr-24 justify-start flex flex-wrap bg-slate-100" >
        <div className="border-r-2 pt-1 font-semibold w-24 pb-2 text-sm text-gray-600 hover:bg-white border-gray-600 pl-6">Home</div>
        <div className="border-r-2 pt-1 font-semibold text-sm pl-4 pr-4 text-gray-600 hover:bg-white border-gray-600 ">Software Categories</div>
        <div className="border-r-2 pt-1 font-semibold pl-4 text-sm pr-4 text-gray-600 hover:bg-white border-gray-600">Operating Systems</div>
        <div className="border-r-2 pt-1 font-semibold text-sm pl-4 pr-4 text-gray-600 hover:bg-white border-gray-600">3D CAD</div>
        <div className="border-r-2 pt-1 font-semibold text-sm pl-4 pr-4 text-gray-600 hover:bg-white border-gray-600">Graphic Design</div>
        <div className="border-r-2 pt-1 font-semibold text-sm pl-4 pr-4 text-gray-600 hover:bg-white border-gray-600">Multimedia</div>
        <div className="border-r-2 pt-1 font-semibold text-sm pl-4 pr-4 text-gray-600 hover:bg-white border-gray-600">Development</div>
        <div className="border-r-2 pt-1 font-semibold text-sm pl-4 pr-4 text-gray-600 hover:bg-white border-gray-600">Antivirus</div>
        <div className="border-r-2 pt-1 font-semibold text-sm pl-4 pr-4 text-gray-600 hover:bg-white border-gray-600">Education</div>
        <div className=" w-50 pl-4 font-semibold pt-1 text-sm text-gray-600 hover:bg-white border-gray-600">Tutorials</div>
      </div>
    </>
  );
}
