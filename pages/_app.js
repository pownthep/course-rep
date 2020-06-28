import "../styles/index.css";
import Firebase, { FirebaseContext } from "../components/Firebase";

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Component {...pageProps} />{" "}
    </FirebaseContext.Provider>
  );
}

export default MyApp;
