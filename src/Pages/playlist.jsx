import React from "react";
import Logo from "../Component/logo";
import styled from "styled-components";
import homeimg from "../Assests/images/home.png";
import searchimg from "../Assests/images/search.png";
import library from "../Assests/images/library.png";
import createPlaylist from "../Assests/images/music-cloud.png";
import liked from "../Assests/images/thumbs-up.png";
import download from "../Assests/images/downloading.png";
import SongComponent from "./songComponent";
// import Nav from "../Component/navbar";

export default function playlist() {
  const Aside = styled.section`
    position: fixed;
    z-index: 1;
    background-color: black;
    color: white;
    display: inline-block;
    width: 21%;
    ul {
      /* color: red; */

      li {
        font-size: 0.8rem;
        font-weight: bold;
        color: gray;
        &:hover {
          color: white;
        }
      }
    }

    .top {
      img {
        margin-left: 20px;
      }
    }

    .mid {
      margin: 15px 0px 0px 33px;
      border-bottom: 1px solid gray;
      width: 75%;
      div {
        display: flex;
        align-items: center;
        line-height: 3rem;
        img {
          margin: 0;
          width: 23px;
          background-color: white;
          border-radius: 100px;
          border: 1px solid white;
          display: inline;
          margin-right: 12px;
        }
      }
    }
    .bottom {
      img {
        width: 26px;
        border: 1px solid white;
      }
    }
    .top_navbar {
      nav {
        position: fixed;
        color: red !important;
      }
    }
  `;

  const Playlist = styled.section`
    height: 70vh;
    width: 79%;
    position: relative;
    left: 16.6rem;
    background-color: #000000d9;
  `;
  return (
    <>
      <Aside>
        <div className="top mt-3">
          <Logo />
        </div>
        <div className="mid">
          <ul className="list-unstyled ">
            <div>
              <img src={homeimg} alt="" />
              <li className="text-white">Home</li>
            </div>
            <div>
              <img src={searchimg} alt="" />
              <li>Search</li>
            </div>
            <div className="mb-4">
              <img src={library} alt="" className="bg-transparent 1 border-0" />
              <li>Your Library</li>
            </div>
            <div>
              <img src={createPlaylist} alt="" />
              <li>Create Playlist</li>
            </div>
            <div>
              <img src={liked} alt="" className="bg-black border-0" />
              <li>Liked Songs</li>
            </div>
          </ul>
        </div>

        <div className="bottom mt-5 pt-5 pb-3 ms-4 ps-2 d-flex align-items-center">
          <img src={download} alt="" className="bg-white rounded-5" />
          <h6 className="list-unstyled fw-bold ms-3 ">Install App</h6>
        </div>
      </Aside>
      {/* <div className="top_navbar">
        <Nav />
      </div> */}

      <Playlist>
        <SongComponent />
      </Playlist>
    </>
  );
}
