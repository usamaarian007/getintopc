import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../header";
import Navbar from "../Navbar";
import BBar from "../bottomBar";
import paypal from "../../../src/paypal.webp";

export default function Donate() {
   const data = [
     {
       p1: "Dear Fans,",
       p2: "You know we upload Full Software Setup in a single direct link from our servers. Even if the Setup size is 50 GB. This is not an easy task as it sounds. Because when thousands of users start downloading these large files, we have to add more servers to handle the bandwidth. Therefore we have to pay huge rent on a monthly basis to keep these servers up and running.",
       p3: " Secondly, we hate to give any third party free file sharing links because they can be dead sooner or later. Although they are free, we don’t use them. Because after six months or so, all free links can be dead. Same is the case with torrents which can become dead eventually and there are no seeders.",
       p4: "That is why we decided to take the hit on our own and rented servers for you. So that you can download unlimited files with a single direct link. But with the growing file sizes, this is getting hard for us, because we have to rent more and more servers to handle the bandwidth. I would also like to add that we spend huge time testing software before uploading. So that you may not face any problems.",
       p5: "So now we need your support. This will help us to pay the monthly rent of our servers. You can pay as less as $1. Because every penny counts. Please pay as much as you can and show your love 🙂",
       p6: "Donate via Paypal:-",
       p7: "Below is our PayPal donation address. Please click below and you’ll land on official Paypal website for payment. You can enter any amount you like.",
       p8: "Donate via Bitcoins:-",
       p9: "You can also send us cryptocurrency like Bitcoin.",
       p10: "Bitcoin Wallet Address:",
       p11: " bc1qruulrx4d68ke5eeer7qjkjhsewj89skvl3kqg4",
       p12: "If you need some other currency’s wallet, feel free to contact us.",
       p13: "After Payment please send an email at below address.",
       p14: "contact@getintopc.com",
       p15: "List of all the donations we received",
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
          <h1 className="text-4xl font-semibold">Donate</h1>
          {data?.map((item, index) => {
            return (
              <div>
                <p className="pt-4 text-sm font-light">{item.p1}</p>
                <p className="py-8 text-sm font-light">{item.p2}</p>
                <p className="pb-8 text-sm font-light">{item.p3}</p>
                <p className="pb-8 text-sm font-light">{item.p4}</p>
                <p className="text-sm font-light">{item.p5}</p>
                <p className="pt-3 text-2xl font-light">{item.p6}</p>
                <p className="pt-8 text-sm font-light">{item.p7}</p>

                <img className="px-60 " src={paypal} />
                <p className="pt-3 text-2xl font-light">{item.p8}</p>
                <p className="pt-8 text-sm font-light">{item.p9}</p>
                <p className="pt-8 text-lg font-medium	">
                  {item.p10}
                  <span className="text-lg font-medium break-all text-sky-700">
                    {item.p11}
                  </span>
                </p>
                <p className="pt-12 text-sm font-light">{item.p12}</p>
                <p className="pt-4 text-sm font-light">{item.p13}</p>
                <p className="text-xl font-semibold py-6 flex-wrap text-center ">
                  {item.p14}
                </p>
                <p className="text-md pb-24 font-semibold text-lime-700	underline underline-offset-4 flex-wrap text-center ">
                  {item.p15}
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
