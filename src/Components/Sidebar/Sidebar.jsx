import React from 'react'
import lock from "../../../src/lock.webp";
import support from "../../../src/support.webp";
import twitter from "../../../src/twitter.webp";
import subscribe from "../../../src/subscribe.webp";
import subscribe2 from "../../../src/subscribe2.webp";
import submit from "../../../src/submit.webp"

export default function Sidebar() {
  return (
    <>
       
        <div class="pt-6 flex justify-center">
          <div class="mb-3  xl:w-68">
            <div class="input-group relative flex w-full mb-4">
              <input
                type="search"
                class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-gray-300 focus:outline-none"
                placeholder="Search Website"
                aria-label="Search"
                aria-describedby="button-addon3"
              />
              <button
                class="btn w-10 inline-block pl-1 py-2 border-2 border-lime-500 text-zinc-100 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                type="button"
                id="button-addon3"
                style={{ backgroundColor: "#ACC21F" }}
              >
                GO
              </button>
            </div>
          </div>
        </div>
        <div className=" mx-6 mb-8" style={{ height: "17vh", width: "auto" }}>
          <img src={support} />
        </div>
        <div
          className=" mt-4 font-bold text-zinc-100 pt-1 pl-2 pb-3 m-1 "
          style={{ width: "auto", backgroundColor: "#ACC21F" }}
        >
          UNBLOCK WEBSITES / GAMES / APPS <br /> WITH OUR HIGH SPEED VPN
        </div>
        <div>
          <img className="mt-8 " src={lock} height={"100%"} width={"100%"} />
        </div>
        <div
          className=" h-8 mt-4 font-bold text-zinc-100 pt-1 pl-2 pb-3 m-1 "
          style={{ width: "auto", backgroundColor: "#ACC21F" }}
        >
          FOLLOW US
        </div>
        <div className="flex px-24 py-4 py-6 space-x-0.5 ">
          <img src={twitter} />
          <img src={subscribe} />
        </div>
        <div
          className=" h-8 mt-4 font-bold text-zinc-100 pt-1 pl-2 pb-3 m-1 "
          style={{ width: "auto", backgroundColor: "#ACC21F" }}
        >
          NEVER MISS COOL SOFTWARE
        </div>
        <div className="px-10 space-y-1 py-6">
          <img src={subscribe2} />
          <img src={submit} />
        </div> 
    </>
  );
}
