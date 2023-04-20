import React from "react";
import styled from "styled-components";
import Play from "..//Assests/images/play-button.png";
export default function songCard(props) {
  const Card = styled.div`
    text-align: left;
    color: white;
    img {
      width: 90%;
      border-radius: 7px;
    }
    .allcard {
      background-color: #0000004a;
      margin: 1rem;
      &:hover {
        cursor: pointer;
        background-color: white;
        color: black;
      }
    }
    .play {
      position: relative;
      left: 80px;
      width: 40px;
    }
  `;
  return (
    <>
      <Card>
        <div className="allcard ps-3 pb-2 pt-3 rounded">
          <img src={props.img} alt="" />
          <h5 className="mt-3">{props.h5}</h5>
          <p className="text-secondary d-inline">{props.p}</p>
          <img src={Play} alt="" className="play" />
        </div>
      </Card>
    </>
  );
}
