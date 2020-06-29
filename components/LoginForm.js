import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function LoginForm({ firebase }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged(function (user) {
      if (user) {
        router.push("/");
      } else {
        // No user is signed in.
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <div className="login-form">
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          className="user-input form-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="password-input form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="form-btn"
          onClick={() => {
            firebase.auth
              .signInWithEmailAndPassword(email, password)
              .catch(function (error) {
                console.log(error);
              });
          }}
        >
          LOGIN
        </button>
        <button
          className="form-btn"
          onClick={async () => {
            const result = await firebase.signInWithGoogle();
          }}
        >
          GOOGLE
        </button>
      </div>
    </>
  );
}
