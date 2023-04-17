import React from "react";
import leftArrow from "../Assests/images/back.png";
import rightArrow from "../Assests/images/next.png";
import styled from "styled-components";
export default function songComponent() {
  const Navbar = styled.nav`
    background-color: transparent;
    img {
      width: 33px;
      background-color: white;
      border-radius: 50px;
      border: 1px solid white;
      margin: 0.5rem;
    }
    select {
      option {
        color: white;
        background-color: #000000d9;
        &:hover {
          background-color: red !important;
        }
      }
    }
  `;

  const Playlist1 = styled.section``;
  return (
    <>
      <Navbar>
        <nav className="d-flex justify-content-between pt-3 ps-4 pe-4">
          <div className="left">
            <img src={leftArrow} alt="" />
            <img src={rightArrow} alt="" />
          </div>
          <div className="right d-flex justify-content-center align-items-center">
            <button className="rounded-5 pt-1 pb-1 ps-2 pe-2 me-3 border-1 border-white bg-transparent text-white">
              Upgrade
            </button>
            <div>
              <select
                name=""
                id=""
                className="rounded-5 me-3 pt-1 pb-1 border-1 border-white bg-transparent text-white"
              >
                <img src={leftArrow} alt="" />
                <option value="">Paras Grover</option>
                <option value="">Account</option>
                <option value="">Profile</option>
                <option value="">Upgrade to Premium</option>
                <option value="">Support</option>
                <option value="">Download</option>
                <option value="" className="border-bottom">
                  Setting
                </option>
                <option value="">Logout</option>
              </select>
            </div>
          </div>
        </nav>
      </Navbar>

      <Playlist1>
        <h4 className="text-white ms-4 p-2 mt-3">
          Spotify original & exclusive shows
        </h4>
        
      </Playlist1>
    </>
  );
}
