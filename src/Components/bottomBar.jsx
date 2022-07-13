import React from "react";
import { useNavigate } from "react-router-dom";

export default function BBar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-slate-100  " style={{ width: "auto" }}>
        <button
          className=" pt-1 font-semibold w-24 pb-2 text-xs text-gray-600
          hover:bg-white focus:border-blue-400 border-gray-600 pl-6"
          onClick={() => navigate("/Mission")}
        >
          Mission
        </button>
        <button
          className=" pt-1 font-semibold text-xs pl-4 pr-4 text-gray-600 hover:bg-white border-gray-600 "
          onClick={() => navigate("/About")}
        >
          About
        </button>
        <button
          className=" pt-1 font-semibold pl-4 text-xs pr-4 text-gray-600 hover:bg-white border-gray-600"
          onClick={() => navigate("/Contact")}
        >
          Contact Us
        </button>
        <button
          className=" pt-1 font-semibold text-xs pl-4 pr-4 text-gray-600 hover:bg-white border-gray-600"
          onClick={() => navigate("/Privacy")}
        >
          Privacy Policy
        </button>
        <button className="pt-1 font-semibold text-xs pl-4 pr-4 text-gray-600 hover:bg-white border-gray-600">
          Sitemap
        </button>
        <button
          className="pt-1 font-semibold text-xs pl-4 pr-4 text-gray-600 hover:bg-white border-gray-600"
          onClick={() => navigate("/Report")}
        >
          Report & Abuse File
        </button>
        <button
          className="pt-1 font-semibold text-xs pl-4 pr-4 text-gray-600 hover:bg-white border-gray-600"
          onClick={() => navigate("/DMCA")}
        >
          DMCA
        </button>
        <button
          className=" pt-1 font-semibold text-xs pl-4 pr-4 text-gray-600 hover:bg-white border-gray-600"
          onClick={() => navigate("/Advertise")}
        >
          Advertise
        </button>
        <button
          className=" pt-1 font-semibold text-xs pl-4 pr-4 text-gray-600 hover:bg-white border-gray-600"
          onClick={() => navigate("/Donate")}
        >
          Donate
        </button>
      </div>
      <div className="bg-gray-300 h-12 pb-10 text-xs text-center pt-4">
        Copyright 2013-2021 GetIntoPC.com All Rights Reserved.
      </div>
    </>
  );
}
