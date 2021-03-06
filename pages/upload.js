import UploadZone from "../components/UploadZone";
import Layout from "../components/layout";
import { FirebaseContext } from "../components/Firebase";

export default function UploaderPage() {
  return (
    <Layout>
      <FirebaseContext.Consumer>
        {(firebase) => {
          return <UploadZone firebase={firebase}/>;
        }}
      </FirebaseContext.Consumer>
    </Layout>
  );
}
