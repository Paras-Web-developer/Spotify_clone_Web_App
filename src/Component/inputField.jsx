import React from "react";

export default function inputField({ props }) {
  return (
    <>
      <div className="p-1">
        <label htmlFor="" className="d-block fw-bold p-2 ps-0">
          {props.label}
        </label>
        <input
          type={props.type}
          placeholder={props.placeholder}
          id={props.id}
          className="w-100 p-2 rounded-1 border-1 border-secondary"
          style={{ outline: "none" }}
          min={props.min}
          max={props.max}
        />
      </div>
    </>
  );
}
