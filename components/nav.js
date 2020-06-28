import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <div
      style={{
        padding: "20px",
        height: "7vh",
        borderBottom: "1px solid #edf2f7",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <Link href="/">
        <a className="navItem" style={{ fontSize: "20px" }}>
          <strong>Course Rep</strong>
        </a>
      </Link>
      <input
        className="search-box"
        type="text"
        name=""
        id=""
        placeholder="Search for documents"
      />
      <div>
        <Link href="/">
          <a className="navItem">Home</a>
        </Link>
        <Link href="/upload">
          <a className="navItem">Upload</a>
        </Link>
        <Link href="/login">
          <a className="navItem">Login</a>
        </Link>
      </div>
    </div>
  );
}
