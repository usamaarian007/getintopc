import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../header";
import Navbar from "../Navbar";
import BBar from "../bottomBar";
import dummyData from "../dummyData";

export default function Mission() {
  {
    return (
      <>
        <Header></Header>
        <Navbar></Navbar>
        <div
          className="ml-20 mr-24 mt-4 flex flex-wrap"
          style={{
            height: "auto",
            width: "90vw",
            backgroundColor: "#FFFFFF",
          }}
        >
          {dummyData?.mission?.map(({missi}) => {
            console.log(dummyData, "hhh");
            return (
              <div className="p-4" style={{ width: "64vw" }}>
                <h1 className="text-4xl font-semibold">{missi.p1}</h1>
                <p className="pt-4 text-sm font-light"> 
                </p>
                <p className="pt-3 text-sm font-light">
                   
                </p>
                <p className="pt-3 text-sm font-light">
                   
                </p>
                <p className="pt-3 text-sm font-light">
                  
                </p>
                <p className="pt-3 text-sm font-light">
                  
                </p>
                <p className="pt-3 text-sm font-light">
                   
                </p>
                <p className="pt-8 text-sm font-light">
                   
                </p>
                <p
                  className="pt-5 text-xl font-bold text-red-600
"
                >
                   
                </p>
              </div>
            );
          })}
          <div>
            <Sidebar></Sidebar>
          </div>
          <div style={{ width: "100vw" }}>
            <BBar></BBar>
          </div>
        </div>
        ;
      </>
    );
  }
}
