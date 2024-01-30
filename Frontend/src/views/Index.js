
import React from "react";


import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Middle from "./examples/Middle";
import UtilisationAppli from "./examples/UtilisationAppli";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="">
        <UtilisationAppli />
        <div></div>
        <div></div>
        <Middle />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
