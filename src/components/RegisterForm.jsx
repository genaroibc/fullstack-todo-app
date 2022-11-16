import { LoginForm } from "components/LoginForm";
import { useAuthContext } from "context/AuthContext";
import { useRouter } from "next/router";
import { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";

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

export function RegisterForm({ type = "" }) {
  const [requestError, setRequestError] = useState(null);

  const { setAuth } = useAuthContext();

  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();

    if (type !== "login" && type !== "signup") {
      throw new Error('"type" prop must be either login or signup');
    }

    const username = e.target[NAME_INPUT_NAME].value;
    const password = e.target[PASSWORD_INPUT_NAME].value;

    const response = await fetch(`/api/auth/${type}`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password
      })
    });

    const data = await response.json();

    if (response.status !== 200 && response.status !== 201) {
      return setRequestError(data);
    }

    setAuth({ isAuth: true, username: data.username });
    router.push("/tasks");
  };

  return (
    <>
      <LoginForm
        handleSubmit={handleSubmit}
        submitButtonText={type}
        inputsConfig={INPUTS_CONFIG}
      />
      <ErrorMessage error={requestError} />
    </>
  );
}
