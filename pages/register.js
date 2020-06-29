import Layout from "../components/layout";
import { FirebaseContext } from "../components/Firebase";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <Layout>
      <FirebaseContext.Consumer>
        {(firebase) => {
          return <RegisterForm firebase={firebase} />;
        }}
      </FirebaseContext.Consumer>
    </Layout>
  );
}