import React from "react";
import LeftComponent from "./LeftComponent";
import CenterComponent from "./CenterComponent";
import RightComponent from "./RightComponent";
const Home = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "#242631",
          padding: "30px 130px 0px 130px",
        }}
      >
        <div style={{ flex: 2, margin: 5 }}>
          <LeftComponent />
        </div>
        <div style={{ flex: 8, margin: 5 }}>
          <CenterComponent />
        </div>
        <div style={{ flex: 2, margin: 5 }}>
          <RightComponent />
        </div>
      </div>
    </>
  );
};
export default Home;
