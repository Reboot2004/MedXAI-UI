import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import IndexBody from "components/IndexBody";
// sections for this page

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Index() {
  // React.useEffect(() => {
  //   document.body.classList.add("index-page");
  //   document.documentElement.classList.remove("nav-open");
  //   // return function cleanup() {
  //   //   // document.body.classList.remove("index-page");
  //   //   // document.body.classList.remove("sidebar-collapse");
  //   // };
  // });
  return (
    <>
      <IndexNavbar />
      <ToastContainer />
      <div className="wrapper">
        <IndexHeader />
        <IndexBody />
        <DarkFooter />
        <div className="main"></div>
      </div>
    </>
  );
}

export default Index;
