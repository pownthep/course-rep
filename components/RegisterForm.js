import React, { useEffect } from "react";

export default function RegisterForm({ firebase }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const strengthText = ["", "bad 💩", "ok 😐", "decent 🙂", "solid 💪"];
  const [passwordStrength, setPasswordStrength] = React.useState(0);
  const [showPassword, setShowPassword] = React.useState(false);
  const emailValidator = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const [passwordValidations, setPasswordValidations] = React.useState([]);
  const [emailValidations, setEmailValidations] = React.useState(false);

  useEffect(() => {
    setPasswordValidations([
      password.length > 5,
      password.search(/[A-Z]/) > -1,
      password.search(/[0-9]/) > -1,
      password.search(/[$&+,:;=?@#]/) > -1,
    ]);
    setPasswordStrength(passwordValidations.reduce((acc, cur) => acc + cur, 0));
    return () => {};
  }, [password]);

  useEffect(() => {
    setEmailValidations(email.search(emailValidator) > -1);
    return () => {};
  }, [email]);

  return (
    <>
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          firebase.auth
            .createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(error);
            });
        }}
      >
        <h1>Register</h1>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          className="user-input form-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ul>
          <li>{emailValidations ? "✔️" : "❌"} must be a valid email</li>
        </ul>
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          className="password-input form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          className="toggle-show"
          onMouseEnter={() => setShowPassword(true)}
          onMouseLeave={() => setShowPassword(false)}
        >
          {showPassword ? "🙈" : "👁️"}
        </span>
        <div className="strength">
          <span
            className={`bar bar-1 ${passwordStrength > 0 ? "bar-show" : ""}`}
          />
          <span
            className={`bar bar-2 ${passwordStrength > 1 ? "bar-show" : ""}`}
          />
          <span
            className={`bar bar-3 ${passwordStrength > 2 ? "bar-show" : ""}`}
          />
          <span
            className={`bar bar-4 ${passwordStrength > 3 ? "bar-show" : ""}`}
          />
        </div>
        <ul className="validations-items">
          <li>
            {" "}
            {passwordValidations[0] ? "✔️" : "❌"} must be at least 5 characters
          </li>
          <li>
            {" "}
            {passwordValidations[1] ? "✔️" : "❌"} must contain a capital letter
          </li>
          <li> {passwordValidations[2] ? "✔️" : "❌"} must contain a number</li>
          <li>
            {" "}
            {passwordValidations[3] ? "✔️" : "❌"} must contain one of
            $&+,:;=?@#
          </li>
        </ul>
        <button
          className="form-btn"
          disabled={
            !emailValidations ||
            !passwordValidations[0] ||
            !passwordValidations[1] ||
            !passwordValidations[2] ||
            !passwordValidations[3]
          }
        >
          REGISTER
        </button>
        <br />
      </form>
    </>
  );
}
