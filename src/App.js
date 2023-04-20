import React, { useEffect, useState } from "react";
import Routing from "./Routes/routing";

export default function App() {
  const [isPrivate, setPrivate] = useState(false);

  localStorage.setItem("email", "parasgrover932@gmail.com");
  localStorage.setItem("password", "12345");

  useEffect(() => {
    console.log("isPrivate", isPrivate);
  }, [isPrivate]);

  return (
    <>
      <Routing isPrivate={isPrivate} setPrivate={setPrivate} />
    </>
  );
}
