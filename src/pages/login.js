import { LoginForm } from "components/LoginForm";

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
  const handleSubmit = async e => {
    e.preventDefault();

    const username = e.target[NAME_INPUT_NAME].value;
    const password = e.target[PASSWORD_INPUT_NAME].value;

    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password
      })
    }).then(console.log);
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
