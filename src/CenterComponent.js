import React from "react";
import bg from "./bg.jpg";
import main from "./main.png";
import "./Center.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Code from "@mui/icons-material/Code";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Divider from "@mui/material/Divider";
import proj1 from "./proj1.jpg";
import proj2 from "./proj2.jpg";
import proj3 from "./proj3.png";
import proj4 from "./proj4.png";
import proj5 from "./proj5.jpg";

const CenterComponent = () => {
  const services = [
    {
      title: "Web Devolopment",
      skill1: "React",
      skill2: "Javascript",
      skill3: "React Admin",
    },
    {
      title: "Front-End-Devoloping",
      skill1: "Bootstrap 4",
      skill2: "Material UI",
      skill3: "React",
    },
    {
      title: "FireBase & Node Backend",
      skill1: "Firebase Functions",
      skill2: "Firebase Storage",
      skill3: "Node Backend",
    },
    {
      title: "React Native Devolopment",
      skill1: "React Native Libarary",
      skill2: "Devoloping for Both IOS and Andriod",
      skill3: "Performance Optimizing",
    },
  ];
  const Education = [
    {
      college: "The Educators",
      certificate: "Matric",
      about: "Javascript",
      date: "8/2013 7/2015",
    },
    {
      college: "Kips College",
      certificate: "Fsc, Pre-Engenering",
      about: "Javascript",
      date: "8/2015 7/2017",
    },
  ];
  const Experince = [
    {
      college: "MS Innovation",
      certificate: "Front-End-Devoloper",
      about:
        "I Started my Career in this firm as a Front-End-Devoloper, it give me amazing experience in this field and make quality UI of different Sites",
      date: "8/2018 7/2020",
    },
    {
      college: "FreeLancing",
      certificate: "React Devoloper",
      about:
        "After Learning About React in Market as Javascript Next Gen frameWork For UI Devoloping, then I Started Work as React Devoloper Create Some Amazing Sites Mentioned in my Portfolio ",
      date: "8/2020 7/2021",
    },
    {
      college: "FreeLancing",
      certificate: "React Native Devoloper",
      about:
        "I Also Worked As React Native Devoloper and I have 1 Year Experince of Making Apps in React Native I Have Done Some Projects Shown in Portfolio",
      date: "8/2021 7/2023",
    },
  ];
  const Portfolio = [
    {
      title: "Qunions Web",
      image: proj1,
    },
    {
      title: "Kineticthinking",
      image: proj2,
    },
    {
      title: "Qunions Mobile App",
      image: proj3,
    },
    {
      title: "Airbnb Clone",
      image: proj5,
    },
    {
      title: "Instagram Mobile App Clone",
      image: proj4,
    },
  ];
  return (
    <>
      <div
        style={{
          height: 400,
          backgroundImage: "url(" + bg + ")",
          display: "flex",
          padding: "50px 50px 0px 50px",
          justifyContent: "space-between",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div style={{ width: "50%" }}>
          <h1 style={{ color: "white", fontSize: 40 }}>
            I Design WebApps, Mobile Apps that delight and inspire people.
          </h1>
          <p style={{ color: "#A9A9A4" }}>
            I'm Umer, a Product Designer and Visual Developer from SF. My world
            revolves around React and React Native. Turning concepts into
            reality is my passion
          </p>
          <button className="Test">
            Let’s Talk
            <ArrowCircleRightIcon
              style={{
                fontSize: 40,
                position: "absolute",
                right: 5,
              }}
            />
          </button>
        </div>
        <div>
          <img style={{ width: 305 }} src={main} alt="Logo" />
        </div>
      </div>
      <div>
        <h1 style={{ textAlign: "center", color: "white", fontSize: 50 }}>
          My Services
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {services.map((sr, index) => (
            <div className="services" key={index}>
              <Code style={{ color: "white", fontSize: 30 }} />
              <h3 style={{ color: "white" }}>{sr.title}</h3>
              <div
                style={{
                  display: "flex",

                  alignItems: "center",
                }}
              >
                <ArrowForward
                  style={{
                    fontSize: 20,
                    color: "white",
                  }}
                />
                <p style={{ color: "#9E9FA1", marginLeft: 5 }}>{sr.skill1}</p>
              </div>
              <div
                style={{
                  display: "flex",

                  alignItems: "center",
                }}
              >
                <ArrowForward
                  style={{
                    fontSize: 20,
                    color: "white",
                  }}
                />
                <p style={{ color: "#9E9FA1", marginLeft: 5 }}>{sr.skill2}</p>
              </div>
              <div
                style={{
                  display: "flex",

                  alignItems: "center",
                }}
              >
                <ArrowForward
                  style={{
                    fontSize: 20,
                    color: "white",
                  }}
                />
                <p style={{ color: "#9E9FA1", marginLeft: 5 }}>{sr.skill3}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          marginBottom: 50,
          borderRadius: 20,
          padding: "10px 0px 30px 0px",
          marginTop: 20,
        }}
      >
        <h1 style={{ textAlign: "center", color: "white", fontSize: 50 }}>
          Education
        </h1>

        {Education.map((ed, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "rgb(40,42,54)",
              padding: "20px 0px",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <div style={{ flex: 4 }}>
                <div style={{ marginLeft: 25 }}>
                  <h4 style={{ color: "white" }}>{ed.college}</h4>
                  <div style={{ display: " flex" }}>
                    <p style={{ color: "white" }}>Student</p>
                    <p className="infoEd">{ed.date}</p>
                  </div>
                </div>
              </div>
              <div style={{ flex: 8 }}>
                <div style={{ marginLeft: 25, paddingRight: 80 }}>
                  <h4 style={{ color: "white" }}>{ed.certificate}</h4>

                  <p style={{ color: "#A9A9A4" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Amet dapibus nibh ut faucibus nunc, egestas id amet
                    porttitor. Pulvinar quisque sed amet, nulla nunc.
                  </p>
                </div>
              </div>
            </div>
            <Divider
              variant="middle"
              sx={{ backgroundColor: "#3D3F49", marginTop: 5 }}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          marginBottom: 50,
          borderRadius: 20,
          padding: "10px 0px 30px 0px",
          marginTop: 20,
        }}
      >
        <h1 style={{ textAlign: "center", color: "white", fontSize: 50 }}>
          Experience
        </h1>
        {/* <p style={{ textAlign: "center", color: "white" }}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p> */}
        {Experince.map((ed, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "rgb(40,42,54)",
              padding: "20px 0px",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <div style={{ flex: 4 }}>
                <div style={{ marginLeft: 25 }}>
                  <h4 style={{ color: "white" }}>{ed.college}</h4>
                  <div style={{ display: " flex" }}>
                    <p style={{ color: "white" }}>Student</p>
                    <p className="infoEd">{ed.date}</p>
                  </div>
                </div>
              </div>
              <div style={{ flex: 8 }}>
                <div style={{ marginLeft: 25, paddingRight: 80 }}>
                  <h4 style={{ color: "white" }}>{ed.certificate}</h4>

                  <p style={{ color: "#A9A9A4" }}>{ed.about}</p>
                </div>
              </div>
            </div>
            <Divider
              variant="middle"
              sx={{ backgroundColor: "#3D3F49", marginTop: 5 }}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          marginBottom: 50,
          borderRadius: 20,
          padding: "10px 0px 30px 0px",
          marginTop: 20,
        }}
      >
        <h1 style={{ textAlign: "center", color: "white", fontSize: 50 }}>
          Portfolio
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          {Portfolio.map((pf, index) => (
            <div
              key={index}
              style={{
                borderRadius: 20,
                borderWidth: 5,
                margin: 5,
              }}
            >
              <h2 style={{ textAlign: "center", color: "white" }}>
                {pf.title}
              </h2>
              <img
                style={{ width: 350, height: 350 }}
                src={pf.image}
                alt="proj1"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CenterComponent;
