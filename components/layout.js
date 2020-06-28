import React from "react";
import Nav from "./nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>
        <div>{children}</div>
      </main>
    </>
  );
}
