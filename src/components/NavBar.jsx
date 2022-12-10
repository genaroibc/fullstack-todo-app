import { useAuthContext } from "context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Header } from "semantic-ui-react";
import { v4 as uuid } from "uuid";

const LINKS_CONFIG = [
  {
    title: "Tasks",
    href: "/"
  },
  {
    title: "Create Task",
    href: "/create"
  }
];

export default function NavBar() {
  const { auth, handleLogout } = useAuthContext();

  const router = useRouter();

  const userMessage = auth.isAuth
    ? `Welcome ${auth.username}`
    : "Welcome guest";

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
      }}
      attached={"bottom"}
      inverted={true}
      size={"huge"}
    >
      {LINKS_CONFIG.map(({ title, href, hidden }) => (
        <Link key={uuid()} href={href}>
          <a hidden={!auth.isAuth}>{title}</a>
        </Link>
      ))}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          alignSelf: "end",
          gap: "1rem"
        }}
      >
        <span
          style={{
            color: "honeydew",
            marginRight: "10px"
          }}
        >
          {userMessage}
        </span>
        <Button
          color={"vk"}
          onClick={auth.isAuth ? handleLogout : () => router.push("/login")}
          style={{
            backgroundColor: "steelblue",
            borderRadius: "3px"
          }}
        >
          {auth.isAuth ? "Log Out" : "Log In"}
        </Button>
        <Link href="/sign-up">
          <a style={{ fontSize: "1rem" }}>Sign Up</a>
        </Link>
      </div>
    </Header>
  );
}
