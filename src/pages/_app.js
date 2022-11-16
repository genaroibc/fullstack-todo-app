import NavBar from "components/NavBar";
import { AuthContextProvider } from "context/AuthContext";
import "semantic-ui-css/semantic.min.css";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <NavBar />

      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
