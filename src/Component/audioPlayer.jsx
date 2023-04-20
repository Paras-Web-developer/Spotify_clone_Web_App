import React from "react";
import ReactAudioPlayer from "react-audio-player";
import styled from "styled-components";

export default function audioPlayer() {
  const Section = styled.section`
  div{
    position: fixed;
      bottom: 0;
      z-index: 3;
      audio {
        width: 205vh;
        border-top: 1px solid gray;
        &::-webkit-media-controls-panel {
          border-radius: 0 !important;
          /* background-color: black; */
          color: #a0276e;
        }
      }
  }
  `
  return (
    <>
    <Section>
    <div>
      <ReactAudioPlayer
        src="../Assests/images/Akhian Nimanian - Amrinder Gill.mp3"
        autoPlay
        controls
      />
      </div>
      </Section>
    </>
  );
}
