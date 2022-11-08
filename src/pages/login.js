import { LoginForm } from "components/LoginForm";
import { useAuthContext } from "context/AuthContext";
import { useRouter } from "next/router";

const NAME_INPUT_NAME = "user-name";
const PASSWORD_INPUT_NAME = "user-password";

const INPUTS_CONFIG = [
  {
    type: "text",
    name: NAME_INPUT_NAME,
    placeholder: "Enter your username"
  },
  {
    type: "password",
    name: PASSWORD_INPUT_NAME,
    placeholder: "Enter your password"
  }
];
export default function Login() {
  const { setAuth } = useAuthContext();
  const handleSubmit = async e => {
    e.preventDefault();

    const username = e.target[NAME_INPUT_NAME].value;
    const password = e.target[PASSWORD_INPUT_NAME].value;

    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password
      })
    });
    const data = await response.json();

    console.log({ data });
    setAuth({ isAuth: true, username: data.username });
  };
  return (
    <>
      <LoginForm
        handleSubmit={handleSubmit}
        submitButtonText="Log In"
        inputsConfig={INPUTS_CONFIG}
      />
    </>
  );
}
