import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
export default function Layout(props) {
  return (
    <React.Fragment>
      <div className="layout-wrap">
      <Navbar/>
					<div className="centra-margin">
				
	                {props.children}
					
      </div>
      <Footer/>
      </div>
    </React.Fragment>
  );
}
