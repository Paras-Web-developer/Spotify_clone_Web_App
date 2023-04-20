import { Field } from "formik";
import React from "react";

export default function InputField({ props }) {
  return (
    <>
      <div className="p-1">
        <label htmlFor="" className="d-block fw-bold p-2 ps-0">
          {props.label}
        </label>
        <Field
          type={props.type}
          placeholder={props.placeholder}
          id={props.id}
          min={props.min}
          max={props.max}
          className="w-100 p-2 rounded-1 border-1 border-secondary"
          style={{ outline: "none" }}
          name={props.name}
        />
      </div>
    </>
  );
}
