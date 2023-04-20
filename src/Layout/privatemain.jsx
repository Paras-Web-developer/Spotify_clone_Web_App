import React from "react";
import styled from "styled-components";
import SongCard from "../Component/songCard";
import musicCardData from "../Data/musiccarddata";
export default function privatemain() {
  const Playlist1 = styled.section`
    .allCards {
      display: grid;
      grid-template-columns: auto auto auto auto;
      padding: 10px;
      overflow: scroll;
      scroll-behavior: smooth;
      height: 70vh;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  `;
  return (
    <>
      <Playlist1>
        <div className="scroll">
          <h4 className="text-white ms-4 p-2 mt-3">
            Spotify original & exclusive shows
          </h4>
          <div className="allCards">
            {musicCardData.map((el) => {
              return (
                <>
                  <SongCard img={el.img} h5={el.h5} p={el.p} />
                </>
              );
            })}
          </div>
        </div>
      </Playlist1>
    </>
  );
}
