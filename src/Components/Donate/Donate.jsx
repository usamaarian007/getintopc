import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../header";
import Navbar from "../Navbar";
import BBar from "../bottomBar";
import paypal from "../../../src/paypal.webp";

export default function Donate() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div
        className="ml-20 mr-24 mt-4 flex flex-wrap"
        style={{ height: "auto", width: "90vw", backgroundColor: "#FFFFFF" }}
      >
        <div className="p-4" style={{ width: "60vw" }}>
          <h1 className="text-4xl font-semibold">Donate</h1>
          <p className="pt-4 text-sm font-light">Dear Fans,</p>
          <p className="py-8 text-sm font-light">
            You know we upload Full Software Setup in a single direct link from
            our servers. Even if the Setup size is 50 GB. This is not an easy
            task as it sounds. Because when thousands of users start downloading
            these large files, we have to add more servers to handle the
            bandwidth. Therefore we have to pay huge rent on a monthly basis to
            keep these servers up and running.
          </p>
          <p className="pb-8 text-sm font-light">
            Secondly, we hate to give any third party free file sharing links
            because they can be dead sooner or later. Although they are free, we
            don’t use them. Because after six months or so, all free links can
            be dead. Same is the case with torrents which can become dead
            eventually and there are no seeders.
          </p>
          <p className="pb-8 text-sm font-light">
            That is why we decided to take the hit on our own and rented servers
            for you. So that you can download unlimited files with a single
            direct link. But with the growing file sizes, this is getting hard
            for us, because we have to rent more and more servers to handle the
            bandwidth. I would also like to add that we spend huge time testing
            software before uploading. So that you may not face any problems.
          </p>
          <p className="text-sm font-light">
            So now we need your support. This will help us to pay the monthly
            rent of our servers. You can pay as less as $1. Because every penny
            counts. Please pay as much as you can and show your love 🙂
          </p>
          <p className="pt-3 text-2xl font-light">Donate via Paypal:-</p>
          <p className="pt-8 text-sm font-light">
            Below is our PayPal donation address. Please click below and you’ll
            land on official Paypal website for payment. You can enter any
            amount you like.
          </p>

          <img className="px-60 " src={paypal} />
          <p className="pt-3 text-2xl font-light">Donate via Bitcoins:-</p>
          <p className="pt-8 text-sm font-light">
            You can also send us cryptocurrency like Bitcoin.
          </p>
          <p className="pt-8 text-lg font-medium	">
            Bitcoin Wallet Address:{" "}
            <span className="text-lg font-medium break-all text-sky-700">
              bc1qruulrx4d68ke5eeer7qjkjhsewj89skvl3kqg4
            </span>
          </p>
          <p className="pt-12 text-sm font-light">
            If you need some other currency’s wallet, feel free to contact us.
          </p>
          <p className="pt-4 text-sm font-light">
            After Payment please send an email at below address.
          </p>
          <p className="text-xl font-semibold py-6 flex-wrap text-center ">
            contact@getintopc.com
          </p>
          <p className="text-md pb-24 font-semibold text-lime-700	underline underline-offset-4 flex-wrap text-center ">
            List of all the donations we received
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
