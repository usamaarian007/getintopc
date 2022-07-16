import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../header";
import Navbar from "../Navbar";
import BBar from "../bottomBar";

export default function Privacy() {
  const data = [
    {
      p1: "This Privacy Policy governs the manner in which Get into PC collects, uses, maintains and discloses information collected from users (each, a “User”) of the www.getintopc.com website (“Site”). This privacy policy applies to the Site and all products and services offered by Get into PC.",
      p2: " Personal identification information",
      p3: "Everyone has right to Download Working Software without any hassle.",
      p4: "We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, subscribe to the newsletter, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.",
      p5: "Non-personal identification information",
      p6: "We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers utilized and other similar information.",
      p7: "Web browser cookies",
      p8: "Our Site may use “cookies” to enhance User experience. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.",
      p9: "How we use collected information",
      p10: "Get into PC may collect and use Users personal information for the following purposes: <br /> – To improve customer service Information you provide helps us respond to your customer service requests and support needs more efficiently. – To personalize user experience We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site. – To improve our Site We may use feedback you provide to improve our products and services. – To send periodic emails We may use the email address to respond to their inquiries, questions, and/or other requests.",
      p11: "How we protect your information",
      p12: "We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site. <br /> Our Site is in compliance with PCI vulnerability standards in order to create as secure of an environment as possible for Users.",
      p13: "            Sharing your personal information",
      p14: "We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.We may use third party service providers to help us operate our business and the Site or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given us your permission.",
      p15: "Advertising",
      p16: "Ads appearing on our site may be delivered to Users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile non personal identification information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This privacy policy does not cover the use of cookies by any advertisers.",
      p17: "Google Adsense",
      p18: "Some of the ads may be served by Google. Google’s use of the DART cookie enables it to serve ads to Users based on their visit to our Site and other sites on the Internet. DART uses “non personally identifiable information” and does NOT track personal information about you, such as your name, email address, physical address, etc. You may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy atÂ http://www.google.com/privacy_ads.html",
      p19: "Changes to this privacy policy",
      p20: "Get into PC has the discretion to update this privacy policy at any time. When we do, we will post a notification on the main page of our Site, revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.",
      p21: "Your acceptance of these terms",
      p22: "By using this Site, you signify your acceptance of this policy. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.",
      p23: "Contacting us",
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
          <h1 className="text-4xl font-semibold">Privacy Policy</h1>
          {data?.map((item, index) => {
            return (
              <div>
                <p className="pt-4 text-sm font-light">{item.p1}</p>
                <p className="pt-3 text-sm font-semibold">{item.p2}</p>
                <p className="pt-3 text-sm font-light">{item.p3}</p>
                <p className="pt-3 text-sm font-light">{item.p4}</p>
                <p className="pt-3 text-sm font-semibold">{item.p5}</p>
                <p className="pt-3 text-sm font-light">{item.p6}</p>
                <p className="pt-3 text-sm font-semibold">{item.p7}</p>
                <p
                  className="pt-3 text-sm font-light
"
                >
                  {item.p8}
                </p>
                <p
                  className="pt-3 text-sm font-semibold
"
                >
                  {item.p9}
                </p>
                <p
                  className="pt-3 text-sm font-light
"
                >
                  {item.p10}
                  <p
                    className="pt-3 text-sm font-semibold
"
                  >
                    {item.p11}
                  </p>
                </p>
                <p
                  className="pt-3 text-sm font-light
"
                >
                  {item.p12}
                </p>
                <p
                  className="pt-3 text-sm font-semibold
"
                >
                  {item.p13}
                </p>
                <p
                  className="pt-3 text-sm font-light
"
                >
                  {item.p14}
                </p>
                <p
                  className="pt-3 text-sm font-semibold
"
                >
                  {item.p15}
                </p>
                <p
                  className="pt-3 text-sm font-light
"
                >
                  {item.p16}
                </p>
                <p
                  className="pt-3 text-sm font-semibold
"
                >
                  {item.p17}
                </p>
                <p
                  className="pt-3 text-sm font-light
"
                >
                  {item.p18}
                </p>
                <p
                  className="pt-3 text-sm font-semibold
"
                >
                  {item.p19}
                </p>
                <p
                  className="pt-3 text-sm font-light
"
                >
                  {item.p20}
                </p>
                <p
                  className="pt-3 text-sm font-semibold
"
                >
                  {item.p21}
                </p>
                <p
                  className="pt-3 text-sm font-light
"
                >
                  {item.p22}
                </p>
                <p
                  className="pt-3 text-sm font-semibold
"
                >
                  {item.p23}
                </p>
              </div>
            );
          })}
          <p
            className="pt-3 text-sm font-light
"
          >
            If you have any questions about this Privacy Policy, the practices
            of this site, or your dealings with this site, please contact us at:
            <br /> <br /> Get into PC <br />
            <br />
            contact@getintopc.com <br /> <br />
            This document was last updated on February 02, 2013
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
