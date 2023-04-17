import React from "react";
import styled from "styled-components";
// import istore from "../assets/image/apple-logo.png";
export default function storebox({ props }) {
  const Section = styled.section`
    .istore {
      /* width: 42%; */
      padding: 2px 10px;
      height: 40px;
      text-decoration: none;
      border-radius: 7px;
    }

    .istore-l img {
      width: 20px;
    }
    .istore-r h5 {
      font-weight: 400;
      position: relative;
      top: 10px;
      left: 2px;
      font-size: 9px;
    }

    .istore-r h2 {
      left: 6px;
      position: relative;
      top: -3px;
      font-size: 18px;
    }
  `;
  return (
    <>
      <Section>
        <div className="istore d-flex justify-content-evenly align-items-center bg-black text-white m-2">
          <div className="istore-l">
            <img src={props.src} alt="" className="" />
          </div>
          <div className="istore-r">
            <h5>{props.download}</h5>
            <h2>{props.play}</h2>
          </div>
        </div>
      </Section>
    </>
  );
}
