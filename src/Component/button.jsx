import React from "react";
import styled from "styled-components";

export default function button({ props }) {
  const ButtonDiv = styled.div`
    div {
      border: 2px solid black;
      color: #535353;
      border-radius: 50px;
      padding: 10px;
      margin-block-end: 14px;
      background-color: ${props.bgcolor};
      border: ${props.border};
      color: ${props.textColor};
      img {
        width: 20px;
      }
      h3 {
        font-size: 15px;
        font-weight: 600;
      }
    }
  `;

  return (
    <>
      <ButtonDiv>
        <div className="d-flex justify-content-center align-items-center">
          <img src={props.img} alt="" />
          <h3 className="ms-4 mt-1">{props.text}</h3>
        </div>
      </ButtonDiv>
    </>
  );
}
