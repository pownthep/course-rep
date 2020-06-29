import Layout from "../components/layout";
import { FirebaseContext } from "../components/Firebase";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <Layout>
      <FirebaseContext.Consumer>
        {(firebase) => {
          return <LoginForm firebase={firebase} />;
        }}
      </FirebaseContext.Consumer>
    </Layout>
  );
}
