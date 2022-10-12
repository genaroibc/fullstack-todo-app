import {
  Form,
  Input,
  Button,
  TextArea,
  Label,
  Container,
} from "semantic-ui-react";

export function TaskForm({ handleSubmit, inputNames = {}, inputValues = {} }) {
  return (
    <Container textAlign="center">
      <Form
        style={{ width: "80%", margin: "auto", fontSize: "1.5rem" }}
        onSubmit={handleSubmit}
      >
        <Label htmlFor={inputNames.title}>Title</Label>

        <br />

        <Input
          style={{ width: "50%", margin: "1rem auto" }}
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
          style={{ width: "100%", margin: "1rem auto" }}
          rows={10}
          type="text"
          name={inputNames.description}
          id={inputNames.description}
          defaultValue={inputValues.description}
        />
        <Button color={"green"} type="submit">
          Create task
        </Button>
      </Form>
    </Container>
  );
}
