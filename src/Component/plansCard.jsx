import React from "react";
import styled from "styled-components";

export default function plansCard({ props }) {
  const Wrapper = styled.section`
    margin: 0.5rem;
    width: 100%;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
    /* &:hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    } */
    p {
      margin-bottom: 5px;
      font-weight: 400;
    }
    .head {
      border: 1px solid black;
      margin: 1rem 0;
      width: 90%;
      font-size: 0.9rem;
    }
    .middle {
      img {
        width: 22px;
        height: 22px;
      }
    }
    .bottom {
      margin-top: ${props.bottomMargin};
      .bottom_button {
        transition: all 0.1s ease-in;
        &:hover {
          transform: scale(1.05);
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }
      }
    }
    .terms {
      text-decoration: underline;
      font-size: 12px;
    }
    .months {
      font-size: 12px;
    }
  `;
  return (
    <>
      <Wrapper>
        <div className="top border-bottom">
          <h6
            className={`${props.headerbg} text-white rounded d-inline p-1 mb-2`}
          >
            {props.Header}
          </h6>
          <h6 className="text-primary rounded p-2 mb-1 head">{props.head}</h6>
          <h3>{props.title}</h3>
          <p>{props.p1}</p>
          <p>{props.p2}</p>
        </div>
        <div className="middle mt-4">
          <div className="d-flex">
            <img src={props.img} alt="" />
            <p>{props.check1}</p>
          </div>
          <div className="d-flex">
            <img src={props.img} alt="" />
            <p>{props.check2}</p>
          </div>
          <div className="d-flex">
            <img src={props.img} alt="" />
            <p>{props.check3}</p>
          </div>
          <div className={`${props.tikBlock}`}>
            <img src={props.img} alt="" />
            <p>{props.check4}</p>
          </div>
          <div className={`${props.tikBlock}`}>
            <img src={props.img} alt="" />
            <p>{props.check5}</p>
          </div>
        </div>
        <div className="bottom ">
          <div className=" bottom_button border rounded-5 p-3 text-center text-white bg-black">
            {props.button}
          </div>
          <div className="mt-2">
            <p className="terms d-inline ">{props.terms}</p>
            <p className="months d-inline">{props.months}</p>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
