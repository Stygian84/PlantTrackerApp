// Not Used
import React, { useState, useEffect } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";

function SettingsTop() {
  const navigate = useNavigate();
  return (
    <div id="top" className="top">
      <div className="img-container" onClick={() => navigate(-1)}>
        <img src={require("../images/arrow.png")} alt=""></img>
      </div>
      <p className="top-title">Settings not developed yet - TODO </p>
    </div>
  );
}
function SettingsContent() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();
  return (
    <div id="content" className="content">
      {/* Header Section */}
      <div id="header-container">
        <div id="morning">
          <p style={{ fontSize: "3vh" }}>Settings,</p>
          <p style={{ fontSize: "2.5vh" }}>Nicholas!</p>
        </div>
        <div id="weather-container">
          <p style={{ fontSize: "2vh" }}>Singapore</p>
          <p>Thursday 9am</p>
          <p>Mostly Cloudy</p>
          <p style={{ fontWeight: "bold" }}>28 °C</p>
        </div>
      </div>

      {/* Box Feature Section */}
      <div id="feature-container">
        <div className="feature-item" id="feature1" onClick={() => navigate("/row", { state: { prev: "Status" } })}>
          {!imageLoaded && (
            <Skeleton
              className="skeleton"
              variant="rounded"
              style={{ width: "30vw", height: "10vh", marginTop: "2vh" }}
            />
          )}
          <img src={require("../images/greenstatus.png")} alt="Status" onLoad={() => setImageLoaded(true)} />
          <img
            src={require("../images/whitestatus.png")}
            className="new-image"
            alt="Status"
            onLoad={() => setImageLoaded(true)}
          />

          <p style={{ color: "#8FA586" }}>Status</p>
        </div>
        <div className="feature-item" style={{ marginRight: "15%" }} id="feature2">
          <img src={require("../images/camera.png")} alt="Camera"></img>
          <img src={require("../images/whitecamera.png")} className="new-image" alt="Status"></img>
          <p style={{ color: "#8793AE" }}> Camera</p>
        </div>
        <div className="feature-item" id="feature3">
          <img src={require("../images/settings.png")} alt="Settings"></img>
          <img src={require("../images/whitesettings.png")} className="new-image" alt="Status"></img>
          <p style={{ color: "#7A9E95" }}>Settings</p>
        </div>
        <div></div>
      </div>
      <div id="recent-header">
        <p style={{ fontWeight: "bold" }}>Recent</p>
      </div>

      {/* Recent item Section */}
      <div id="recent-container">
        <div className="recent-item">
          <img src={require("../images/greystatus.png")} alt="Status"></img>
          <div className="row-status">
            <p style={{ fontSize: "2vh", color: "#737373", fontWeight: "500" }}>Row 2</p>
            <p style={{ fontSize: "1vh", color: "#A5A5A5", fontWeight: "500" }}>Status</p>
          </div>
          <p
            style={{
              marginLeft: "auto",
              marginTop: "0",
              marginBottom: "0",
              paddingRight: "2%",
              fontSize: "3.5vh",
            }}
          >
            &gt;
          </p>
        </div>

        <div className="recent-item">
          <img src={require("../images/greystatus.png")} alt="Status"></img>
          <div className="row-status">
            <p style={{ fontSize: "2vh", color: "#737373", fontWeight: "500" }}>Row 5</p>
            <p style={{ fontSize: "1vh", color: "#A5A5A5", fontWeight: "500" }}>Status</p>
          </div>
          <p
            style={{
              marginLeft: "auto",
              marginTop: "0",
              marginBottom: "0",
              paddingRight: "2%",
              fontSize: "3.5vh",
            }}
          >
            &gt;
          </p>
        </div>

        <div className="recent-item">
          <img src={require("../images/greycamera.png")} alt="Camera"></img>
          <div className="row-status">
            <p style={{ fontSize: "2vh", color: "#737373", fontWeight: "500" }}>Row 2</p>
            <p style={{ fontSize: "1vh", color: "#A5A5A5", fontWeight: "500" }}>Camera</p>
          </div>
          <p
            style={{
              marginLeft: "auto",
              marginTop: "0",
              marginBottom: "0",
              paddingRight: "2%",
              fontSize: "3.5vh",
            }}
          >
            &gt;
          </p>
        </div>
      </div>
    </div>
  );
}
export { SettingsContent, SettingsTop };
