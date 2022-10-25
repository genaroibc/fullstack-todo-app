import { useRouter } from "next/router";
import {
  Form,
  Input,
  Button,
  TextArea,
  Label,
  Container,
} from "semantic-ui-react";

const INPUT_STYLES = { width: "100%", margin: "1rem auto" };

export function TaskForm({
  handleSubmit,
  inputNames = {},
  inputValues = {},
  submitButtonText = "Submit",
  redirectTo = "",
}) {
  const { push } = useRouter();
  return (
    <Container textAlign="center">
      <Form
        style={{ width: "80%", margin: "auto", fontSize: "1.5rem" }}
        onSubmit={async e => {
          await handleSubmit(e);
          redirectTo && push(redirectTo);
        }}
      >
        <Label htmlFor={inputNames.title}>Title</Label>

        <br />

        <Input
          style={INPUT_STYLES}
          minLength={6}
          type="text"
          name={inputNames.title}
          id={inputNames.title}
          required={true}
          defaultValue={inputValues.title}
        />

        <br />
        <br />

        <Label htmlFor={inputNames.description}>Description (optional)</Label>

        <br />

        <TextArea
          style={INPUT_STYLES}
          rows={10}
          type="text"
          name={inputNames.description}
          id={inputNames.description}
          defaultValue={inputValues.description}
        />
        <Button color={"green"} type="submit">
          {submitButtonText}
        </Button>
      </Form>
    </Container>
  );
}
