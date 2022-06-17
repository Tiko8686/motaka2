import React from "react";
import Fl from "../image/Fl.jpg";
import PostJob from "../PostaJob/PostaJob";

import ImageAvatars from "../PostaJob/PostaJob";
import "./profmenu.scss";
function Profmenu() {
  return (<div className="profflex">
    <div className="profContainer">
      <div className="imgWork"></div>
      <div className="div1">
        Sam Wiliams
        <div className="div2">UI/UX designer</div>{" "}
      </div>
      <div className="div3"> My Profile</div>
      <div className="div3">Post a Job</div>
      <div className="div3">Order History</div>
      <div className="div3">My Wallet</div>
      <div className="div3">Rating Review</div>
      <div className="div3">Verify Account</div>
      
    </div>
    <div className="postjobprof"> 
    <PostJob></PostJob>
    </div>
    </div>
  );
}
export default Profmenu;
