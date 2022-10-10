import styled from "styled-components";

const STForm = styled.form`
  margin: 1rem auto;
  background-color: steelblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const STTextArea = styled.textarea`
  padding: 1rem;

  background-color: #898989;
  margin-bottom: 1rem;
  color: #fff;

  resize: none;
`;

const STInput = styled.input`
  padding: 0.4rem 1rem;

  background-color: #898989;
  margin-bottom: 1rem;
  color: #fff;
`;

export function TaskForm({ handleSubmit }) {
  return (
    <STForm>
      <label htmlFor="task-title">Title</label>
      <STInput type="text" name="task-title" id="task-title" required={true} />

      <label htmlFor="task-description">Description (optional)</label>
      <STTextArea
        rows={10}
        type="text"
        name="task-description"
        id="task-description"
      />
      <button type="submit">Create task</button>
    </STForm>
  );
}
