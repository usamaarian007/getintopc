import React from "react"; 
import Sidebar from "../Sidebar/Sidebar";
import Header from "../header";
import Navbar from "../Navbar";
import BBar from "../bottomBar";

export default function Mission() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div
        className="ml-20 mr-24 mt-4 flex flex-wrap"
        style={{ height: "auto", width: "auto", backgroundColor: "#FFFFFF" }}
      >
        <div className="p-4" style={{ width: "60vw" }}>
          <h1 className="text-4xl font-semibold">Mission</h1>
          <p className="pt-4 text-sm font-light">
            Do you get tired of finding 100% working softwares?
          </p>
          <p className="pt-3 text-sm font-light">
            {" "}
            We don’t like surveys, Popups and Login before downloads because it
            annoy visitors.
          </p>
          <p className="pt-3 text-sm font-light">
            Everyone has right to Download Working Software without any hassle.
          </p>
          <p className="pt-3 text-sm font-light">
            We believe the installer based setup harms your PC. They bring lots
            of toolbars and hidden malware. Like Today CNET, Softonic and Some
            other companies only give installer based setup. Which have lots of
            adverts.
          </p>
          <p className="pt-3 text-sm font-light">
            I think offline installer / Standalone Setup should be provided for
            every Software. So that people can Download the complete setup and
            install it offline.
          </p>
          <p className="pt-3 text-sm font-light">
            I also believe setup should be in one single file. Even if it is of
            20 GB. Because as a visitor I hate downloading in parts. I always
            prefer Single Link Direct Resumable Download.
          </p>
          <p className="pt-8 text-sm font-light">
            Well we spend huge time testing the working software and uploading
            them to our dedicated servers. So that you can Download offline
            installers in single direct link.
          </p>
          <p
            className="pt-5 text-xl font-bold text-red-600
"
          >
            If our site is useful to you, please consider white listing us in
            your Ad Blocker ( Choose option of “Disable on getintopc.com” in
            Ad-block options). Don’t worry we don’t show any popups & Poor Ads.
            Because we hate them too. 🙂 We only run Clean Google Ads.
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
