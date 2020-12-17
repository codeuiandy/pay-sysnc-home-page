import React from "react";
import paysyncLogo from '../../assets/Group 22290.svg';

export default function footer() {
  return <div className="footer">
    <div className="footer=left">
      <img src={paysyncLogo} alt="" className="footer-logo"/>
      <div className="footer-msg">
        We believe that the option of employees' accessing their earned salary on a daily basis is the first step on the road to prosperity
      </div>
      <div className="learn-more">Learn more</div>
      
    </div>
  </div>;

}
