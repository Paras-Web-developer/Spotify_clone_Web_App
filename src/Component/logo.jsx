import React from "react";
import logoimg from "../Assests/images/spotify.png";
import styled from "styled-components";

export default function logo() {
  let margin = "3.5rem";
  const Section = styled.section`
    img {
      background-color: white;
      width: 60px;
      margin-left: ${margin};
    }
  `;
  return (
    <>
      <Section className="p-0">
        <div className="left d-flex align-items-center">
          <img src={logoimg} alt="" />
          <h2 className="text-white fs-4">Spotify</h2>
        </div>
      </Section>
    </>
  );
}
