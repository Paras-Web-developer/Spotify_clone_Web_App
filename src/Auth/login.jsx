import React from "react";
import modellogo from "../Assests/images/modellogo.png";
import { button1, button2, email, password } from "../Data/Data";
import Input from "../Component/inputField";
import ButtonDiv from "../Component/button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { Form, Formik } from "formik";

export default function Login({ setPrivate }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <h6 variant="primary" onClick={handleShow} className="mt-1">
        Login
      </h6>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              return errors;
            }}
            onSubmit={(values) => {
              const { email, password } = values;

              if (
                email === localStorage.getItem("email") &&
                password === localStorage.getItem("password")
              ) {
                setTimeout(() => {
                  setPrivate(true);
                  alert("Login Succesful Enjoy Music");
                }, 1000);
              } else {
                alert("Please Enter valid User Password");
              }
            }}
          >
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
                      top: "40px",
                    }}
                  ></button>
                </div>
                <div>
                  <ButtonDiv props={button1} />
                  <ButtonDiv props={button2} />
                </div>
                <div className="d-flex justify-content-center">
                  <span className="text-secondary">______________________</span>
                  <p className="m-2">or</p>
                  <span className="text-secondary">______________________</span>
                </div>
                <Form>
                  <div>
                    <Input props={email}></Input>
                    <Input props={password}></Input>
                  </div>
                  <button
                    className="btn btn-primary rounded-5 mt-3 ps-4 pe-4 fw-bold"
                    type="submit"
                  >
                    Login
                  </button>
                </Form>
              </div>
            </div>
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}
