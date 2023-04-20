import React from "react";
import headphone from "../Assests/images/headphone1.png";
import styled from "styled-components";
export default function createplaylist() {
  const Section = styled.section`
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 90vh;
      background-color: rgba(0, 0, 0, 0.5);
      img {
        width: 100px;
        margin-bottom: 10px;
      }
      p {
        font-size: 15px;
        color: #fff;
        text-align: center;
        margin-top: 10px;
      }
      button {
        padding: 0.8rem 1.6rem;
        border: none;
        border-radius: 50px;
        font-weight: bold;
        transition: all 0.1s ease-in;
        &:hover {
          transform: scale(1.05);
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }
      }
    }
  `;
  return (
    <Section>
      <div>
        <img src={headphone} alt="" />
        <h3 className="text-white">Create your first playlist</h3>
        <p>It's easy, we'll help you.</p>
        <button>Create Playlist</button>
      </div>
    </Section>
  );
}
