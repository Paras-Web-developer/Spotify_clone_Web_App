import React from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import logo from "../Assests/images/spotify.png";
import modellogo from "../Assests/images/modellogo.png";
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
export default function Navbar() {
  const Navbar = styled.div`
    img {
      background-color: white;
      width: 60px;
      margin-left: 3.5rem;
    }
    li {
      list-style: none;
      color: white;
      font-weight: 700;
    }
    li:hover {
      color: #1ed760;
      cursor: pointer;
    }
  `;
  /* model css Start  */

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
  `;
  /* model css end */
  // modelpop Logic start
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // modelpop Logic end
  return (
    <>
      {/* modal Pop up Start  */}
      <div
        className="modal show border-0"
        style={{ display: "none", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal show={show}>
            <Section>
              <Modal.Body>
                <div className="d-flex flex-column justify-content-center p-3 align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src={modellogo}
                      alt=""
                      className="rounded-circle w-25"
                    />
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
                        class="btn-close"
                        aria-label="Close"
                        onClick={handleClose}
                        style={{
                          position: "absolute",
                          right: "70px",
                          top: "42px",
                        }}
                      ></button>
                    </div>
                    <div>
                      <ButtonDiv props={button1} />
                      <ButtonDiv props={button2} />
                    </div>
                    <div className="d-flex justify-content-center">
                      <span className="text-secondary">
                        ______________________
                      </span>
                      <p className="m-3">or</p>
                      <span className="text-secondary">
                        ______________________
                      </span>
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

                      <p className="p-3 ps-0 fw-medium text-gray">
                        This appears on your profile.
                      </p>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Section>

            {/* <Modal.Footer className="border-0">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer> */}
          </Modal>
        </Modal.Dialog>
      </div>
      {/* modal Pop up End */}
      {/* navbar start */}
      <Navbar>
        <nav className="navbar bg-black d-flex justify-content-between align-items-center">
          <div className="left d-flex align-items-center">
            <img src={logo} alt="" />
            <h2 className="text-white fs-4">Spotify</h2>
          </div>
          <div className="right d-flex w-50 justify-content-evenly ">
            <li>Premium</li>
            <li>Support</li>
            <li>Download</li>
            <li>|</li>
            <li onClick={handleShow}>Sign up</li>
            <li>Log In</li>
          </div>
        </nav>
      </Navbar>
      {/* navbar end */}
    </>
  );
}
