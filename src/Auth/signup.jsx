import React from "react";
import modellogo from "../Assests/images/modellogo.png";
import styled from "styled-components";
import {
  button1,
  button2,
  input1,
  input2,
  input3,
  input4,
  input5,
  input6,
  input7,
} from "../Data/Data";
import ButtonDiv from "../Component/button";
import Input from "../Component/inputField";
const Signup = ({ handleClose }) => {
  const Section = styled.section`
    /* border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    } */
    p {
      position: relative;
      top: -10px;
    }
    .profile {
      font-size: 15px;
    }
    .checkboxpara {
      margin-left: 10px;
      font-size: 12px;
    }
    .Terms-Condition {
      h6 {
        font-size: 12px;
      }
      a {
        font-size: 12px;
      }
    }
  `;

  return (
    <>
      <Section>
        <div className="d-flex flex-column justify-content-center p-3 align-items-center">
          <div className="d-flex align-items-center">
            <img src={modellogo} alt="" className="rounded-circle w-25" />
            <h3 className="fs-3 ms-2">spotify</h3>
          </div>
          <div className="heading">
            <h3
              className="fw-bold pt-5 pb-4 heading text-center"
              style={{ letterSpacing: "-2px" }}
            >
              Sign up for free to start listening.
            </h3>
            <div>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => handleClose()}
                style={{
                  position: "absolute",
                  right: "70px",
                  top: "58px",
                }}
              ></button>
            </div>
            <div>
              <ButtonDiv props={button1} />
              <ButtonDiv props={button2} />
            </div>
            <div className="d-flex justify-content-center">
              <span className="text-secondary">______________________</span>
              <p className="m-3">or</p>
              <span className="text-secondary">______________________</span>
            </div>
            <div>
              <Input props={input1}></Input>
              <Input props={input2}></Input>
              <Input props={input3}></Input>
              <Input props={input4}></Input>
              <h6 className="pt-3">What's your date of birth?</h6>
              <div className="d-flex">
                <Input props={input5}></Input>
                <Input props={input6}></Input>
                <Input props={input7}></Input>
              </div>

              <p className="profile p-3 ps-0 fw-medium text-gray">
                This appears on your profile.
              </p>
              <h6>what is your gender?</h6>
              <div className="d-flex flex-wrap fw-bold">
                <div>
                  <input type="radio" name="radio" />
                  <label className="m-2" htmlFor="">
                    Male
                  </label>
                </div>
                <div>
                  <input type="radio" name="radio" />
                  <label className="m-2" htmlFor="">
                    Female
                  </label>
                </div>
                <div>
                  <input type="radio" name="radio" />
                  <label className="m-2" htmlFor="">
                    Non-binary
                  </label>
                </div>
                <div>
                  <input type="radio" name="radio" />
                  <label className="m-2" htmlFor="">
                    Other
                  </label>
                </div>
                <div>
                  <input type="radio" name="radio" />
                  <label className="m-2" htmlFor="">
                    Prefer not to say
                  </label>
                </div>
              </div>
              <div>
                <input type="checkbox" name="" id="" className="d-inline" />
                <label htmlFor="" className="d-inline checkboxpara">
                  I would prefer not to receive marketing messages from Spotify
                </label>
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className="d-inline checkboxpara">
                  Share my registration data with Spotify's content providers
                  for marketing purposes.
                </label>
              </div>
              <div className="text-center m-4 Terms-Condition">
                <h6>
                  By clicking on sign-up, you agree to Spotify's
                  <span>
                    <a href="/" className="text-success">
                      Terms and Conditions of Use
                    </a>
                  </span>
                  .
                </h6>
                <h6>
                  To learn more about how Spotify collects, uses, shares and
                  protects your personal data, please see
                  <span>
                    <a href="/" className="text-success">
                      Spotify's Privacy Policy
                    </a>
                  </span>
                  .
                </h6>
                <button className="btn btn-success rounded-5 mt-3 ps-4 pe-4 fw-bold">
                  Signup
                </button>
                <div className="mt-4">
                  <h6>
                    Have an account?
                    <span>
                      <a href="/" className="text-success">
                        Log in
                      </a>
                    </span>
                    .
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Signup;
