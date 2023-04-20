import React from "react";
import Logo from "./logo";
import styled from "styled-components";
import homeimg from "../Assests/images/home.png";
import searchimg from "../Assests/images/search.png";
import library from "../Assests/images/library.png";
import createPlaylist from "../Assests/images/music-cloud.png";
import liked from "../Assests/images/thumbs-up.png";
import download from "../Assests/images/downloading.png";
import { NavLink } from "react-router-dom";

export default function aside() {
  const Aside = styled.section`
    position: fixed;
    z-index: 1;
    background-color: black;
    color: white;
    display: inline-block;
    width: 21%;
    height: 100vh;
    ul {
      /* color: red; */

      a {
        font-size: 0.9rem;
        text-decoration: none;
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
              <NavLink to="/layout/main" className="text-white">
                Home
              </NavLink>
            </div>
            <div>
              <img src={searchimg} alt="" />
              <NavLink to="/layout/search" className="text-white">
                search
              </NavLink>
            </div>
            <div className="mb-4">
              <img src={library} alt="" className="bg-transparent 1 border-0" />
              <NavLink to="/layout/yourlibrary" className="text-white">
                Your Library
              </NavLink>
            </div>
            <div>
              <img src={createPlaylist} alt="" />
              <NavLink to="/layout/createplaylist" className="text-white">
                Create Playlist
              </NavLink>
            </div>
            <div>
              <img src={liked} alt="" className="bg-black border-0" />
              <NavLink to="/layout/liked" className="text-white">
                Liked Songs
              </NavLink>
            </div>
          </ul>
        </div>

        <div className="bottom mt-5 pt-5 pb-5 mb-4 ms-4 ps-2 d-flex align-items-center">
          <img src={download} alt="" className="bg-white rounded-5" />
          <h6 className="list-unstyled fw-bold ms-3 ">Install App</h6>
        </div>
      </Aside>
    </>
  );
}
