import { Fragment } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

const STFormContainer = styled.div`
  padding: 2rem;
  max-width: 500px;
  margin: 3rem auto;
  background-color: #000245;
  border-radius: 10px;

  h3 {
    font-size: 2rem;
  }

  div {
    display: block !important;
    max-width: 300px;
    margin: auto;

    input {
      margin: 1rem auto !important;
    }
  }

  button[type="submit"] {
    margin-top: 1.5rem;
  }
`;

export function LoginForm({
  handleSubmit,
  inputsConfig = [],
  submitButtonText
}) {
  return (
    <STFormContainer>
      <h3>{submitButtonText.toUpperCase()}</h3>
      <Form onSubmit={handleSubmit}>
        {inputsConfig.map(inputConfig => (
          <Fragment key={uuid()}>
            <label htmlFor={inputConfig.name}>{inputConfig.placeholder}</label>
            <Input {...inputConfig} />
          </Fragment>
        ))}

        <Button color={"twitter"} type="submit">
          {submitButtonText.toUpperCase()}
        </Button>
      </Form>
    </STFormContainer>
  );
}
