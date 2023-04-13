import React from "react";
import styled from "styled-components";
import PowerCard from "../Component/card";
import { card1, card2, card3, card4 } from "../Data/Data";
export default function primium() {
  // color variables Start
  let textBlack = "black";
  let textWhite = "white";
  // color variables End

  // primium page 1 css start
  const Page1 = styled.div`
    background-color: rgb(29, 117, 222);
    color: ${textWhite};
    padding: 8%;
    .primium__content {
      font-size: 2rem;
      text-align: center;
      p {
        font-size: 1.5rem;
        margin: 2rem;
      }
      button {
        background-color: ${textBlack};
        color: ${textWhite};
        border-radius: 50px;
        text-transform: uppercase;
      }
      #plansBtn1 {
        border: 2px solid black;
        padding: 12px 25px;
        font-size: 15px;
        font-weight: bold;

        &:hover {
          font-size: 17px;
        }
      }
      #plansBtn2 {
        background-color: transparent;
        border: 2px solid ${textWhite};
        padding: 12px 25px;
        font-size: 15px;
        font-weight: bold;

        &:hover {
          font-size: 17px;
        }
      }
      h6 {
        font-size: 10.5px;
        margin-top: 2rem;

        span {
          text-decoration: underline;
        }
      }
    }
  `;
  // primium page 1 css End

  // primium page 2 css start
  const Page2 = styled.div`
    div {
      display: flex;
      justify-content: space-evenly;
      /* margin: 5rem; */
    }
  `;

  return (
    <>
      {/* Page 1 Start  */}
      <Page1>
        <div className="primium">
          <div className="primium__container">
            <div className="primium__content">
              <h1 className="primium__title">Get Premium free for 1 month</h1>
              <p className="primium__description fw-medium">
                Just ₹119/month after. Debit and credit cards accepted. Cancel
                anytime.
              </p>
              <button id="plansBtn1">get started</button>

              <button id="plansBtn2">see other plans</button>

              <h6>
                <span>Terms and conditions apply.</span> 1 month free not
                available for users who have already tried Premium.
              </h6>
            </div>
          </div>
        </div>
      </Page1>
      {/* Page 1 End */}

      {/* page 2 start */}
      <h1 className="text-center font-bold p-5">The power of Premium</h1>
      <Page2>
        <div className="p-5">
          <PowerCard props={card1} />
          <PowerCard props={card2} />
          <PowerCard props={card3} />
          <PowerCard props={card4} />
        </div>
      </Page2>
    </>
  );
}
