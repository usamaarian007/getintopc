import React from 'react'
import Sidebar from "../Sidebar/Sidebar";
import Header from "../header";
import Navbar from "../Navbar";
import BBar from "../bottomBar";


export default function Contact() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div
        className="ml-20 mr-24 mt-4 flex flex-wrap"
        style={{ height: "auto", width: "90vw", backgroundColor: "#FFFFFF" }}
      >
        <div className="p-4" style={{ width: "60vw" }}>
          <h1 className="text-4xl font-semibold">Contact Us</h1>
          <p className="pt-4 text-sm font-light">
            We welcome your feedback and suggestions. Please Send an email on
            below address.
          </p>
          <p className="text-xl font-semibold py-6 flex-wrap text-center ">
            contact@getintopc.com
          </p>
          <p className="pt-3 text-sm font-light">
            You can also comment below if you want to say something publicly.
          </p>
        </div>
        <div>
          <Sidebar></Sidebar>
        </div>
        <div style={{ width: "100vw" }}>
          <BBar></BBar>
        </div>
      </div>
    </>
  );
}
