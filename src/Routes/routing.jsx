import React from "react";
import {} from "../App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Alert from "../Component/alert";
import Navbar from "../Component/navbar";
import Download from "../Pages/download";
import Footer from "../Component/footer";
import Layout from "../Layout/layout";
import Error from "../Pages/error404";
import Primium from "../Pages/primium";
import Main from "../Layout/privatemain";
import Search from "../Layout/privatesearch";
import Yourlibrary from "../Layout/privateyourlibrary";
import Createplaylist from "../Layout/createplaylist";
import Liked from "../Layout/privateliked";

export default function routing({ isPrivate, setPrivate }) {
  let prop = isPrivate;
  function Private({ prop }) {
    if (prop !== true) {
      return <Navigate to="/" />;
    }
    return <Outlet />;
  }
  function Public({ prop }) {
    if (prop !== false) {
      return <Navigate to="/Layout/main" />;
    }
    return <Outlet />;
  }

  return (
    <>
      <BrowserRouter>
        {prop === false && <Alert />}
        {prop === false && <Navbar setPrivate={setPrivate} />}
        <Routes>
          <Route element={<Public prop={prop} />}>
            <Route path="*" element={<Error />}></Route>
            <Route path="/" element={<Primium />}></Route>
            <Route path="/download" element={<Download />}></Route>
          </Route>
          <Route element={<Private prop={prop} />}>
            <Route path="/layout" element={<Layout setPrivate={setPrivate} />}>
              <Route path="*" element={<Error />}></Route>
              <Route path="/layout/main" element={<Main />}></Route>
              <Route path="/layout/search" element={<Search />}></Route>
              <Route
                path="/layout/yourlibrary"
                element={<Yourlibrary />}
              ></Route>
              <Route
                path="/layout/createplaylist"
                element={<Createplaylist />}
              ></Route>
              <Route path="/layout/liked" element={<Liked />}></Route>
            </Route>
          </Route>
        </Routes>
        {prop === false && <Footer />}
      </BrowserRouter>
    </>
  );
}
