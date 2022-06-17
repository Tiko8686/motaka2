import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./profile.css";
import { Button, Box, Slider } from "@material-ui/core";
import AvatarEditor from "react-avatar-editor";
import Profmenu from "../profileMenu.jsx/profmenu";
import PostJob from "../PostaJob/PostaJob";

function Profile() {
  return (
    <div className="profContainer">
      
      <div className="postjob1">
      <Profmenu></Profmenu>
        <PostJob></PostJob>
      </div>
    </div>
  );
}
export default Profile;
