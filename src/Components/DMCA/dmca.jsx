import React from 'react'
import Sidebar from "../Sidebar/Sidebar";
import Header from "../header";
import Navbar from "../Navbar";
import BBar from "../bottomBar";

export default function dmca() {
    const data = [
      {
        "p1": "Getintopc.com in compliance with 17 U.S.C. § 512 and the Digital Millennium Copyright Act (“DMCA”). It is our policy to respond to any infringement notices and take appropriate actions under the Digital Millennium Copyright Act (“DMCA”) and other applicable intellectual property laws.",
        "p2": "If your copyrighted material has been posted on Getintopc.com or if links to your copyrighted material are returned through our search engine and you want this material removed, you must provide a written communication that details the information listed in the following section. Please be aware that you will be liable for damages (including costs and attorneys’ fees) if you misrepresent information listed on our site that is infringing on your copyrights. We suggest that you first contact an attorney for legal assistance on this matter.",
        "p3": " The following elements must be included in your copyright infringement claim:",
        "p4": "1. Provide evidence of the authorized person to act on behalf of the owner of an exclusive right that is allegedly infringed.",
        "p5": "2. Provide sufficient contact information so that we may contact you. You must also include a valid email address.",
        "p6": "3. You must identify in sufficient detail the copyrighted work claimed to have been infringed and including at least one search term under which the material appears in Getintopc.com’ search results.",
        "p7": "4. A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.",
        "p8": "5. A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.",
        "p9": "6. Must be signed by the authorized person to act on behalf of the owner of an exclusive right that is allegedly being infringed.",
        "p10": "Send the written infringement notice to the following address and an email notification to below address.",
        "p11": "contact@getintopc.com",
        "p12": "Please allow 2-3 business days for an email response. Note that emailing your complaint to other parties such as our Internet Service Provider will not expedite your request and may result in a delayed response due the complaint not properly being filed.",
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
          <h1 className="text-4xl font-semibold">DMCA</h1>
          {data?.map((item, index) => {
            return (
              <div>
                <p className="pt-4 text-sm font-light">{item.p1}</p>
                <p className="pt-3 text-sm font-light">{item.p2}</p>
                <p className="pt-3 text-sm font-light">{item.p3}</p>
                <p className="pt-3 pl-2 text-sm font-light">{item.p4}</p>
                <p className="pt-3 pl-2 text-sm font-light">{item.p5}</p>
                <p className="pt-3 pl-2 text-sm font-light">{item.p6}</p>
                <p className="pt-3 pl-2 text-sm font-light">{item.p7}</p>
                <p className="pt-3 pl-2 text-sm font-light">{item.p8}</p>
                <p className="pt-3 pl-2 text-sm font-light">{item.p9}</p>
                <p className="pt-3 text-sm font-light">{item.p10}</p>
                <p className="text-xl font-semibold py-6 flex-wrap text-center ">{item.p11}</p>
                <p className="pt-3 text-sm font-light">{item.p12}</p>
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
