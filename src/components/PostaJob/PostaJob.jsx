import React from "react";
import "./postajob.scss"

function PostJob() {
  return (
    <div className="postJobprof">
    <h1 className="hPost">Post a Job</h1>
<div className="myInputs1row">
  <div>
  <label>Job Category</label>
  <input placeholder="Your job category here"></input>
  </div>
  <div>
  <label>Full Address</label>
  <input placeholder="Adress"></input>
  </div>
</div>
<div className="myInputs1row">
<div>
  <label> Time</label>
  <input placeholder="from"></input>
  </div>
  <div>
  <label> to</label>
  <input placeholder="to"></input>
  </div>
</div>
<div className="myInputs1row">
<div>
  <label>Price </label>
  <input placeholder=""></input>
  </div>
  <div>
  <label> Location</label>
  <input placeholder="Adress"></input>
  </div>
</div>
<div className="myInputs1row">
<div>
  <label>Job Description</label>
  <input placeholder="Your job description"></input>
  </div>
  
</div>
<button>Post a Job</button>
</div>
    
  );
}
export default PostJob;
