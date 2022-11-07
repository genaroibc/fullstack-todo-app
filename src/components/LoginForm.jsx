import { Fragment } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { v4 as uuid } from "uuid";

export function LoginForm({
  handleSubmit,
  inputsConfig = [],
  submitButtonText
}) {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        {inputsConfig.map(({ type, placeholder, name }) => (
          <Fragment key={uuid()}>
            <Input type={type} placeholder={placeholder} name={name} />
            <br />
            <br />
          </Fragment>
        ))}

        <Button color={"twitter"} type="submit">
          {submitButtonText}
        </Button>
      </Form>
    </div>
  );
}
