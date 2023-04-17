import React from "react";
import {} from "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Primium from "../Pages/primium";
import Alert from "../Component/alert";
import Navbar from "../Component/navbar";
import Download from "../Pages/download";
import Footer from "../Component/footer";
import Playlist from "../Pages/playlist";
import Error from "../Pages/error404";
export default function routing() {
  return (
    <>
      <BrowserRouter>
        <Alert />
        <Navbar />
        <Routes>
          <Route path="/playlist" element={<Playlist />}></Route>
          <Route path="/" element={<Primium />}></Route>
          <Route path="/download" element={<Download />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <BrowserRouter>
        <Alert />
        <Navbar />
        <Routes>
          <Route path="/playlist" element={<Playlist />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="/" element={<Primium />}></Route>
          <Route path="/download" element={<Download />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter> */}
    </>
  );
}
