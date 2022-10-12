import NavBar from "components/NavBar";
import "semantic-ui-css/semantic.min.css";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <h1>Tasks App with MongoDB, Mongoose and Next!</h1>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
