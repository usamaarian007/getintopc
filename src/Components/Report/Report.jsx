import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../header";
import Navbar from "../Navbar";
import BBar from "../bottomBar";

export default function Report() {
  const data = [
    {
      p1: "Large number of users upload Software (Official Trial and Demo) Daily on our site. So if you notice anything illegal. You should report us. We’ll take action against user and will Remove his/her file.",
      p2: "We want to make sure our site is in compliance with copyright rules. So if you notice any copyright infringement then do report us. We take your abuses seriously.",
      p3: "If you want to report DMCA breach then contact us on our DMCA Page along with all required documentation.",
      p4: "If you want to report a broken link then either comment below or send an email on below address.",
      p5: "report@getintopc.com",
    },
  ];
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div
        className="ml-20 mr-24 mt-4 flex flex-wrap"
        style={{ height: "auto", width: "90vw", backgroundColor: "#FFFFFF" }}
      >
        <div className="p-4" style={{ width: "64vw" }}>
          <h1 className="text-4xl font-semibold">Report & Abuse</h1>
          {data?.map((item, index) => {
            return (
              <div>
                <p className="pt-4 text-sm font-light">{item.p1}</p>

                <p className="pt-3 text-sm font-light">{item.p2}</p>
                <p className="pt-3 text-sm font-light">{item.p3}</p>
                <p className="pt-3 text-sm font-light">{item.p4}</p>
                <p className="text-xl font-semibold py-6 flex-wrap text-center ">
                  {item.p5}
                </p>
              </div>
            );
          })}
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
