import React from "react";
import styled from "styled-components";
import Searchcard from "./privatesearchcard";
import searchData from "../Data/searchdata";

export default function privatesearch() {
  const Playlist1 = styled.section`
    .allCards {
      display: grid;
      grid-template-columns: auto auto auto auto;
      padding: 30px;
      overflow: scroll;
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
          <h4 className="text-white ms-4 p-2 mt-3">Browse all</h4>
          <div className="allCards">
            {searchData.map((el) => {
              return (
                <>
                  <Searchcard heading={el.heading} color={el.color} />
                </>
              );
            })}
          </div>
        </div>
      </Playlist1>
    </>
  );
}
