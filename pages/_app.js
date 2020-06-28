import "../styles/index.css";
import Firebase, { FirebaseContext } from "../components/Firebase";
import "nprogress/nprogress.css";
import dynamic from "next/dynamic";

const TopProgressBar = dynamic(
  () => {
    return import("../components/TopProgressBar");
  },
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <TopProgressBar />
      <Component {...pageProps} />{" "}
    </FirebaseContext.Provider>
  );
}

export default MyApp;
