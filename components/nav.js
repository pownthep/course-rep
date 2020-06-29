import React, { useEffect } from "react";
import Link from "next/link";

export default function Nav({ firebase }) {
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

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
      </div>
      {user ? (
        <>
          <img
            className="user-profile"
            src={user.photoURL}
            alt="user profile picture"
          />
          <a
            className="navItem"
            style={{ cursor: "pointer", marginLeft: 10 }}
            onClick={() => {
              firebase.auth
                .signOut()
                .then(function () {
                  // Sign-out successful.
                })
                .catch(function (error) {
                  // An error happened.
                  console.log(error);
                });
            }}
          >
            Sign out
          </a>
        </>
      ) : (
        <>
          <Link href="/login">
            <a className="navItem">Login</a>
          </Link>
          <Link href="/register">
            <a className="navItem">Register</a>
          </Link>
        </>
      )}
    </div>
  );
}
