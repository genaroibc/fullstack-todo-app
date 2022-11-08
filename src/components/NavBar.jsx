import { useAuthContext } from "context/AuthContext";
import Link from "next/link";
import { Header } from "semantic-ui-react";

export default function NavBar() {
  const { auth } = useAuthContext();

  const userMessage = auth.isAuth
    ? `Welcome ${auth.username}`
    : "Welcome guest";

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-evenly"
      }}
      attached={"bottom"}
      inverted={true}
      size={"huge"}
    >
      <Link style={{ margin: "1rem " }} href="/">
        Home
      </Link>
      <Link style={{ margin: "1rem " }} href="/dashboard">
        Dashboard
      </Link>
      <Link style={{ margin: "1rem " }} href="/login">
        Login
      </Link>
      <Link style={{ margin: "1rem " }} href="/tasks">
        Tasks
      </Link>
      <Link style={{ margin: "1rem " }} href="/tasks/create">
        Create Task
      </Link>

      <div>
        <span
          style={{
            backgroundColor: "steelblue",
            borderRadius: "50%",
            color: "honeydew"
          }}
        >
          {userMessage}
        </span>
      </div>
    </Header>
  );
}
