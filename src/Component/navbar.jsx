import React from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import Logo from "../Component/logo";
import { NavLink } from "react-router-dom";
import Signup from "../Auth/signup";
import Login from "../Auth/login";

export default function Navbar({ setPrivate }) {
  const Navbar = styled.div`
    Logo {
      img {
        margin-left: 1rem;
      }
    }
    a {
      list-style: none;
      color: white;
      font-weight: 700;
      text-decoration: none;
      &:hover {
        color: #1ed760;
        cursor: pointer;
      }
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
            <Modal.Body></Modal.Body>

            <Signup handleClose={handleClose} />
          </Modal>
        </Modal.Dialog>
      </div>
      {/* modal Pop up End */}
      {/* navbar start */}
      <Navbar>
        <nav className="navbar bg-black d-flex justify-content-between align-items-center">
          <Logo />
          <div className="right d-flex w-50 justify-content-evenly ">
            <NavLink to="/">Premium</NavLink>
            <li>Support</li>
            <NavLink to="/download">Download</NavLink>
            <li onClick={handleShow}>Sign up</li>
            <li>
              <Login setPrivate={setPrivate} />
            </li>
          </div>
        </nav>
      </Navbar>
      {/* navbar end */}
    </>
  );
}
