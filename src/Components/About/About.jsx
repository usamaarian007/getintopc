import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Header from '../header';
import Navbar from '../Navbar';
import BBar from '../bottomBar';

export default function About() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div
        className="ml-20 mr-24 mt-4 flex flex-wrap"
        style={{ height: "auto", width: "90vw", backgroundColor: "#FFFFFF" }}
      >
        <div className="p-4" style={{ width: "60vw" }}>
          <h1 className="text-4xl font-semibold">About</h1>
          <p className="pt-4 text-sm font-light">
            GetintoPC is aimed to provide those software which users want to
            have. The main goal is to provide direct downloading link without
            any wait so that users can enjoy unlimited downloads.
          </p>
          <p className="pt-3 text-sm font-light">
            You can request us about software,game,application etc and we’ll
            upload it here as soon as we can.
          </p>
          <p className="pt-3 text-sm font-light">Cheers,</p>
          <p className="pt-3 text-sm font-light">GetintoPC Team</p>
        </div>
        <div>
          <Sidebar></Sidebar>
        </div>
        <div style={{width: '100vw'}}>
        <BBar></BBar>
        </div>
      </div>
    </>
  );
}
