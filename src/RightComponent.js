import React from "react";
import "./Rightcss.css";
import WindowIcon from "@mui/icons-material/Window";
import Code from "@mui/icons-material/Code";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DescriptionIcon from "@mui/icons-material/Description";

const RightComponent = () => {
  return (
    <>
      <div className="rightComp">
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexDirection: "column",
          }}
        >
          <div className="homebtn">
            <p className="homeLabel">Home</p>
            <WindowIcon className="rightbtn" />
          </div>
          <div className="abot">
            <p className="abotlabel">about</p>
            <Code className="rightbtn" />
          </div>

          <div className="projects">
            <p className="projectslabel">projects</p>
            <BusinessCenterIcon className="rightbtn" />
          </div>
          <div className="contact">
            <p className="contactlabel">services</p>
            <AutoStoriesIcon className="rightbtn" />
          </div>
        </div>
      </div>
    </>
  );
};
export default RightComponent;
