import React from "react";
import styled from "styled-components";
import laptop from "../Assests/images/laptop.png";
import { NavLink } from "react-router-dom";
import Storebox from "../Component/storebox";
import { AppleStore, PlayStore, microsoftimg, toys } from "../Utils/images";
// import data from "../Data/Data"
// import { NavLink } from "react-bootstrap";
export default function download() {
  const Appstore = {
    src: AppleStore,
    play: "App Store",
    download: "Download On the",
  };
  const playstore = {
    src: PlayStore,
    download: "Download On the",
    play: "Play Store",
  };
  const microsoft = {
    src: microsoftimg,
    download: "Download On the",
    play: "Microsoft",
  };
  const Page1 = styled.section`
    .main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 80vh;
      /* width: 100vw; */
      background-color: rgb(25, 230, 140);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      img {
        width: 150px;
      }
      button {
        color: black;
        background-color: white;
        border-radius: 50px;
        border: none;
        padding: 0.8rem 1.5rem;
        font-weight: bold;
      }
    }
  `;
  const Page2 = styled.section`
    a {
      text-decoration: none;
    }
    h5 {
      text-decoration: none;
      /* margin-left: -8px; */
    }
  `;

  const Page3 = styled.section`
    background-color: #222326;
    color: white;
    img {
      width: 45%;
    }
    ul {
      &:nth-child(1) {
        color: red !important;
      }
    }
    li {
      margin: 23px;
    }
  `;
  return (
    <>
      <Page1>
        <div className="main">
          <img src={laptop} alt="" />
          <h1 className="mt-4 mb-4">Download Spotify </h1>
          <p className="mb-4">
            Play millions of songs and podcasts on your device.
          </p>
          <button>Download</button>
        </div>
      </Page1>
      <Page2>
        <div className="mid text-center p-5 m-5">
          <h2 className="mb-4 fw-bold">
            Bring your music to mobile and tablet, too.
          </h2>
          <p className="mb-4 fw-bold">
            Listening on your phone or tablet is free, easy, and fun.
          </p>
          <div className="d-flex justify-content-center">
            <NavLink to="https://www.apple.com/in/app-store/">
              <Storebox props={Appstore} />
            </NavLink>

            <NavLink to="https://play.google.com/">
              <Storebox props={playstore} />
            </NavLink>

            <NavLink to="https://www.microsoft.com/en-in/download">
              <Storebox props={microsoft} />
            </NavLink>
          </div>
        </div>
      </Page2>

      <Page3>
        <div className="text-center p-5">
          <img src={toys} alt="" />
          <h2 className="mt-4 fw-bold">One account, listen everywhere.</h2>
          <ul className="d-flex flex-wrap justify-content-center">
            <li>MOBILE</li>
            <li>COMPUTER</li>
            <li>TABLET</li>
            <li>CAR</li>
            <li>PLAYSTATION®</li>
            <li>XBOX</li>
            <li>TV</li>
            <li>SPEAKER</li>
            <li>WEB PLAYER</li>
          </ul>
        </div>
      </Page3>
    </>
  );
}
