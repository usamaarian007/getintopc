import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../header";
import Navbar from "../Navbar";
import BBar from "../bottomBar";

export default function Advertise() {
    const data = [
      {
        "p1": "GetIntoPC.com reaches to a huge audience – and they range from lay man to students to professionals to information seekers. We have daily newsletter subscribers too. Our site is estimated to reach every concerned person of software, games and PC Support Industry. Don’t hold up and advertise here.",
        "p2": "UNIQUE VISITORS PER MONTH: 6 MILLION",
        "p3": "IMPRESSIONS / PAGELOADS PER MONTH: 51 MILLION",
        "p4": " Advertiser Opportunities",
        "p5": "We offers proposition for advertisers that target the software, games, tutorials, telecom and IT industry. You can advertise with us on unique proposition.",
        "p6": "Convinced?",
        "p7": "You can advertise on our site using Google Adwords ONLY.",
        "p8": "Note",
        "p9": "We do not place Download button installer ads under post titles. Because this might impact our users experience. We were contacted many times by installer companies and they offered huge money. But we never placed installer ads because they install toolbars and adware in your PC. So please don’t contact us for Download button ads.",
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
          <h1 className="text-4xl font-semibold">Advertise</h1>
          <p className="pt-4 text-2xl font-semibold font-light">
            GetIntoPC Audience
          </p>
          
            {data?.map((item, index) => {
            return (
              <div>
                <p className="pt-3 text-sm font-light">{item.p1}</p>
                <p className="pt-3 text-base text-green-600 font-bold font-light">
                  {item.p2}
                </p>
                <p className="pt-2 text-base text-green-600 font-bold font-light">
                  {item.p3}
                </p>
                <p className="pt-4 text-2xl font-semibold font-light">
                  {item.p4}
                </p>
                <p className="pt-3 text-sm font-light">{item.p5}</p>
                <p className="pt-4 text-2xl font-semibold font-light">
                  {item.p6}
                </p>
                <p className="pt-3 text-sm font-light">{item.p7}</p>
                <p className="pt-4 text-2xl font-semibold text-red-600">
                  {item.p8}
                </p>
                <p className="pt-3 text-sm font-semibold text-red-600">
                  {item.p9}
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
