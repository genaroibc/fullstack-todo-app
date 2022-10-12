import NavBar from "components/NavBar";
import "semantic-ui-css/semantic.min.css";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
