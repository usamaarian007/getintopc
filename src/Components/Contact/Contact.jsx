import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../header";
import Navbar from "../Navbar";
import BBar from "../bottomBar";
import { incNumber } from "../../actions/index";
import { decNumber } from "../../actions/index";
import { useSelector, useDispatch } from "react-redux";

export default function Contact() {
  const changeTheNumber = useSelector((state) => state.changeTheNumber);

  const dispatch = useDispatch();
  const data = [
    {
      p1: " We welcome your feedback and suggestions. Please Send an email on below address.",
      p2: "contact@getintopc.com",
      p3: " You can also comment below if you want to say something publicly.",
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
          <h1 className="text-4xl font-semibold">Contact Us</h1>
          {data?.map((item, index) => {
             return (
               <div>
                 <p className="pt-4 text-sm font-light">{item.p1}</p>
                 <p className="text-xl font-semibold py-6 flex-wrap text-center ">
                   {item.p2}
                 </p>
                 <p className="pt-3 text-sm font-light">{item.p3}</p>
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
      <div className="main-div">
        <div class="container">
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div class="quantity">
            <a
              class="quantity__minus"
              title="Decrement"
              onClick={() => dispatch(decNumber())}
            >
              <span>-</span>
            </a>
            <input
              name="quantity"
              type="text"
              class="quantity__input"
              value={changeTheNumber}
            />
            <a
              class="quantity__plus"
              title="Increment"
              onClick={() => dispatch(incNumber(1))}
            >
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
