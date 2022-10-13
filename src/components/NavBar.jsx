import Link from "next/link";
import { Header } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
      attached={"bottom"}
      inverted={true}
      size={"huge"}
    >
      <Link style={{ margin: "1rem " }} href="/">
        Home
      </Link>
      <Link style={{ margin: "1rem " }} href="/tasks">
        Tasks
      </Link>
      <Link style={{ margin: "1rem " }} href="/tasks/create">
        Create Task
      </Link>
    </Header>
  );
}
