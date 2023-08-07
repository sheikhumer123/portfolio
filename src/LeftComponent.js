import React from "react";
import logo from "./logo.jpg";
import "./LeftCss.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Divider from "@mui/material/Divider";
import LinearProgress from "@mui/material/LinearProgress";
import { Box, Typography } from "@mui/material";

const LeftComponent = () => {
  function LinearProgressWithLabel(props) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginLeft: 1,
          marginTop: -1,
        }}
      >
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            color={"secondary"}
            variant="determinate"
            {...props}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography
            sx={{ color: "rgb(144, 145, 148)", fontSize: 13 }}
            variant="body2"
            color="text.secondary"
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }

  const details = [
    {
      key: "Email",
      val: "umerjaved3333@gmail.com",
    },
    {
      key: "Phone",
      val: "+923225522460",
    },
    {
      key: "Residense",
      val: "Millat Town Faisalabad",
    },
    {
      key: "City",
      val: "Faisalabad",
    },
    {
      key: "Age",
      val: "23 Years",
    },
    {
      key: "Freelance",
      val: "Available",
    },
    {
      key: "Language",
      val: "English, Urdu",
    },
  ];
  const skills = [
    {
      title: "BootStrap",
      progress: 90,
    },
    {
      title: "Javascript",
      progress: 70,
    },
    {
      title: "React",
      progress: 70,
    },
    {
      title: "React Native",
      progress: 75,
    },
    {
      title: "React Admin",
      progress: 50,
    },
    {
      title: "Firebase",
      progress: 60,
    },
    {
      title: "Node",
      progress: 50,
    },
  ];
  return (
    <>
      <div
        style={{
          backgroundColor: "#282A36",
          borderRadius: 10,
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 5px 0px 5px",
          position: "fixed",
          width: 290,
          left: 70,
        }}
      >
        <img
          style={{ height: 100, width: 100, borderRadius: 50 }}
          src={logo}
          alt="Logo"
        />

        <p style={{ color: "white" }}>Umer Javed</p>
        <p className="lNtag">React Devoloper</p>
        <div>
          <YouTubeIcon className="social" sx={{ fontSize: 20 }} />
          <FacebookIcon className="social" sx={{ fontSize: 20 }} />
          <InstagramIcon className="social" sx={{ fontSize: 20 }} />
          <LinkedInIcon className="social" sx={{ fontSize: 20 }} />
          <TwitterIcon className="social" sx={{ fontSize: 20 }} />
        </div>
        {details.map((dl, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              marginTop: -9,
            }}
          >
            <p style={{ color: "white", fontSize: 13, paddingLeft: 10 }}>
              {dl.key}
            </p>
            <p
              style={{
                color: "rgb(144, 145, 148)",
                fontSize: 13,
                paddingRight: 15,
              }}
            >
              {dl.val}
            </p>
          </div>
        ))}
        <Divider variant="middle" sx={{ backgroundColor: "#3D3F49" }} />

        <div style={{ width: "100%", paddingBottom: 10 }}>
          <p style={{ textAlign: "start", color: "white", paddingLeft: 10 }}>
            Major Skill
          </p>
          {skills.map((sl, index) => (
            <div key={index}>
              <p style={{ fontSize: 13, color: "white", marginLeft: 10 }}>
                {sl.title}
              </p>
              <LinearProgressWithLabel value={sl.progress} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default LeftComponent;
