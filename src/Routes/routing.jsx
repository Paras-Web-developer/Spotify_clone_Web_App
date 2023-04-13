import React from "react";
import {} from "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Primium from "../Pages/primium";
import Alert from "../Component/alert";
import Navbar from "../Component/navbar";
export default function routing() {
  return (
    <>
      <BrowserRouter>
        <Alert />
        <Navbar />
        <Routes>
          <Route path="/" element={<Primium />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
