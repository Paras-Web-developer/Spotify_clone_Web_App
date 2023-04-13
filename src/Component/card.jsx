import React from "react";
import styled from "styled-components";

export default function card({ props }) {
  // primium page 1 card css start
  const PowerCard = styled.section`
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      border: none;
      /* border-radius: 10px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
      } */
    }
    img {
      width: 150px;
    }
    h1 {
      font-size: 1.2rem;
      font-weight: bold;
      text-align: center;
    }
    p {
      font-size: 1rem;
      text-align: center;
      width: 250px;
      font-weight: 500;
      color: #323232;
    }
  `;
  // primium page 1 card css end

  return (
    <>
      {/* Page 2 card start  */}

      <PowerCard>
        <div className="card">
          <img src={props.img} alt="" />
          <h1 className="mt-5">{props.heading}</h1>
          <p className="mt-2">{props.para}</p>
        </div>
      </PowerCard>
      {/* Page 2 card end  */}
    </>
  );
}
