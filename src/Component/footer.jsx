import React from "react";
import styled from "styled-components";
import Logo from "./logo";
import { fblogo, twitter, instagram } from "../Utils/images";

export default function footer() {
  const Footer = styled.footer`
    img {
      padding: 0 !important;
      margin: 0 !important;
    }
    section {
      background-color: black;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      color: white;
      padding: 5rem 2rem;
      ul {
        list-style: none;
        /* line-height: 3rem; */
        h6 {
          margin: 1rem;
        }
        li {
          margin: 1rem;
          &:hover {
            cursor: pointer;
            color: #1ed760;
          }
        }
      }
      img {
        margin: 0 !important;
        &:hover {
          cursor: pointer;
        }
      }
      .logo_img {
        img {
          background-color: white;
          width: 47px;
          border-radius: 70%;
          margin: 0.5rem !important;
          border: 1px solid white !important;
          &:hover {
            background-color: #1ed760;
          }
        }
      }
    }
    .footer_bottom {
      background-color: black;
      color: white;
      display: flex;
      justify-content: space-between;
      padding: 0 3rem;
      li {
        list-style: none;
        padding: 0.8rem;
        font-size: 12px;
        color: gray;
        font-weight: 500;
        &:hover {
          color: #1ed760;
          cursor: pointer;
        }
      }
      .right {
        p {
          font-size: 12px;
          color: gray;
          font-weight: 500;
          &:hover {
            color: #1ed760;
          }
        }
      }
    }
  `;
  return (
    <>
      <Footer>
        <section className="m-0">
          <div>
            <Logo />
          </div>
          <div>
            <ul className="fw-bold">
              <h6 className="text-secondary">COMPANY</h6>
              <li>About</li>
              <li>Jobs</li>
              <li>For the Record</li>
            </ul>
          </div>
          <div>
            <ul className="fw-bold">
              <h6 className="text-secondary">COMMUNITIES</h6>
              <li>For Artists</li>
              <li>Developers</li>
              <li>Advertising</li>
              <li>Investors</li>
              <li>Vendors</li>
            </ul>
          </div>
          <div>
            <ul className="fw-bold me-5">
              <h6 className="text-secondary">USEFUL LINKS</h6>
              <li>Support</li>
              <li>Web Player</li>
              <li>Free Mobile App</li>
            </ul>
          </div>
          <div className="logo_img ms-5">
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={fblogo} alt="" />
          </div>
        </section>
        <div className="footer_bottom align-items-center pb-5">
          <div className="left d-flex ">
            <li>Legal</li>
            <li>Privacy Center</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
            <li>About Ads</li>
          </div>
          <div className="right">
            <p className="ms-3">India (English)</p>
            <p>© 2023 Spotify AB</p>
          </div>
        </div>
      </Footer>
    </>
  );
}
