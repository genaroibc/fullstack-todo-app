import { useRouter } from "next/router";
import { useRef } from "react";
import {
  Form,
  Input,
  Button,
  TextArea,
  Label,
  Container,
  Radio
} from "semantic-ui-react";
import { v4 as uuid } from "uuid";

const INPUT_STYLES = { width: "100%", margin: "1rem auto" };

export function TaskForm({
  handleSubmit,
  inputNames = {},
  inputValues = { priority: "low" },
  submitButtonText = "Submit",
  redirectTo = ""
}) {
  const {
    current: { lowId, highId, mediumId }
  } = useRef({
    lowId: uuid(),
    mediumId: uuid(),
    highId: uuid()
  });

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

        <h4>Task priority:</h4>

        <label htmlFor={lowId}>LOW</label>
        <Radio
          name={inputNames.priority}
          id={lowId}
          defaultChecked={inputValues.priority === "low"}
          value="low"
        />

        <br />
        <br />

        <label htmlFor={mediumId}>MEDIUM</label>
        <Radio
          name={inputNames.priority}
          id={mediumId}
          defaultChecked={inputValues.priority === "medium"}
          value="medium"
        />

        <br />
        <br />

        <label htmlFor={highId}>HIGH</label>
        <Radio
          name={inputNames.priority}
          id={highId}
          defaultChecked={inputValues.priority === "high"}
          value="high"
        />

        <br />
        <br />

        <Button color={"green"} type="submit">
          {submitButtonText}
        </Button>
      </Form>
    </Container>
  );
}
