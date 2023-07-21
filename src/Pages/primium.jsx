import React from "react";
import styled from "styled-components";
import PowerCard from "../Component/card";
import PlansCard from "../Component/plansCard";
// import Button from "../Component/button";
// import { button1, button2 } from "../Data/Data";
import { Amex, clubimg, Paytm, upi, visa, master } from "../Utils/images";
import {
  card1,
  card2,
  card3,
  card4,
  plansCard1,
  plansCard2,
  plansCard3,
  plansCard4,
} from "../Data/Data";
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
        margin: 5px;
        transition: all 0.1s ease-in;
        &:hover {
          transform: scale(1.05);
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }
      }
      #plansBtn1 {
        border: 2px solid black;
        padding: 12px 25px;
        font-size: 15px;
        font-weight: bold;

        &:hover {
          transform: scale(1.05);
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        }
      }
      #plansBtn2 {
        background-color: transparent;
        border: 2px solid ${textWhite};
        padding: 12px 25px;
        font-size: 15px;
        font-weight: bold;

        &:hover {
          transform: scale(1.05);
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
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
    // primium page 2 css start
  `;
  // primium page 3 css start
  const Page3 = styled.section`
    .card_bottom {
      width: 60%;
      margin: 1rem auto 4rem;
      border-radius: 10px;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease-in-out;
      /* &:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
      } */
    }
    button {
      background-color: transparent;
      border: 2px solid ${textBlack};
      padding: 12px 25px;
      font-size: 15px;
      font-weight: bold;
      margin-left: 1rem;
      border-radius: 50px;
      transition: all 0.2s ease-in;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        cursor: pointer;
      }
    }
    img {
      width: 32px;
      height: 22px;
      margin: 0 4px;
    }
  `;
  // primium page 3 css end

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
              {/* <Button props={button1} /> */}
              {/* <Button props={button2} /> */}
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
      {/* page 2 end */}
      {/* page 3 start */}
      <Page3>
        <main>
          <div className="text-center">
            <h1>Pick your Premium</h1>
            <p>
              Listen without limits on your phone, speaker, and other devices.
            </p>
            <div className="d-flex justify-content-center">
              <img src={upi} alt="" />
              <img src={Paytm} alt="" />
              <img src={visa} alt="" />
              <img src={master} alt="" />
              <img src={Amex} alt="" />
              <img src={clubimg} alt="" />
            </div>
          </div>
          <section className="d-flex justify-content-evenly p-5">
            <PlansCard props={plansCard1}></PlansCard>
            <PlansCard props={plansCard2}></PlansCard>
            <PlansCard props={plansCard3}></PlansCard>
            <PlansCard props={plansCard4}></PlansCard>
          </section>
          <div className=" card_bottom text-center p-3 border">
            <h4 className="d-inline">
              Special discount for eligible students in university
            </h4>
            <button className="d-inline">LEARN MORE</button>
          </div>
        </main>
      </Page3>
      {/* page 3 end */}
    </>
  );
}
