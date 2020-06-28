import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <div
      style={{
        padding: "20px",
        height: "6vh",
        borderBottom: "1px solid #edf2f7",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <Link href="/">
        <a className="navItem">
          <strong>Course Rep</strong>
        </a>
      </Link>
      <div style={{ marginLeft: "auto" }}>
        <Link href="/">
          <a className="navItem">Home</a>
        </Link>
        <Link href="/uploader">
          <a className="navItem">Upload</a>
        </Link>
        <input
          className="search-box"
          type="text"
          name=""
          id=""
          placeholder="Search documents"
        />
      </div>
    </div>
  );
}
