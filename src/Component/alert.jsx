import React from "react";
import styled from "styled-components";
export default function alert() {
  const Alert = styled.div`
    div {
      background-color: #1d75de;
      padding: 14px 15px;
      margin: 0;
    }
    strong {
      font-weight: 100;
      font-size: 12px !important;
      padding-left: 50px;
    }
    button {
      color: white;
    }
  `;
  return (
    <>
      <Alert>
        <div className="alert alert-dismissible rounded-0  " role="alert">
          <strong className="text-white text-decoration-underline fs-6">
            भारत (हिंदी)
          </strong>
          <button
            type="button"
            className="btn-close me-5"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </Alert>
    </>
  );
}
