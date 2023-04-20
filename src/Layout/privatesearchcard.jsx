import React from "react";
import styled from "styled-components";
// import dance3 from "../Assests/images/dance3.png";

export default function privatesearchcard(props) {
  console.log(props.color);
  const Section = styled.section`
    .allcard {
      height: 30vh;
      width: 35vh;
      overflow: hidden;
      background-color: ${props.color};
      margin: 0.5rem;
      &:hover {
        cursor: pointer;
        background-color: #00000030;
      }
      h6 {
        font-size: 1.4rem;
      }
      /* img {
        position: relative;
        bottom: -14.9px;
        right: -5rem;
        width: 50%;
        height: 80%;
      } */
    }
  `;
  return (
    <Section>
      <div className="allcard ps-3 pt-3 rounded">
        <h6 className="text-white fw-bold">{props.heading}</h6>
        {/* <img src={dance3} alt="" /> */}
      </div>
    </Section>
  );
}
