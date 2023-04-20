import React from "react";
import styled from "styled-components";
// import SongComponent from "./songComponent";
// import Audioplayer from "../Component/audioPlayer";
import Footer from "./privatefooter";
import Aside from "../Component/aside";
import Header from "./privateheader";
// import Main from "../Layout/main";
import { Outlet } from "react-router-dom";
// import Nav from "../Component/navbar";

export default function layout() {
  const Playlist = styled.section`
    /* height: 70vh; */
    width: 79%;
    position: relative;
    left: 16.6rem;
    background-color: #000000d9;
    .playlist_footer {
      section {
        padding: 9rem 1rem;
      }
    }
  `;

  return (
    <>
      <div>
        <Aside />
      </div>
      <Playlist>
        <Header />
        <Outlet></Outlet>
        <Footer />
      </Playlist>
      {/* <Audioplayer /> */}
    </>
  );
}
