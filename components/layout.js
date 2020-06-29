import React from "react";
import Nav from "./nav";
import { FirebaseContext } from "../components/Firebase";

export default function Layout({ children }) {
  return (
    <>
      <FirebaseContext.Consumer>
        {(firebase) => {
          return <Nav firebase={firebase} />;
        }}
      </FirebaseContext.Consumer>
      <main>
        <div>{children}</div>
      </main>
    </>
  );
}
